import {ViewChild} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {App, Platform} from 'ionic-angular';

import {WelcomePage} from './pages/welcome/welcome';
import {PropertyListPage} from './pages/property-list/property-list';
import {BrokerListPage} from './pages/broker-list/broker-list';
import {FavoriteListPage} from './pages/favorite-list/favorite-list';
import {ProfilePage} from './pages/profile/profile';
import {PropertyService} from './services/property-service';
import {BrokerService} from './services/broker-service';
import {ProfileService} from './services/profile-service';

@App({
    templateUrl: 'build/app.html',
    config: {
        mode: "ios"
    },
    queries: {
        nav: new ViewChild('content')
    },
    providers: [HTTP_PROVIDERS, PropertyService, BrokerService]
})
class MyApp {

    static get parameters() {
        return [[Platform]];
    }

    constructor(platform) {

        this.platform = platform;

        this.pages = [
            {title: 'Welcome', component: WelcomePage, icon: "bookmark"},
            {title: 'Products', component: PropertyListPage, icon: "pricetag"},
            {title: 'Brand ambassador', component: BrokerListPage, icon: "people"},
            {title: 'Favorites', component: FavoriteListPage, icon: "star"},
            {title: 'Profile', component: ProfilePage, icon: "person"}
        ];

        this.rootPage = WelcomePage;
        this.initializeApp();
    }

    initializeApp() {
        
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }

}
