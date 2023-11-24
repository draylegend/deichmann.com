import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@draylegend/domain';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
