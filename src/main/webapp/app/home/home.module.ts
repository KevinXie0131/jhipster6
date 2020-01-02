import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipster6SimpleSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jhipster6SimpleSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Jhipster6SimpleHomeModule {}
