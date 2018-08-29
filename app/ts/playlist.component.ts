import {Component} from 'angular2/core';
import {config} from './config.service';
import {Video} from './video'

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['videos']
})

export class PlaylistComponent {
  onselect(vid.video){
    console.log(JSON.stringify(vid));
  }
}
