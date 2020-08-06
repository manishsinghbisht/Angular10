import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import {EnrollmentService} from '../enrollment.service';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})

export class FormTemplateDrivenComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  userModel = new User('Rob', 'rob@Yahoo.com', 265489652, '', 'morning', true);
  submitted = false;
  errorMsg='';
  
  constructor(private _enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

  validateTopic(value) {
    if (value === 'default' || value === '') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }

  }

  onSubmit(userForm) {
    console.log(userForm);
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => this.errorMsg = error.statusText
      )
  }

}
