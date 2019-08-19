import { RestUtilities } from "./rest.utilities";
import { BASE_SERVICES_URL } from "../constants/rest-constants";

describe("RestUtilities", () => {
  describe("buildRestUrl", () => {
    it("returns the base url for overton services if no parameters given", () => {
      expect(RestUtilities.buildRestUrl()).toEqual(BASE_SERVICES_URL);
    });
  });
});
