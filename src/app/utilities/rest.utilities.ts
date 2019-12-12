import { BASE_SERVICES_URL } from "../constants/rest-constants";

const remoteUrl = "https://overton-services-dev.herokuapp.com/";

export abstract class RestUtilities {

  public static buildRestUrl(): string {
    return `${BASE_SERVICES_URL}`;
  }

  public static buildUrl(controller): string {
    return remoteUrl + controller;
  }
}
