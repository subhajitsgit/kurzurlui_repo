import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FeatherIconsComponent } from '../../shared/components/feather-icons/feather-icons.component';
import { catchError, throwError } from 'rxjs';
import { DismissingLightAlertComponent } from "../../components/ui-kits/alert/dismissing-light-alert/dismissing-light-alert.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FeatherIconsComponent, DismissingLightAlertComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {
  public show: boolean = false;
  public registerForm: FormGroup;
  public errorMessage: string | null = null;
  public alertGoogleMessage: string;
  public showGoogleAlert: boolean;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private http: HttpClient
  ) {
    // Check if user is already logged in
    // const userData = localStorage.getItem('user');
    // if (userData) {
    //   this.router.navigate(['/dashboard/default']);
    // }


    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/.*\d.*/) // Ensures at least one digit
        ]
      ]
    });
    this.alertGoogleMessage = 'Error with Google Auth'
    this.showGoogleAlert = false;
  }

  ngOnDestroy(): void {
    this.showGoogleAlert = false;
  }

  // Toggle password visibility
  showPassword() {
    this.show = !this.show;
  }

  // Handle register form submission
  register() {
    if (this.registerForm.valid) {
      this.errorMessage = null; // Clear previous errors
      const {  email, password} = this.registerForm.value;

      const userName = email; 
      const firstName = email; 
      const lastName = email; 

      // Make API call to register endpoint
      this.http
        .post('http://localhost:5057/api/auth/register', {
          userName,
          email,
          password,
          firstName,
          lastName
        })
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.errorMessage = error.error || error.error?.message || 'Registration failed. Please check your details.';
            return throwError(() => error);
          })
        )
        .subscribe({
          next: (response: any) => {
            // Handle successful registration
            const user = {
              email: response.email || email,
              // name: response.name || `${firstName} ${lastName}`, // Combine firstName and lastName if API doesn't return name
              token: response.token // Store token if provided
            };
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/dashboard/default']);
          },
          error: () => {
            // Error is handled by catchError
          }
        });
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }

  googleRegister(){
    const width = 500;
    const height = 600;
    const left = (window.screen.width / 2) - (width / 2)
    const right = (window.screen.height / 2) - (height / 2)
    const popup = window.open(
      'http://localhost:5057/api/auth/google/register',
      'GoogleAuth',
      'width=${width}, height=${height}, top=${top}, left=${left}, right=${right}'
    )
    const listener = (event: MessageEvent) => {
      if (event.origin !== 'http://localhost:5057') return; 

      const data = event.data;
      if (data.success) {
        console.log('Google registration successful!');
        setTimeout(() => this.router.navigate(['/auth/login']), 1500);
        this.showGoogleAlert = false;
      } else {
        console.error('Google registration error:', data.message, data.errors);
        this.alertGoogleMessage = 'Google auth failed: ' + JSON.stringify(data.message);
        this.showGoogleAlert = true;
      }

      window.removeEventListener('message', listener); // clean up
    };

    window.addEventListener('message', listener);
  }

}