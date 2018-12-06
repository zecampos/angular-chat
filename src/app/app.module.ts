
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ApolloConfigModule } from './apollo-config.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
       BrowserAnimationsModule,
       ApolloConfigModule,
       MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
