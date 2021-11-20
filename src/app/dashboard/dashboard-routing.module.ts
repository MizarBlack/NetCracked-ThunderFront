import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserComponent } from './components/user/user.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SearchComponent } from './components/search/search.component';
import { TrackListComponent } from './components/track-list/track-list.component';

const routes: Routes = [
  {
  path: '',
  component: WrapperComponent,
  children: [
      {
        path: 'main-page',
        component: MainPageComponent
      },
      {
        path: 'playlist',
        component: PlaylistComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'track-list',
        component: TrackListComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'main-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
