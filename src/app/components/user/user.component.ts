import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public name:string="";
  public age:number=0;
  public email:string="";
  //dictionary
  public address:{
    street:string,
    city:string,
    province:string,
    postcode:string
  } = {
    street: '',
    city: '',
    province: '',
    postcode: ''
  }
  public skills:string[]=[];
  public todoList:Todo[]=[];
  public isEditable:boolean=true;

  constructor(private todoService:TodoService) {
    
   }

  ngOnInit(): void {
    this.name="Chanisorn Ueasomsaksakul";
    this.age=39;
    this.email="chanisorn.u@ku.th";
    this.address={
      street: "959 Prapi5 Village",
      city:"Bangbon",
      province: "Bangkok",
      postcode: "10150"
    }
    this.skills=["Programming","Pingpong","Eating"]
    //Call Service
    this.todoService.getTodoList().subscribe(respone=>{
      this.todoList=respone;
    })

    }
    toggleEdit(){
      this.isEditable=!this.isEditable;
    }
  addSkill(skills: string){
    this.skills.unshift(skills);
    return false;
  }
  removeSkill(skills:string){
    this.skills.forEach((element,index)=> {
      if(element==skills){
        this.skills.splice(index,1);
      }
    });
  }

}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}