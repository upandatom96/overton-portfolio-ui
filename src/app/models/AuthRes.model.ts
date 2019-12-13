export interface AuthRes {
  text: string;
  authorized: boolean;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserDetails {
  email: string;
  name: string;
  admin: boolean;
  exp: number;
  iat: number;
  userId: string;
  authorized: boolean;
  password?: string; // usually excluded
  text?: string;
}

export interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}

export interface AuthCheckResponse {
  text: string;
  authorized: boolean;
}

export interface AdminCheckResponse extends AuthCheckResponse {
  admin: boolean;
}
