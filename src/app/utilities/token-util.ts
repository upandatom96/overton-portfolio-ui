import { UserDetails } from "../models/AuthRes.model";

export function getToken(): string {
  return localStorage.getItem("ccc-token");
}

export function removeToken(): void {
  window.localStorage.removeItem("ccc-token");
}

export function saveToken(token: string): void {
  localStorage.setItem("ccc-token", token);
}

export function getUserDetails(): UserDetails {
  let payload;
  const token = getToken();
  if (token) {
    payload = token.split(".")[1];
    payload = window.atob(payload);
    return JSON.parse(payload);
  } else {
    return null;
  }
}

export function isLoggedOn(): boolean {
  const user = getUserDetails();
  if (user) {
    return user.exp > Date.now() / 1000;
  } else {
    return false;
  }
}
