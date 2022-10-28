import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

 username: any;
 email: any;
 pass: any;

  constructor(private router: Router, private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  Register(){
    // eslint-disable-next-line no-debugger
    debugger;
    this.email = ((document.getElementById('email') as HTMLInputElement).value);
    this.pass = ((document.getElementById('password') as HTMLInputElement).value);

  this.auth.createUserWithEmailAndPassword(this.email, this.pass).then(userCredentail =>{
      if(userCredentail){
        window.alert('Signed Up');
        this.router.navigateByUrl('/login');


      }
    })
    .catch((error)=> {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert(errorMessage);
    }
    );
  }
}
