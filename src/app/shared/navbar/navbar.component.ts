import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
      });
    });

  }

}
