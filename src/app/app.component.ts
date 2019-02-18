import { Component } from '@angular/core';
import {Conference} from './modules/conference/conference';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  conference:Conference=new Conference()
  title = 'projetconference';
}
