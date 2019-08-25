import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/Auth.model';
import { BooleanUtilities } from 'src/app/utilities/boolean.utilities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
    // TODO auth service
    // private authService: AuthService,
    // TODO user service
    // private userService: UserService,
  ) { }

  ngOnInit() {
    this.checkLoginStatus();
  }

  private checkLoginStatus() {
    // TODO token utils
    // const loggedIn = isLoggedOn();
    // if (loggedIn) {
    //   this.router.navigate(["/admin"]);
    // } else {
    //   this.user = {
    //     email: "",
    //     password: "",
    //   };
    //   this.ready = true;
    // }
    this.ready = true;
  }

  public login(): void {
    // TODO auth service
    // let response: boolean;
    // this.authService.login(this.user)
    //   .subscribe((res) => response = res,
    //     (error) => {
    //       this.error = true;
    //     },
    //     () => {
    //       if (response) {
    //         this.router.navigate(["/profile"]);
    //       }
    //     });
  }

  public submitPasswordReset(): void {
    if (this.resetValid) {
      this.resetPassword();
    }
    this.showResetErrors = true;
  }

  private resetPassword() {
    // TODO user service
    // let response;
    // this.resetComplete = true;
    // this.userService.resetPasswordAsAnyoneAutomatic(this.user.email)
    // .subscribe((res) => response = res,
    // (error) => {
    //   console.log("password update failed");
    // });
  }

}
