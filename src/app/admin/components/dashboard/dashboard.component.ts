import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }
  // m() {
  //   this.alertify.message("Merhaba", {
  //     messageType: MessageType.Success,
  //     delay: 5,
  //     position: Position.TopRight
  //   })
  // }
  // d() {
  //   this.alertify.dismiss();
  // }
}
