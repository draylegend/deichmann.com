import { bootstrapApplication } from '@angular/platform-browser';
import { appServerConfig } from '@draylegend/domain';
import { AppComponent } from './app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent, appServerConfig);

export default bootstrap;
