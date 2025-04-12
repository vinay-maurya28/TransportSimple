import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-visual-route',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule ],
  templateUrl: './visual-route.component.html',
  styleUrls: ['./visual-route.component.scss'],
})
export class VisualRouteComponent {
  constructor(private formBuilder:FormBuilder){
    this.tripForm=this.formBuilder.group({
      trip_from:[null,[Validators.required]],
      trip_to:[null,[Validators.required]],
    })
  }
  cities=[
    { "city": "Mumbai", "short_name": "BOM", "color": "#FF5733" },
    { "city": "Delhi", "short_name": "DEL", "color": "#33A1FF" },
    { "city": "Bengaluru", "short_name": "BLR", "color": "#8E44AD" },
    { "city": "Hyderabad", "short_name": "HYD", "color": "#27AE60" },
    { "city": "Chennai", "short_name": "MAA", "color": "#F39C12" },
    { "city": "Kolkata", "short_name": "CCU", "color": "#E74C3C" },
    { "city": "Ahmedabad", "short_name": "AMD", "color": "#3498DB" },
    { "city": "Pune", "short_name": "PNQ", "color": "#2ECC71" },
    { "city": "Jaipur", "short_name": "JAI", "color": "#9B59B6" },
    { "city": "Lucknow", "short_name": "LKO", "color": "#1ABC9C" },
    { "city": "Chandigarh", "short_name": "IXC", "color": "#34495E" },
    { "city": "Bhopal", "short_name": "BHO", "color": "#E67E22" },
    { "city": "Indore", "short_name": "IDR", "color": "#16A085" },
    { "city": "Nagpur", "short_name": "NAG", "color": "#D35400" },
    { "city": "Visakhapatnam", "short_name": "VTZ", "color": "#C0392B" },
    { "city": "Coimbatore", "short_name": "CJB", "color": "#2980B9" },
    { "city": "Goa", "short_name": "GOI", "color": "#1F618D" },
    { "city": "Guwahati", "short_name": "GAU", "color": "#7D3C98" },
    { "city": "Thiruvananthapuram", "short_name": "TRV", "color": "#229954" },
    { "city": "Kochi", "short_name": "COK", "color": "#CA6F1E" }
  ]
  trips:any[]=[];
  tripForm:FormGroup;
  
  addRoute(validity:any){
    if(this.tripForm.valid){
      let currentLine='';
      let currentLevel=1;
      let lastTrip =this.trips[this.trips.length-1];
      let SecondlastTrip =this.trips[this.trips.length-2];
      if (lastTrip){
        if(lastTrip.to == this.cities[this.f['trip_from'].value].short_name){
          // if continued trip
          currentLine='straight'
        }
        else{
          //if not continued trip
          if(lastTrip.level == 1 ){
            lastTrip.line='arrow'; 
          }
          currentLine='straight'
        }
        // checking level 2 case
        if(lastTrip.from == this.cities[this.f['trip_from'].value].short_name && lastTrip.to == this.cities[this.f['trip_to'].value].short_name ){
           lastTrip.line='l2-straight',
           lastTrip.level=2,
           currentLevel=2
           currentLine='down';
           if(SecondlastTrip){
             if(SecondlastTrip.level == 1){
                SecondlastTrip.line='up'

              }else{
                if(SecondlastTrip.from == lastTrip.from && SecondlastTrip.to == lastTrip.to ){

                }else{
                  SecondlastTrip.line='l2-arrow'
                }
              }
           }
        }
      }else{
        currentLine='straight'
      }
      this.trips.push(
        {
          from:this.cities[this.f['trip_from'].value].short_name,
          to:this.cities[this.f['trip_to'].value].short_name,
          color:this.cities[this.f['trip_from'].value].color,
          level:currentLevel,
          line:currentLine
        }
      )
      this.tripForm.reset();
      validity.submitted=false; 
    }
  }
  get f(){
    return this.tripForm.controls
  }
}
