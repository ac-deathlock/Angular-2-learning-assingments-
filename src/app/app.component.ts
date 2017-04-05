import { Component } from '@angular/core';
import { HighlightDirective} from './highlight.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  username = ' ';
  xyz = true;
  log = [];

  onToggle()
  {
    this.log.push(this.log.length + 1)
  }
}
