import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent{
  list: any[]=[];
  addTask(item: string)
  {
    this.list.push({id:this.list.length,name:item})
    console.log(this.list)
  }
  deleteTask(id: number){
   
      this.list=this.list.filter(item => item.id!==id);
      }
        }

 
 

