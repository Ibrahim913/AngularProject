import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { 
    // document.querySelector("body")?.addEventListener("keyup", function(e) {
    //   if (e.key == "Escape") {
    //     document.querySelector("#img-modal")?.style.display='none';
    // }
    // })
  }

  ngOnInit(): void {
  }
  images:string[] = [
    "../../assets/img/cabin.png",
    "../../assets/img/cake.png",
    "../../assets/img/circus.png",
    "../../assets/img/game.png",
    "../../assets/img/safe.png",
    "../../assets/img/submarine.png"
  ]
  imgSrc:string = '';
  tackSrc($event: any){
     this.imgSrc = $event.target.firstChild.src;
    console.log(this.imgSrc)
  }

}
