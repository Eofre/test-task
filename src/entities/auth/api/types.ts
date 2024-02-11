export interface ISignInRequest {
  email: string;
  password: string;
}

export interface ISignInResponse {
  token: string;
}

export interface ISignUpRequest {
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignUpResponse {
  id: number;
  token: string;
}
