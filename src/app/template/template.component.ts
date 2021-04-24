import { Component,Input } from '@angular/core';

@Component({
selector:'app-template',
templateUrl:"./template.component.html"
})

export class TemplateComponent {
    username="";
    Email="";
    Phone="";
    password="";
    @Input() currentPageFromParentComponent;
    childtoparent="Child/Template to Parent";
    childdataReact: string;
    onSubmit()
    {
        console.log("submitted");
    }

    receiveMessage($event) {    
        this.childdataReact = $event;
      }

}