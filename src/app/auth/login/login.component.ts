import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FeatherIconsComponent } from '../../shared/components/feather-icons/feather-icons.component';
import { catchError, throwError } from 'rxjs';
import { DismissingLightAlertComponent } from "../../components/ui-kits/alert/dismissing-light-alert/dismissing-light-alert.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FeatherIconsComponent, DismissingLightAlertComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  public show: boolean = false;
  public loginForm: FormGroup;
  public errorMessage: string | null = null;
  public alertGoogleMessage: string;
  public showGoogleAlert: boolean;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private ngZone: NgZone,
    private http: HttpClient
  ) {
    // Check if user is already logged in
    const userData = localStorage.getItem('user');
    if (userData) {
      this.router.navigate(['/dashboard/default']);
    }

    // Initialize the form with validators
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
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

  // Handle login form submission
  login() {
    if (this.loginForm.valid) {
      this.errorMessage = null; // Clear previous errors
      const { email, password } = this.loginForm.value;

      // Make API call to login endpoint
      this.http
        .post('http://localhost:5057/api/auth/login', { Email: email, Password: password })
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error('Google error!')
            this.errorMessage = error.error || error.error?.message || 'Login failed. Please check your credentials.';
            return throwError(() => error);
          })
        )
        .subscribe({
          next: (response: any) => {
            // Handle successful login
            const user = {
              email: response.email || email,
              name: response.name || 'test user', // Adjust based on API response
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
  
googleLogin() {
  const width = 500;
  const height = 600;
  const left = (window.screen.width / 2) - (width / 2);
  const top = (window.screen.height / 2) - (height / 2);

  const popup = window.open(
    'http://localhost:5057/api/auth/google/login',
    'GoogleAuth',
    `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
  );

  if (!popup) {
    console.error('Popup blocked by browser');
    this.showGoogleAlert = true;
    return;
  }

  const listener = (event: MessageEvent) => {
    if (event.origin !== 'http://localhost:5057') return;

    const data = event.data;
    console.log('Message from popup:', data);

    if (data.success && data.token) {
      console.log('Google login successful');

      const user = {
        email: data.email,
        name: data.name || 'test user', // Adjust based on API response
        token: data.token // Store token if provided
      };

      localStorage.setItem('jwt', data.token);
      localStorage.setItem('user', JSON.stringify(user));

      popup.close();
      window.removeEventListener('message', listener);

      window.location.href = '/dashboard/default';
      this.showGoogleAlert = false;
    } else {
      console.error('Google login failed', data.errors || data.message);
      popup.close();
      window.removeEventListener('message', listener);
      alert('Google login failed: ' + JSON.stringify(data.errors || data.message));
      this.showGoogleAlert = true;
    }
  };

  window.addEventListener('message', listener);
}

}