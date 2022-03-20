import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperture',
  templateUrl: './temperture.component.html',
  styleUrls: ['./temperture.component.css']
})
export class TempertureComponent implements OnInit {

  imageHut = '';
  tempDesc:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  tempCalc(temp:string){
    let tempNum = parseFloat(temp);

    if(tempNum < 20){
      this.tempDesc = 'your temperure is cold';
      this.imageHut = '';
    }
    else if(tempNum >= 20 && tempNum <= 30){
      this.tempDesc = 'your weather is fine';
      this.imageHut = ''

    }
    else{
      this.tempDesc = 'your weather is to hot like pizza hut';
      this.imageHut = 'https://s3-media0.fl.yelpcdn.com/bphoto/ATzYV4NDjulAswnAR9eS7g/348s.jpg';
    }
  }

}
