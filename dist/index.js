"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ready = void 0;
const path = __importStar(require("path"));
const i18next_1 = __importDefault(require("i18next"));
const i18next_fs_backend_1 = __importDefault(require("i18next-fs-backend"));
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
const backendOptions = {
    loadPath: path.resolve(path.join("locales", "{{lng}}", "{{ns}}.json")),
    addPath: path.resolve(path.join("locales", "{{lng}}", "{{ns}}.missing.json"))
};
const initOptions = {
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
exports.ready = i18next_1.default.use(i18next_fs_backend_1.default).init(initOptions);
exports.ready.then((t) => {
    console.log("hello:" + t("hellokey", { lng: "fr-FR" }));
    console.log("hello:" + t("hellokey", { lng: "fr-FR" }));
});
exports.default = i18next_1.default;
