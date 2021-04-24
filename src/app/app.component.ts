import { Component, ViewChild, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { promise } from 'selenium-webdriver';
import { TemplateComponent } from './template/template.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'App-UseCase3';
  currentPage = "";
  @ViewChild(TemplateComponent) child;

  constructor(private cd: ChangeDetectorRef) {

  }
  childdata: string;


  ngOnInit() {
    this.childdata = "oninit test"
  }

  ngAfterViewInit() {
    //this.childdata=this.child.childtoparent;

    // setTimeout(() => {
    //   this.childdata=this.child.childtoparent;
    // }, 0);

    // this.cd.detectChanges();

    Promise.resolve().then(() => this.childdata = this.child.childtoparent);
  }
  display(page) {
    if (this.currentPage === page) {
      return "block";
    }
    else {
      return "none";
    }
  }

 

}
