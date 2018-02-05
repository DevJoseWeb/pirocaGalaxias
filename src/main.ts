import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AngularFireDatabaseModule } from "angularfire2/database";
import { FirebaseListObservable, FirebaseObjectObservable,
    AngularFireDatabase } from "angularfire2/database";


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
