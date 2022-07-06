import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  addStudentForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formbuilder: FormBuilder,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    console.log(this.authService.isLoggedin);
  }
  addStudent() {

  }
  // logout() {
  //   this.authService.isLoggedin = false;
  // }
}
