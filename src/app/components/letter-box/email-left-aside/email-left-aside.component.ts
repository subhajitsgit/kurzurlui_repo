import { Component, Output } from "@angular/core";
import * as data from "../../../shared/data/data/ecommerce/email";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ComposeEmailComponent } from "../model/compose-email/compose-email.component";
import { AddLabelComponent } from "../model/add-label/add-label.component";
import { email } from "../../../shared/data/data/ecommerce/email";
import { CommonSvgIconComponent } from "../../../shared/components/common-svg-icon/common-svg-icon.component";
import { CommonModule } from "@angular/common";
import { EmailContentComponent } from "../email-content/email-content.component";
import { ClickOutsideDirective } from "../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-email-left-aside",
  templateUrl: "./email-left-aside.component.html",
  standalone: true,
  imports: [CommonSvgIconComponent,CommonModule,EmailContentComponent,ClickOutsideDirective],
  styleUrls: ["./email-left-aside.component.scss"],
})
export class EmailLeftAsideComponent {

  public emailFilter = data.emailFilter;
  public selectedId : number;
  public status : number;
  public isOpen : boolean =  false;

  constructor(private modal: NgbModal) { }

  changeData(item:email) {
    const getId = this.emailFilter.filter((x) => x.id == item.id);
    this.selectedId = getId[0].id;
    this.emailFilter.filter(data =>{
      if(data.id == item.id){
          data.status = true;
      } else{
        data.status = false;
      }
     })
  }

  openEmail(){
    this.modal.open(ComposeEmailComponent , { size : 'lg' });
  }

  addLabel(){
    this.modal.open(AddLabelComponent);
  }

  Outside(){
    this.isOpen = false;  
   }
   
}
