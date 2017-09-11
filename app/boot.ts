import {bootstrap} from 'angular2/platform/browser'
import {ChatAppComponent} from './gryll-app.component'
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(GryllAppComponent, [HTTP_PROVIDERS]);