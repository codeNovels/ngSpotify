import { Component }         from '@angular/core';
import { NavbarComponent }   from './components/navbar/navbar.component';
import { ROUTER_DIRECTIVES } from '@angular/router'
import { SearchComponent }   from './components/search/search.component';
import { AboutComponent }    from './components/about/about.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives:[NavbarComponent, ROUTER_DIRECTIVES],
    precompile: [SearchComponent, AboutComponent]
})
export class AppComponent { }
