import { Injectable } from '@angular/core';
import { EmailMessage } from '../models/EmailMessage.model';
import { RestHelperService } from './rest-helper.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient,
    private restHelperService: RestHelperService,
  ) { }
  
  public sendMessage(emailMessage: EmailMessage): Observable<any> {
    const url = this.restHelperService.buildRestUrl("mail");
    return this.http.post(url, emailMessage, this.restHelperService.headersWithAuth) as Observable<any>;
  }
}
