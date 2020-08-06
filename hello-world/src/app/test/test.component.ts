import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'CodeWorld!';
  public myVar = 'my interpolated data';
  public yourVar = 'Yahoo!';
  public siteUrl = window.location.href;
  public myId = 'testId';
  public isDisabled = true;
  public greetMesssage = '';
  public twowayBindedVar = '';
  public ifCond = true;
  public color = "red";
  public colors = ["red", "blue", "green", "yellow"]
  public date = new Date();
  public employees = [];
  public errorMsg;

  @Input('parentData') public data_rcvd_from_parent;

  constructor(private _testService: TestService) { }

  @Output() public childEvent = new EventEmitter();

  ngOnInit(): void {
    //this.employees = this._testService.getStaticEmployees();
    this._testService.getEmployees()
            .subscribe(data => this.employees = data,
              error => this.errorMsg = error);
            
  }

  greetUser(){
    return 'Hello ' + this.name;
  }

  onClick(event){
    console.log(event);
    this.greetMesssage = 'Welcome budy!';
  }

  logData(mydata) {
    console.log(mydata);
  }

  fireChildEvent(){
    this.childEvent.emit('Hello from child coponent!');
  }

}
