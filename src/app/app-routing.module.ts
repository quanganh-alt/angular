import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { Routes, RouterModule, Router , PreloadAllModules} from '@angular/router';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import { LoginStep1Component } from './login-step1/login-step1.component';
import { LoginStep2Component } from './login-step2/login-step2.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { TimelinesComponent } from './timelines/timelines.component';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';
const routes: Routes = [{
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
        {
            path: ':key',
            component: DictionaryDetailComponent,
            canActivate: [AuthGuard]
        }
    ]
}, {
    path: 'login-step-1',
    component: LoginStep1Component
    },
    {
    path: 'login-step-2',
    component: LoginStep2Component
    },
    // {
    //     path: 'blog',
    //     loadChildren: './blog/blog.module#BlogModule'
    // },
    {
        path: 'youtube',
        component: YoutubePlaylistComponent,
        children: [{
            path: ':id',
            component: YoutubePlayerComponent

        }]
    },
    {
        path: 'timelines',
        component: TimelinesComponent
    },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent
  },
  {
    path: 'blog/:id/edit',
    component: BlogEditComponent
  }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor(private router: Router) { }
    // gotoTimelines() {
    //     this.router.navigate(['/timelines']);
    // }
}
