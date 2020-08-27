import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent implements OnInit {
  isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  openModel(): void {
    if (this.isChecked) {
      $('.modal').modal('show');
    } else {
      setTimeout(() => {
        this.isChecked = !this.isChecked;
      }, 100);
    }
  }

  unPost(): void {
    this.isChecked = false;
    $('.modal').modal('hide');
  }
}
