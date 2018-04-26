import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function() {
      document.getElementById('mySidenav').addEventListener('click', function(e) {
        e.stopPropagation();
      });
    })();
  }

  openNav() {
      document.getElementById('mySidenav').style.width = '250px';
  }
  closeNav() {
      document.getElementById('mySidenav').style.width = '0';
  }

}
