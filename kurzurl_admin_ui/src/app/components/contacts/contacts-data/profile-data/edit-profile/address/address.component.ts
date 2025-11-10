import { Component, Input } from '@angular/core';
import * as data from '../../../../../../shared/data/data/contacts/contacts';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})

export class AddressComponent {
  
  @Input() profileData: data.profileDataList;

}
