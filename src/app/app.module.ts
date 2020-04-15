import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { from } from 'rxjs';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetComponent } from './pet/pet.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import {HttpClientModule} from '@angular/common/http'
import { ParentComponent } from './parent.component'
import { ChildComponent } from './child.component';
import { RegisterFinalComponent } from './register-final/register-final.component';
import { LoginComponent } from './login/login.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { LoginStep1Component } from './login-step1/login-step1.component';
import { LoginStep2Component } from './login-step2/login-step2.component';
import { CpCardComponent } from './cp-card/cp-card.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { AuthService } from './auth.service';

import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageCardComponent } from './image-gallery/image-card/image-card.component';
import { GalleryConfig } from './image-gallery/token';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { ImgSlideComponent } from './img-slider/img-slide/img-slide.component';
import { TodoComponent } from './todo/todo.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import {BlogComponent} from './blog/blog.component';


export class DictionaryService { }
@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    FontSizeEditorComponent,
    PetComponent,
    CalculatorComponent,
    ColorPickerComponent,

    ParentComponent,
    ChildComponent,
    RegisterFinalComponent,
    LoginComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    LoginStep1Component,
    LoginStep2Component,
    CpCardComponent,
    ContentProjectionComponent,

    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    TimelinesComponent,
    ImageGalleryComponent,
    ImageCardComponent,
    ImgSliderComponent,
    ImgSlideComponent,
    TodoComponent,
    BlogComponent,
    BlogDetailComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
   // ImageGalleryComponent,
    HttpClientModule,
  ],
  providers: [DictionaryService,
    { provide: AuthService, useClass: AuthService },
    { provide: GalleryConfig, useValue: 2}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
