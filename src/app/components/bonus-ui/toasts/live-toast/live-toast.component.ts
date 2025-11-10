import { Component } from '@angular/core';

@Component({
  selector: 'app-live-toast',
  standalone: true,
  imports:[],
  templateUrl: './live-toast.component.html',
  styleUrls: ['./live-toast.component.scss']
})

export class LiveToastComponent {
  
  public topRightShow : boolean = false;
  public bottomRightShow : boolean = false;
  public topLeftShow : boolean = false;
  public bottomLeftShow : boolean = false;

  
  topRight(){
    this.topRightShow = true;
  }

  topRightClose(){
    this.topRightShow = false;
  }

  bottomRight(){
    this.bottomRightShow = true;
  }

  topBottomClose(){
    this.bottomRightShow = false;
  }

  topLeft(){
    this.topLeftShow = true;
  }

  topLeftClose(){
    this.topLeftShow = false;
  }

  bottomLeft(){
   this.bottomLeftShow = true;
  }

  bottomLeftClose(){
    this.bottomLeftShow = false;
  }

}
