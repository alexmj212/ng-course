import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/*

TODO 1: Importing HttpModule

Import HttpModule from @angular/http

*/
import { HttpModule } from '@angular/http';
import { GrowlerModule } from './growler/growler.module';
import { ModalModule } from './modal/modal.module';

/*

TODO 2: Importing DataService

Import DataService from ./services/data.service

Note that several other services are already imported such as FilterService,
SorterService, AuthService, TrackByService and more.

*/
import { DataService } from './services/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterService } from './services/filter.service';
import { SorterService } from './services/sorter.service';
import { TrackByService } from './services/trackby.service';
import { DialogService } from './services/dialog.service';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { ValidationService } from './services/validation.service';
import { AuthService } from'./services/auth.service';

/*

TODO 3: Adding HttpModule and DataService into CoreModule

1. Add HttpModule into the NgModule decorator's imports and exports property values.
   This will allow it to be used in this module and by any other modules that import CoreModule.

2. Add DataService into the NgModule decorator's providers property values so that it can be injected
   into other services and components in the application.

*/

@NgModule({
  imports: [ CommonModule, RouterModule, GrowlerModule, ModalModule, HttpModule ],
  exports: [ GrowlerModule, RouterModule, ModalModule, NavbarComponent, HttpModule ],
  declarations: [ NavbarComponent ],
  providers: [ SorterService, FilterService, TrackByService, 
               DialogService, ValidationService, AuthService, DataService ] // these should be singleton
})
/*

TODO 4: What Role Does EnsureModuleLoadedOnceGuard Play?

The CoreModule class extends a custom class named EnsureModuleLoadedOnceGuard. This class
ensures that CoreModule is only loaded once by any other modules in the application. This
gaurantees that services defined in the module will be singletons.

*/
export class CoreModule extends EnsureModuleLoadedOnceGuard {    //Ensure that CoreModule is only loaded into AppModule

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }  

}



