import { Component } from '@angular/core';
import { AlignmentsComponent } from './alignments/alignments.component';
import { BasicComponent } from './basic/basic.component';
import { DarkComponent } from './dark/dark.component';
import { DividerComponent } from './divider/divider.component';
import { DropdownSizingComponent } from './dropdown-sizing/dropdown-sizing.component';
import { HeadingComponent } from './heading/heading.component';
import { HelperClassesComponent } from '../helper-classes/helper-classes.component';
import { InputTypeComponent } from './input-type/input-type.component';
import { JustifyContentsComponent } from './justify-contents/justify-contents.component';
import { RoundedComponent } from './rounded/rounded.component';
import { SplitDropdownComponent } from './split-dropdown/split-dropdown.component';
import { UniqueComponent } from './unique/unique.component';
import { HelperCardComponent } from './helper-card/helper-card.component';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [AlignmentsComponent,BasicComponent,DarkComponent,DividerComponent,DropdownSizingComponent,
    HeadingComponent,HelperClassesComponent,InputTypeComponent,JustifyContentsComponent,RoundedComponent,SplitDropdownComponent,
    UniqueComponent,HelperCardComponent
  ],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

}
