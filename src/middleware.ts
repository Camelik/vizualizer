import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { generateUniqueNumbers } from "./utils/generateUniqueNumbers";
import { useCompressor } from "./utils/compressor";

export default async function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get("x-default-locale") || "en";

  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "pl"],
    defaultLocale: "en",
  });

  if (!request.nextUrl.search.includes("algh")) {
    request.nextUrl.searchParams.set("algh", "bubble");
  }

  if (!request.nextUrl.search.includes("sort")) {
    request.nextUrl.searchParams.set("sort", "ASC");
  }

  if (!request.nextUrl.search.includes("code")) {
    request.nextUrl.searchParams.set("code", "js");
  }

  if (!request.nextUrl.search.includes("data")) {
    const { compress } = useCompressor();

    const numberOfUniqueNumbers = 8;
    const data = generateUniqueNumbers(numberOfUniqueNumbers);

    const compressedData = await compress(data);
    request.nextUrl.searchParams.set("data", compressedData);
  }

  const response = handleI18nRouting(request);

  response.headers.set("x-default-locale", defaultLocale);

  return response;
}

export const config = {
  matcher: ["/", "/(pl|en)/:path*"],
};
