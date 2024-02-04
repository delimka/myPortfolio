import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../locales/en.json";
import est from "../../locales/est.json";
import ru from "../../locales/ru.json";

const initializeI18n = async () => {
  return await i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    lng: localStorage.getItem("language") || "en", 
    resources: {
      en: {
        translation: en,
      },
      est: {
        translation: est,
      },
      ru: {
        translation: ru,
      },
    },
  });
};

initializeI18n().catch(() => {
alert("Can't translate the page.")});


i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});


export default i18n;