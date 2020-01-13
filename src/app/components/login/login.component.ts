import { Component, OnInit } from "@angular/core";
import { UserLogin } from "src/app/models/Auth.model";
import { BooleanUtilities } from "src/app/utilities/boolean.utilities";
import { Router } from "@angular/router";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/services/auth.service";
import { isLoggedOn } from "src/app/utilities/token-util";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public faLock = faLock;

  public user: UserLogin;
  public error = false;
  public ready = false;

  public showResetErrors = false;
  public resetComplete = false;

  public get resetEmailError(): boolean {
    return !BooleanUtilities.hasValue(this.user.email);
  }

  public get resetErrors(): String[] {
    const errors: String[] = [];
    if (this.resetEmailError) {
      errors.push("Please enter an email");
    }
    return errors;
  }

  public showRegisterErrors = false;
  public registerComplete = false;

  private get resetValid(): boolean {
    return this.resetErrors.length === 0;
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.checkLoginStatus();
  }

  private checkLoginStatus() {
    const loggedIn = isLoggedOn();
    if (loggedIn) {
      this.router.navigate(["/admin"]);
    } else {
      this.user = {
        email: "",
        password: "",
      };
      this.ready = true;
    }
  }

  public login(): void {
    let response: boolean;
    this.authService.login(this.user)
      .subscribe((res) => response = res,
        (error) => {
          this.error = true;
        },
        () => {
          if (response) {
            this.router.navigate(["/admin"]);
          }
        });
  }

  public submitPasswordReset(): void {
    if (this.resetValid) {
      this.resetPassword();
    }
    this.showResetErrors = true;
  }

  private resetPassword() {
    let response;
    this.resetComplete = true;
    this.userService.resetPassword(this.user.email)
      .subscribe((res) => response = res,
        (error) => {
          console.log("password update failed");
        });
  }

}
