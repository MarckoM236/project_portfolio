import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() title:string = "";
  @Input() data:any[]=[];
  @Input() icon:string = "";

  ngOnInit(){
    this.addisOpen();
  }

  openCollapse(id:number):void{
    this.addisOpen();
    this.data[id].data.isOpen=true;
  }

  addisOpen(){
    for(let i=0; i < this.data.length; i++){
      this.data[i].data.isOpen=false;
    }
  }
}
