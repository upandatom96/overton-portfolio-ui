import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HealthService } from "./health.service";

describe("HealthService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it("should be created", () => {
    const service: HealthService = TestBed.get(HealthService);
    expect(service).toBeTruthy();
  });
});
