import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get("x-default-locale") || "en";

  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "pl"],
    defaultLocale: "en",
  });

  if (!request.nextUrl.search.includes("algh")) {
    request.nextUrl.searchParams.set("algh", "bubble");
  }

  const response = handleI18nRouting(request);

  response.headers.set("x-default-locale", defaultLocale);

  return response;
}

export const config = {
  matcher: ["/", "/(pl|en)/:path*"],
};
