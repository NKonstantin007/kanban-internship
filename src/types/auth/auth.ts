export type SignInUserData = {
  email: string;
  password: string;
};

export type SignInUserResponse = {
  accessToken: string;
};

export type SignUpUserData = {
  email: string;
  name: string;
  password: string;
};

export type SignUnUserResponse = {
  success: boolean;
};

export type RefreshTokenData = {
  refreshToken: string;
};

export type RefreshTokenResponse = {
  token: string;
  refreshToken: string;
};

export type LogoutUserResponse = {
  success: boolean;
};
