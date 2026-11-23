import { FontItem, fontList as googleFontList } from "@/lib/fonts";

export interface ExtendedFontItem extends FontItem {
  provider?: "google";
}

const fontListCache: { google?: ExtendedFontItem[]; all?: ExtendedFontItem[] } = {};

const getGoogleFontsWithProvider = (): ExtendedFontItem[] => {
  if (!fontListCache.google) {
    fontListCache.google = googleFontList.map((font) => ({
      ...font,
      provider: "google",
    }));
  }
  return fontListCache.google;
};

export const getAllFontList = (): ExtendedFontItem[] => {
  if (!fontListCache.all) {
    fontListCache.all = getGoogleFontsWithProvider();
  }
  return fontListCache.all;
};

export const loadFontsByProvider = (_provider: string): void => {
  /* Google Fonts load via public CSS only */
};

export const loadMoreFontsByProvider = async (_provider: string): Promise<number> => 0;

export const loadAllFonts = () => null;

export const getFontsByProvider = (
  _provider: string,
): ExtendedFontItem[] => getGoogleFontsWithProvider();

export const getAvailableProviders = (): ("google")[] => ["google"];

export const clearFontCache = (specificCache?: string) => {
  if (specificCache) {
    delete (fontListCache as Record<string, unknown>)[specificCache];
  } else {
    fontListCache.google = undefined;
    fontListCache.all = undefined;
  }
};