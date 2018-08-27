import {Component} from 'angular2/core';
import {config} from './config.service';
import {Video} from './video'
import {PlaylistComponent} from './playlist.component'
@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html'    // Data Baindings;
    directives: [PlaylistComponent]            // declearing custom tag
})

export class AppComponent {
  minHeading = "Anupam Hayat"; // initial variable
  minHeading = config.MAIN_HEADING; //  variable using from other file
  videos:Array<Video>;              // An array for video list wiht Video class type;

  constructor(){
    this.videos = [
      new Video(1,"Cannot connect to WMI Provider problem solution for SQL Management Studio 2017", "aj7iyil4tDU&t","rror message when you open SQL Server Configuration Manager in SQL Server: Cannot connect to WMI provider. You do not have permission or the server is unreachable")
      new Video(1,"laravel 5.6 2018 full installation Full process Step by Step", "V0jfhizO43c&t","installing laravel on windows"),
    ];
  }

}
