import { Component,Input,OnDestroy  } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-vscomponent',
  templateUrl: './vscomponent.component.html',
  styleUrls: ['./vscomponent.component.css']
})
export class VScomponentComponent {
  @Input() emails: any[] = [];

  toggleEmail(index: number) {
    this.emails[index].espansa = !this.emails[index].espansa;
  }

  evidenziaSpeciale(index: number) {
    this.emails[index].evidenziato = !this.emails[index].evidenziato;
  }
}
