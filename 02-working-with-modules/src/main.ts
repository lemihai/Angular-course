// How to start an angular app using modules
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'

platformBrowserDynamic().bootstrapModule(AppModule);