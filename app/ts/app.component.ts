import {Component} from 'angular2/core';
import {config} from './config.service';

@Component({
    selector: 'my-app',
    template: '<h1>{{minHeading}}</h1>' // Data Baindings;
})

export class AppComponent {
  minHeading = "Anupam Hayat"; // initial variable
  minHeading = config.MAIN_HEADING; //  variable using from other file
}
