import {Component} from 'angular2/core';
import {config} from './config.service';
import {video} from './video'
import {PlaylistComponent} from './PlaylistComponent'
@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html' // Data Baindings;
})

export class AppComponent {
  minHeading = "Anupam Hayat"; // initial variable
  minHeading = config.MAIN_HEADING; //  variable using from other file
}
