import { Component } from '@angular/core';
import { ColorVariantComponent } from './color-variant/color-variant.component';
import { FullColorVariantComponent } from './full-color-variant/full-color-variant.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-two',
  standalone: true,
  imports: [ColorVariantComponent,FullColorVariantComponent,NgSelectModule,FormsModule],
  templateUrl: './select-two.component.html',
  styleUrls: ['./select-two.component.scss']
})

export class SelectTwoComponent {
  public selectedCity: string;
  public selectedCityIds: string[] = [];
  public selectedCityIds2: string[] = [];
  public selectedCityIds3: string[] = [];
  public selectedCityIds4: string[] = [];
  public selectedCityIds5: string[] = [];
  public selectedCityIds6: string[] = [];
  public selectedCityName = 'Vilnius';
  public selectedCityId: number = 0;
  public selectedUserIds: number[] = [];
  public store: boolean = true;

  public Placeholder = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Wyoming' },
    { id: 3, name: 'Coming' },
    { id: 4, name: 'Hanry Die' },
    { id: 4, name: 'John Deo' },
  ];

  public cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ];

  public Placeh = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Wyoming' },
    { id: 3, name: 'Coming' },
    { id: 4, name: 'Hanry Die' },
    { id: 4, name: 'John Deo' },
  ];

  Enable(val: boolean) {
    this.store = val;
  }

}
