import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private auth: Auth,
    private toast: HotToastService,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    //firebase method for creating a user
    this.authService
      .register(
        this.auth,
        this.registerForm.value.email,
        this.registerForm.value.password
      )
      .then((res) => {
        this.toast.success('User created successfully');
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        this.toast.error(err.message);
      });
  }

  ngOnInit(): void {}
}
