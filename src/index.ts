import * as path from "path";
import i18next, { InitOptions } from "i18next";
import fsBackend, { i18nextFsBackend } from "i18next-fs-backend";

const locales = [
  "en-US",
  "en-AU",
  "ja-JP",
  "it-IT",
  "es-ES",
  "he-IL",
  "fr-FR",
  "ca-ES",
  "fi-FI",
  "zn-TW",
  "ru-RU",
  "nl-NL",
  "ko-KO",
  "de-DE",
  "zn-CH",
  "ar-SA",
  "cs-CZ",
  "pl-PL",
  "pt-BR",
  "th-TH"
];

const backendOptions: i18nextFsBackend.i18nextFsBackendOptions = {
  loadPath: path.resolve(path.join("locales", "{{lng}}", "{{ns}}.json")),
  addPath: path.resolve(path.join("locales", "{{lng}}", "{{ns}}.missing.json"))
};

const initOptions: InitOptions = {
  debug: true,
  lng: "en-US",
  ns: ["manifest"],
  defaultNS: "manifest",
  preload: locales,
  saveMissing: true,
  backend: backendOptions,
  keySeparator: ".",
  nsSeparator: ":",
  fallbackLng: false,
  saveMissingTo: "current",
  initImmediate: true,
  supportedLngs: locales,
  parseMissingKeyHandler: () => "", // causes t() to return "" for missing translations.
};

/**
 * A promise that resolves (to the t() function) when i18n is ready.
 */
export const ready = i18next.use(fsBackend).init(initOptions);
ready.then((t) => {
  console.log("hello:" + t("hellokey", { lng: "fr-FR" }));
  console.log("hello:" + t("hellokey", { lng: "fr-FR" }));
});

export default i18next;
