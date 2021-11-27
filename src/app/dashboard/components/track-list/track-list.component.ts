import { Component, OnInit, ViewChild } from '@angular/core';

import { Track } from 'ngx-audio-player'
import { AudioPlayerComponent } from 'ngx-audio-player';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  @ViewChild('player', { static: false })
advancedPlayer: AudioPlayerComponent;

  private fmaBaseUrl = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music';

    multiple: Track[] = [
      {
        title: 'In Love',
        link:
          'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0',
        duration: 227,
        artist: 'A Himitsu feat. Nori'
      },
      {
        title: 'On & On (feat. Daniel Levi) [NCS Release]',
        link:
          'https://dl.dropboxusercontent.com/s/w99exjxnwoqwz0e/Cartoon-on-on-feat-daniel-levi-ncs-release.mp3?dl=0',
        duration: 208,
        artist: 'Cartoon'
      },
      {
        title: '1400',
        link: `${this.fmaBaseUrl}/no_curator/Yung_Kartz/August_2018/Yung_Kartz_-_10_-_1400.mp3`,
        duration: 212,
        artist: 'Yung Kartz'
      },
      {
        title: 'Epic Song',
        link: `${this.fmaBaseUrl}/ccCommunity/BoxCat_Games/Nameless_The_Hackers_RPG_Soundtrack/BoxCat_Games_-_10_-_Epic_Song.mp3`,
        duration: 54,
        artist: 'BoxCat Games'
      },
      {
        title: 'Hachiko (The Faithful Dog)',
        link: `${this.fmaBaseUrl}/ccCommunity/The_Kyoto_Connection/Wake_Up/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3`,
        duration: 185,
        artist: 'The Kyoto'
      },
      {
        title: 'Starling',
        link: `${this.fmaBaseUrl}/Music_for_Video/Podington_Bear/Solo_Instruments/Podington_Bear_-_Starling.mp3`,
        duration: 105,
        artist: 'Podington Bear'
      }
    ];

    msaapPlaylist: Track[] = this.multiple;

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  pageSizeOptions = [5, 10];

  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = true;
  msaapDisablePositionSlider = false;

  msaapTableHeader = 'Playlist';
  msaapTitleHeader = 'Track';
  msaapArtistHeader = 'Author';
  msaapDurationHeader = 'Duration';

  currentTrack: Track = null as any;
  currentTime: any;

  appendTracksToPlaylistDisable = false;
  counter = 1;

  logCurrentTrack() {
    this.advancedPlayer.audioPlayerService.getCurrentTrack().subscribe(track => {
      this.currentTrack = track;
    });
  }

  logCurrentTime() {
    this.advancedPlayer.audioPlayerService.getCurrentTime().subscribe(time => {
      this.currentTime = time;
    });
  }

  consoleLogCurrentData() {
    // logCurrentTrack();
    // logCurrentTime();
    // Make sure to subscribe (by calling above methods)
    // before getting the data
    console.log(this.currentTrack.title + ' : ' + this.currentTime);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
