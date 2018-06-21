import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss']
})
export class PageAboutComponent implements OnInit {

  constructor() { }
  downloadPDF() {
    window.open('/assets/about-pdf.pdf');
  }
  ngOnInit() {


    $(document).ready(function() {
      // Add smooth scrolling to all links
      $('a').on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          const hash = this.hash;



          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          console.log(hash);
          console.log( $(hash).offset().top);
          if ( $(hash).offset().top !== 0) {
            const targetTop = $(hash).offset().top - $('.contentContainer > *').offset().top;
            console.log(targetTop + 'targettop');
            // $('#contentContainer').animate({scrollTop: $(hash).offset().top }, 'slow');
            $('.contentContainer').scrollTop(targetTop);
            console.log( $(hash).offset().top);
             // Add hash (#) to URL when done scrolling (default click behavior)
     window.location.hash = hash;
          }


        } // End if
      });
    });
  }

}
