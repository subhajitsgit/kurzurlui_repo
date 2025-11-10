import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-danger-alert',
  standalone:true,
  imports:[],
  templateUrl: './danger-alert.component.html',
  styleUrls: ['./danger-alert.component.scss']
})

export class DangerAlertComponent {
  dangerALert() {
    Swal.fire({
      title : "It's danger",
      text : 'Something went wrong!',
      icon : 'error',
      confirmButtonColor : 'var(--theme-deafult)',
    })
  }

}
