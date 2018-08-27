import {Component} from 'angular2/core';
import {config} from './config.service';

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['videos']
})

export class PlaylistComponent {
}
