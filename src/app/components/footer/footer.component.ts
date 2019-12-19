import { Component, OnInit } from "@angular/core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { EmailMessage } from 'src/app/models/EmailMessage.model';
import { MailService } from 'src/app/services/mail.service';
import { BooleanUtilities } from 'src/app/utilities/boolean.utilities';
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  public year = new Date().getFullYear();

  public emailMessage: EmailMessage;
  public error = false;

  public faEnvelope = faEnvelope;
  public faFacebook = faFacebook;
  public faTwitter = faTwitter;
  public faYoutube = faYoutube;
  public faInstagram = faInstagram;

  public get messageReady(): boolean {
    const addressSet = !BooleanUtilities.isNullOrUndefined(this.emailMessage.emailAddress);
    const messageSet = !BooleanUtilities.isNullOrUndefined(this.emailMessage.message);
    return addressSet && messageSet;
  }

  public get showError(): boolean {
    return this.error && !this.messageReady;
  }

  constructor(
    private mailService: MailService,
    public textService: TextService,
  ) { }

  public ngOnInit() {
    this.resetMessage();
  }

  public attemptToSendEmail(): void {
    if (this.messageReady) {
      this.error = false;
      this.sendMessage();
    } else {
      this.error = true;
    }
  }

  private sendMessage(): void {
    let response;
    this.mailService.sendMessage(this.emailMessage)
      .subscribe((res) => response = res,
        (error) => {
          console.log("send email failed");
        },
        () => {
          this.resetMessage();
        });
  }

  private resetMessage() {
    this.error = false;
    this.emailMessage = {
      emailAddress: null,
      message: null,
    };
  }

}
