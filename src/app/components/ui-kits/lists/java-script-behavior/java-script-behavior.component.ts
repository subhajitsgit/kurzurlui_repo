import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-java-script-behavior',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './java-script-behavior.component.html',
  styleUrls: ['./java-script-behavior.component.scss']
})

export class JavaScriptBehaviorComponent {

  public active = "home";

}
