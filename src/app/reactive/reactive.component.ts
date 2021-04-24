import { ThrowStmt } from '@angular/compiler';
import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';
import {FormControl , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
reactiveForm: FormGroup;
@Input() currentPageFromParentComponent;
@Output() messageevent=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      'username':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required)
    })
  }

  eventEmitter()
  {
    this.messageevent.emit("Child/React to Parent");
  }

}
