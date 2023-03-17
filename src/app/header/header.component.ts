import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moveUp();
  }

  moveUp() {
    let myBar = document.getElementById("header")
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        // @ts-ignore
        myBar.style.display = "block";
      } else {
        // @ts-ignore
        myBar.style.display = "none"
      }
      prevScrollpos = currentScrollPos;
    }
  }

}
