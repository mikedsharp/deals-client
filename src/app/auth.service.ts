import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }

    loggedIn(){
        return true; 
    }
}