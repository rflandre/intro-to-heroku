import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

let prettifyProfile = (Profile) => {
    return {
        id: "OK"

    };
};

@Injectable()
export class ProfileService {

    static get parameters() {
        return [Http];
    }

    constructor(http) {
        this.http = http;
    }

    findAll() {
        return this.http.get('/profile').map(response => response.json().map(prettifyProfile));
    }


}