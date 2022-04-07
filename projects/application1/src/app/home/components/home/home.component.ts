import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject('BASE_URL') public baseUrl: string) { }

  ngOnInit(): void {
    console.log('baseUrl', this.baseUrl);
    debugger;
  }

}
