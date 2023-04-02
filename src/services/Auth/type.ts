export interface LoginReq {
  userId: string;
  password: string;
}

export interface RegisterReq extends LoginReq {
  name: string;
}

export interface TokenRes {
  accessToken: string;
  refreshToken: string;
}
