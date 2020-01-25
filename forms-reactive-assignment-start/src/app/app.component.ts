import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.nameValidatorAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'dropdown': new FormControl('stable')
    });
  }

  nameValidator(control: FormControl) {
    if(control.value === "Test") {
      return {'nameIsInvalid': true};
    }
    return null;
  }

  nameValidatorAsync(control: FormControl) {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
         if(control.value === "Test") {
           resolve({'nameIsInvalid': true});
         } else {
           resolve(null);
         }
      }, 1500);
    });

    return promise;
  }
}
