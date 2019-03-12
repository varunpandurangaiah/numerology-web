import { Component, OnInit } from '@angular/core';
declare function handler():any;
declare function handler_dob2():any;

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public dt1:string;
  public dt2:string;
   constructor() {
   // this.initfunction()
  }

  handler(e){
    console.log(e);
    let day = e.split('-');
    let dob = [day[2], day[1], day[0].substring(0, 2), day[0].substring(2, 4)];
    console.log(dob);
    handler(); // this is calling javascript function
  }

  handler_dob2(e){
    console.log(this.dt1);
    console.log(this.dt2);
    if(this.dt1=='' || this.dt1==null){
      alert('Fill first chart date of birth');
      return null;
    }
    console.log(e);
    let day = e.split('-');
    let dob = [day[2], day[1], day[0].substring(0, 2), day[0].substring(2, 4)];
    console.log(dob);
    handler_dob2(); // this is calling javascript function
  }

  ngOnInit() {
  }
}
