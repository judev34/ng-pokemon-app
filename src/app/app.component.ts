import { Component } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {

  faCode = faCode;
  faHome = faHome;
  faBell = faBell;
  faEnvelope = faEnvelope;
}
