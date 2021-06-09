import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-task';
  constructor(){
    window.addEventListener( "scroll" ,function(){
      if($(window).scrollTop() > 100){
        $('nav').addClass("nav-change");
      }else{
        $('nav').removeClass("nav-change");
      }
    });
    $(document).ready(function(){
      $('body').css('padding-top' , $('nav').outerHeight())
    });
  }
}
