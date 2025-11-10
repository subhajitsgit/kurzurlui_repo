import { Component } from "@angular/core";
import * as data from "../../shared/data/data/tasks/tasks";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NewTaskComponent } from "./modal/new-task/new-task.component";
import { CreateTagComponent } from "./modal/create-tag/create-tag.component";
import { TasksDataComponent } from "./tasks-data/tasks-data.component";
import { FeatherIconsComponent } from "../../shared/components/feather-icons/feather-icons.component";
import { CommonModule } from "@angular/common";
import { ClickOutsideDirective } from "../../shared/directive/click-outside.directive";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports:[TasksDataComponent,FeatherIconsComponent,CommonModule,ClickOutsideDirective],
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})

export class TasksComponent {

  public selectedId: number;
  public tasks = data.tasks;
  public view = data.view;
  public statusData: boolean;
  public isOpen: boolean = false;

  ngOnInit(){
    let trueData = this.tasks.filter(x => x.status == true)
    this.statusData = trueData[0]?.status;
  }

  constructor(private modalService: NgbModal) {}

  changeData(list: data.tasks) {
    const getId = this.view.filter((x) => x.title_id == list.title_id);
    this.selectedId = getId[0].title_id;
  }

  changeData1(list: number) {
    const getId = this.tasks.filter((x) => x.title_id == list);
    this.selectedId = getId[0].title_id;
  }

  newTasks() {
    const modalRef = this.modalService.open(NewTaskComponent, {
      size: "lg",
    });
  }

  createTasks() {
    const modalRef = this.modalService.open(CreateTagComponent, {
      size: "lg",
    });
  }

  Outside(){
    this.isOpen = false;  
   }
}
