import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import {forbiddenNameValidator} from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validator';
import {RegistrationService} from '../registration.service';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  registrationForm : FormGroup;
  errorMsg = '';

  get userName(){
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

get alternateEmails(){
  return this.registrationForm.get('alternateEmails') as FormArray;
}

addAlternateEmails(){
  return this.alternateEmails.push(this.fb.control(''))
}


  constructor(private fb : FormBuilder, private _registrationService:RegistrationService) { }

  ngOnInit(): void {
    //form init
    //using FormBuilder
    this.registrationForm = this.fb.group({
      userName: ['Manish', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, { validator: PasswordValidator })

    //conditional validation
    this.registrationForm.get('subscribe').valueChanges
    .subscribe(checkedValue =>{
      const email = this.registrationForm.get('email');
      if(checkedValue){
        email.setValidators(Validators.required);
      }else{
        email.clearValidators();
      }
      //ensure currect status is reflected
      email.updateValueAndValidity();
    });
  }

  LoadApiData(){
    //setVaue is strict. We have to pass all the data of the forms field
    // this.registrationForm.setValue({
    //   userName:'Bruce',
    //   password:'test',
    //   confirmPassword:'test',
    //   address:{
    //     city:'Jaipur',
    //     state:'Rajasthan',
    //     postalCode: '3025456'
    //   }
    // });

    //patchVaue is easy. We dont have to pass all the data of the forms field. We can pass partial form data as well.
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test'
    });
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
    .subscribe(
      response => console.log('Success!', response),
      ////error => console.log('error!', error)
      error => this.errorMsg = error.statusText
    );
  }

}
