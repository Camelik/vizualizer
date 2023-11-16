import { getAvailableLocales } from "@/utils/getAvailableLocales";
import { useLocale } from "next-intl";
import Link from "next/link";

function LanguageDisplayer() {
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

  if (availableLocales.includes(locale)) {
    return (
      <Link className="cursor-pointer" href={`/${nextLocale}`}>
        {localeToDisplay}
      </Link>
    );
  }

  return null;
}

export default LanguageDisplayer;
