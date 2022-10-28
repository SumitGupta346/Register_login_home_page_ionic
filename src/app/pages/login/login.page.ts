import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 email: any;
 pass: any;

  constructor(private router: Router, private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  Login(){
    this.email = ((document.getElementById('email') as HTMLInputElement).value);
    this.pass = ((document.getElementById('password') as HTMLInputElement).value);

    this.auth.signInWithEmailAndPassword(this.email, this.pass).then(userCredentail => {
      if (userCredentail) {
        window.alert('logged in');
        this.router.navigateByUrl('/home');


      }
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
      }
      );
  }
  // validateInput(){
  //   // eslint-disable-next-line eqeqeq
  //   if(this.userdata.username!='' && this.userdata.password!=''){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }
}
