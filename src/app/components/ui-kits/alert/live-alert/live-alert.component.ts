import { Component } from "@angular/core";

@Component({
  selector: "app-live-alert",
  standalone: true,
  imports: [],
  templateUrl: "./live-alert.component.html",
  styleUrls: ["./live-alert.component.scss"],
})

export class LiveAlertComponent {

  public array: number[] = [];
  public counter: number = 0;

  add() {
    this.counter++;
    this.array.push(this.counter);
  }

  close(data: number) {
    this.array.splice(this.array.indexOf(data), 1);
  }
}
