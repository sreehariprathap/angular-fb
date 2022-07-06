import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedin = false;

  constructor(private auth: Auth) {}

  login(auth: Auth, email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }


  register(auth: Auth, email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
}
