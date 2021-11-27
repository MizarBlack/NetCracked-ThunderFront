<p>
  <mat-toolbar>
      <span>You'r playlist</span>
      <span class="example-spacer"></span>
      <button mat-icon-button class="example-icon add-icon" aria-label="Example icon-button with add icon">
    <mat-icon>playlist_add</mat-icon>
      </button>
    </mat-toolbar>

</p>

<mat-card class="playlist-card" > <!-- *ngFor = "Numbers of playlists"-->
  <mat-card-title-group>
    <mat-card-title>{{author}}</mat-card-title>
    <mat-card-subtitle>{{genre}}</mat-card-subtitle>
  </mat-card-title-group>
  <mat-card-content>
    <p>{{description}}</p>
  </mat-card-content>
  <mat-card-actions>
    <div class="example-button-row">
      <button mat-raised-button>Open</button>
      <span class="example-spacer"></span>
      <button mat-icon-button><mat-icon>delete</mat-icon></button>
      <button mat-icon-button><mat-icon>edit_note</mat-icon></button>
    </div>
  </mat-card-actions>
</mat-card>
