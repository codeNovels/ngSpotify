import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule}     from "@angular/forms";
import { HTTP_PROVIDERS } from '@angular/http';
import { SpotifyService } from './services/spotify.service';
import { routing }        from './app.routes'
import { AlbumComponent }    from './components/album/album.component';
import { ArtistComponent }   from './components/artist/artist.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, AlbumComponent, ArtistComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [HTTP_PROVIDERS, SpotifyService]
})
export class AppModule { }
