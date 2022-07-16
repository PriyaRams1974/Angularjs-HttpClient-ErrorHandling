import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  testData = {};
  postDataVar = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }

  getresData = {}
  postresData = {}
  updateresData = {}
  deleteresData = {}
  serverError = '';
  constructor(private apiService : AppService){ }


  ngOnInit(): void {
  }

  getapiCall(){
    this.apiService.getData().subscribe((data: any)=>{
       this.getresData = data;
       console.log("GetResponse ",this.getresData);
    }
    )
  }

  postapiCall(){
    this.apiService.postData(this.postDataVar).subscribe((data: any)=>{
       this.postresData = data
       console.log("postResponse ",this.postresData);

    },(error)=>{
      console.log(error);
      this.serverError = error;
    } )
  }

  updateapiCall(){
    this.apiService.updateData(this.postDataVar).subscribe((data: any)=>{
       this.updateresData = data;
       console.log("updateResponse ",this.updateresData);

    },(error)=>{
      console.log(error);
      this.serverError = error;
    } )
  }

  deleteapiCall(){
    this.apiService.deleteData().subscribe((data: any)=>{
       this.deleteresData = data;
       console.log("DeleteResponse ",this.deleteresData);

    },(error)=>{
      console.log(error);
      this.serverError = error;
    } )
  }

}
