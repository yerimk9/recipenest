export interface Recipe {
  RCP_PARTS_DTLS: string;
  RCP_WAY2: string;
  MANUAL_IMG20: string;
  MANUAL20: string;
  RCP_SEQ: string;
  INFO_NA: string;
  INFO_WGT: string;
  INFO_PRO: string;
  MANUAL_IMG13: string;
  MANUAL_IMG14: string;
  MANUAL_IMG15: string;
  MANUAL_IMG16: string;
  MANUAL_IMG10: string;
  MANUAL_IMG11: string;
  MANUAL_IMG12: string;
  MANUAL_IMG17: string;
  MANUAL_IMG18: string;
  MANUAL_IMG19: string;
  INFO_FAT: string;
  HASH_TAG: string;
  MANUAL_IMG02: string;
  MANUAL_IMG03: string;
  RCP_PAT2: string;
  MANUAL_IMG04: string;
  MANUAL_IMG05: string;
  MANUAL_IMG01: string;
  MANUAL01: string;
  ATT_FILE_NO_MK: string;
  MANUAL_IMG06: string;
  MANUAL_IMG07: string;
  MANUAL_IMG08: string;
  MANUAL_IMG09: string;
  MANUAL08: string;
  MANUAL09: string;
  MANUAL06: string;
  MANUAL07: string;
  MANUAL04: string;
  MANUAL05: string;
  MANUAL02: string;
  MANUAL03: string;
  ATT_FILE_NO_MAIN: string;
  MANUAL11: string;
  MANUAL12: string;
  MANUAL10: string;
  INFO_CAR: string;
  MANUAL19: string;
  RCP_NA_TIP: string;
  INFO_ENG: string;
  MANUAL17: string;
  MANUAL18: string;
  RCP_NM: string;
  MANUAL15: string;
  MANUAL16: string;
  MANUAL13: string;
  MANUAL14: string;
}

export interface CardCarouselProps {
  recipes: Recipe[];
}
export interface RecipeContainerProps {
  recipe: Recipe[]; 
}

export interface LoopingTextState {
  el: HTMLElement;
  lerp: {
    current: number;
    target: number;
  };
  interpolationFactor: number;
  speed: number;
  direction: number;
}
