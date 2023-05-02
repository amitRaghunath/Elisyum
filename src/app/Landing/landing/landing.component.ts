import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent 
{

  cardetails: { img: string, title: string}[] = 
  
  [
    { "img": "../../../assets/pexels-yovan-verma-2082103.jpg", "title": "Paris"},
    { "img": "../../../assets/pexels-asad-photo-maldives-3601426.jpg", "title": "Maldevis" },
    { "img": "../../../assets/pexels-andreea-ch-1369212.jpg", "title": "Egypt"},
    { "img": "../../../assets/National Geographic Your Shot.jpg", "title": "Kerala"},
    {"img":"../../../assets/landscape-tropical-vacation-palm-summer.jpg","title": "Hawaii"},
    {"img":"../../../assets/../../../assets/chureito-pagoda-fuji-mountain-sunset-japan.jpg","title": "Tokyo"}
   
  ];

  
  tobook()
  {
    document.getElementById("b")?.scrollIntoView({behavior:"smooth"});
    
  }
}
