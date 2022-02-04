export type RegisterUserData = {
  name: String;
  login: String;
  password: String;
};

export type RegisterUserFormData = RegisterUserData & {
  confirmedPassword: string;
};
