import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage("es")} className="p-2 bg-gray-200 rounded">Español</button>
      <button onClick={() => changeLanguage("en")} className="p-2 bg-gray-200 rounded">English</button>
      <button onClick={() => changeLanguage("de")} className="p-2 bg-gray-200 rounded">Deutsch</button>
    </div>
  );
};
