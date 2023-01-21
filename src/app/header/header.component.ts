import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  constructor() {}

  ngOnInit(): void {}

  onWindowResize(event: any) {
    console.log(event);
    console.log('Window resized');
    // this.collapsed = true;
  }
}
