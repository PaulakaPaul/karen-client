import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { VideoPlayerState } from 'src/app/video-player/store/store.state';
import { SetSelectedStream } from 'src/app/video-player/store/actions/stream.actions';
import { ChangePlayerStatus } from 'src/app/video-player/store/actions/player.actions';
import { PlayerStatus } from 'src/app/video-player/store/models/player';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(private store: Store<VideoPlayerState>) { }

  ngOnInit() {
    this.store.dispatch(new SetSelectedStream({
      title: 'TELLO-AS32C ',
      src: 'http://0.0.0.0:8081/stream/stream.m3u8'
    }));
    this.store.dispatch(new ChangePlayerStatus(PlayerStatus.PLAYING));
  }

}
