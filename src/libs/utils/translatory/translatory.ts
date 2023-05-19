import { dictionaryToTranslate } from "./dictionar-to-translate";

export function translatory(objeto: any): Record<string, any> {
  // var to save the translated value
  const tranlated: Record<string, any> = {};
  // to translate
  for (const key in objeto) {
    if (Object.prototype.hasOwnProperty.call(objeto, key)) {
      const keyTranslated = dictionaryToTranslate[key] || key;
      tranlated[keyTranslated] = objeto[key];
    }
  }
  // return translated value
  return tranlated;
}
