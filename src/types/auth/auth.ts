export type SignInUserData = {
  name: string;
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
