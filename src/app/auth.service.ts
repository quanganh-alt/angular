import { Injectable } from '@angular/core';


// export class AuthService {
//   user: any;
//   constructor() { }
//   isAuthenticated(): boolean{
//     return this.user!=null;
//   }
//   login(){
//     this.user = {
//       name: 'bob',
//       token: 'token'
//     };
//   }
//   logout() {
//     this.user = null;
//   }

// }
let defaultId = 1;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: string = 'Default Id:' + defaultId++;
  constructor() { }
}