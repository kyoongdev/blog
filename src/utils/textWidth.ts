const KOREAN_REGEX = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
const KOREAN_CONSONANT_REGEX = /[ㄱ-ㅎ]/g;
const KOREAN_COLLECTION_REGEX = /[ㅏ-ㅣ]/g;
const KOREAN_SPACE = 13;
const ENGLISH_SPACE = 7.2;

export const getTextWidth = (text: string) => {
  return Array.from(text).reduce<number>((acc, cur) => {
    if (cur.match(KOREAN_REGEX)) {
      if (cur.match(KOREAN_CONSONANT_REGEX) || cur.match(KOREAN_COLLECTION_REGEX)) {
        return acc + KOREAN_SPACE + 0.2;
      } else return acc + KOREAN_SPACE + 1;
    }
    return acc + ENGLISH_SPACE;
  }, 0);
};
