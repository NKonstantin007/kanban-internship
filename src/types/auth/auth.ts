export type SignUpUserData = {
  email: string;
  name: string;
  password: string;
};

export type SignInUserData = {
  name: string;
  password: string;
};

export type SignInUserResponse = {
  accessToken: string;
};
