import { getAvailableLocales } from "@/utils/getAvailableLocales";
import { getQueryString } from "@/utils/getQueryString";
import { useLocale } from "next-intl";
import Link from "next/link";

function LanguageDisplayer({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const locale = useLocale();
  const availableLocales = getAvailableLocales();
  const localeIndex = availableLocales.indexOf(locale);

  const localeMappings: { [key: string]: string } = {
    en: "en-US",
    pl: "pl-PL",
  };

  const localeToDisplay = localeMappings[locale] || locale;

  const nextLocale =
    localeIndex === availableLocales.length - 1
      ? availableLocales[0]
      : availableLocales[localeIndex + 1];

  const queryString = getQueryString(searchParams);

  if (availableLocales.includes(locale)) {
    return (
      <Link
        className="cursor-pointer select-none min-w-[49px]"
        href={`/${nextLocale}?${queryString}`}
      >
        {localeToDisplay}
      </Link>
    );
  }

  return null;
}

export default LanguageDisplayer;
