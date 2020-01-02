import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jhipster6SimpleSharedModule } from 'app/shared/shared.module';
import { Jhipster6SimpleCoreModule } from 'app/core/core.module';
import { Jhipster6SimpleAppRoutingModule } from './app-routing.module';
import { Jhipster6SimpleHomeModule } from './home/home.module';
import { Jhipster6SimpleEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jhipster6SimpleSharedModule,
    Jhipster6SimpleCoreModule,
    Jhipster6SimpleHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jhipster6SimpleEntityModule,
    Jhipster6SimpleAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class Jhipster6SimpleAppModule {}
