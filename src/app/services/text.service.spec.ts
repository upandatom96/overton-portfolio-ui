import { TestBed } from "@angular/core/testing";

import { TextService } from "./text.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("TextService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it("should be created", () => {
    const service: TextService = TestBed.get(TextService);
    expect(service).toBeTruthy();
  });
});
