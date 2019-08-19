import { BASE_SERVICES_URL } from "../constants/rest-constants";

export abstract class RestUtilities {

  public static buildRestUrl(): string {
    return `${BASE_SERVICES_URL}`;
  }
}
