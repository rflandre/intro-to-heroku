import {OnInit} from '@angular/core';
import {Page, NavController} from 'ionic-angular';
import {ProfileService} from '../../services/profile-service';


@Page({
    templateUrl: 'build/pages/profile/profile.html'
})


export class ProfilePage {

    static get parameters() {
        return [[NavController], [ProfileService]];
    }

    constructor(nav, ProfileService) {
        this.nav = nav;
        this.ProfileService = ProfileService;
    }

    ngOnInit() {
        this.ProfileService.findAll().subscribe(Profile => this.Profile = Profile);
    }

    itemTapped(event, Profile) {
        this.nav.push(ProfilePage, {
            Profile: Profile
        });
    }

}