import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-unique-toast',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './unique-toast.component.html',
  styleUrls: ['./unique-toast.component.scss']
})

export class UniqueToastComponent {

  public isShow : boolean = true;

  close(){
    this.isShow = false;
  }

}
