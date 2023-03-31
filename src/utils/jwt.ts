export const ACCESS_TOKEN = 'KYOONG_DEV_ACCESS_TOKEN';
export const REFRESH_TOKEN = 'KYOONG_DEV_REFRESH_TOKEN';

export interface Tokens {
  accessToken: string | null;
  refreshToken: string | null;
}

export const getTokens = (): Tokens => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);

  return { accessToken, refreshToken };
};

export const setTokens = (tokens: Tokens) => {
  if (!tokens.accessToken || !tokens.refreshToken) {
    return;
  }

  localStorage.setItem(ACCESS_TOKEN, tokens.accessToken);
  localStorage.setItem(REFRESH_TOKEN, tokens.refreshToken);
};

export const clearTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};
