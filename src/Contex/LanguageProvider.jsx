import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
// import i18next from "i18next";
import { createContext } from "react";
import i18next from "i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // resources: {
    //   en: {
    //     translation: {
    //       welcomeText: "Welcome to React and react-i18next",
    //     },
    //   },
    //   ar: {
    //     translation: {
    //       welcomeText: "Welcome to Arab",
    //     },
    //   },
    // },
    detection: {
      order: [
        "path",
        "localStorage",
        "cookie",
        "querystring",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "subdomain",
      ],
    },
    fallbackLng: "en",
    backend: {
      loadPath: "/locales/{{lng}}/translate.json",
    },
    react: { useSuspense: false },
    // interpolation: {
    //   escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    // },
  });

export const LanguageContex = createContext();
// eslint-disable-next-line react-refresh/only-export-components, react-hooks/rules-of-hooks
// export const useLanguage = useContext(LanguageContex);

// eslint-disable-next-line react/prop-types
const LanguageProvider = ({ children }) => {
  const { t } = useTranslation();
  const languages = [
    { code: "en", name: "Engliah", country_code: "gb" },
    { code: "ar", name: "Arabic", country_code: "ar" },
  ];
  const handleChangeLanguage = (code) => {
    if (code === "ar") {
      document.dir = "rtl";
    } else {
      document.dir = "ltr";
    }
    console.log(i18next.language);
    return i18next.changeLanguage(code);
  };
  const test = "Test";

  const languageInfo = { t, languages, handleChangeLanguage, test };

  return (
    <LanguageContex.Provider value={languageInfo}>
      {children}
    </LanguageContex.Provider>
  );
};

export default LanguageProvider;
