import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames: string[] = ['Anna', 'filip'];
  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.emailValidate),
      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getHobbies() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl) {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  emailValidate(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => { 
        setTimeout(() => {
          if(control.value ===  'filip@test.com') {
            resolve({'emailIsInvalid': true});
          } else {
            resolve(null);
          }

        },1500)
      }
    );
    return promise;
  }
}
