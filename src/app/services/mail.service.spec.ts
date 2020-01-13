import { TestBed } from "@angular/core/testing";

import { MailService } from "./mail.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("MailService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it("should be created", () => {
    const service: MailService = TestBed.get(MailService);
    expect(service).toBeTruthy();
  });
});
