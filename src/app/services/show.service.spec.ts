import { TestBed } from "@angular/core/testing";

import { ShowService } from "./show.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ShowService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it("should be created", () => {
    const service: ShowService = TestBed.get(ShowService);
    expect(service).toBeTruthy();
  });
});
