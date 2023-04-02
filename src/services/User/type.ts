export type UserType = 'USER' | 'ADMIN';

export interface UserReq {
  id: string;
  userId?: string;
  name?: string;
  userType: UserType;
  createdAt?: Date;
  updatedAt?: Date;
}
