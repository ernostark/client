import { Component } from '@angular/core';
import { EmpapiService } from '../empapi.service';

@Component({
  selector: 'app-emp',
  standalone: true,
  imports: [],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent {

  constructor(private empapi: EmpapiService){
    this.getEmployes();
    
  }
  getEmployes(){
    this.empapi.getEmployes().subscribe((data) => {
      console.log("Adat:", data);
      
    });
  }

}
