import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import {Router} from '@angular/router'; 

declare var Auth0Lock: any; 

@Injectable()
export class AuthService {

    lock = new Auth0Lock('rhCuHdVmqSJoAIef1JsBCk9OirCCYV2T', 'programmerinprogress.eu.auth0.com')

    constructor(private router: Router) { 
        this.lock.on('authenticated', (authResult : any) => {
            localStorage.setItem('id_token', authResult.idToken);

            this.lock.getProfile(authResult.idToken, (error:any, profile: any) => {
                if(error){
                    console.log(error); 
                    localStorage.setItem('profile', JSON.stringify(profile));
                }
            });  

            this.lock.hide();
        }); 
    }

    login(){
        this.lock.show(); 
    }

    logout(){
        localStorage.removeItem('profile'); 
        localStorage.removeItem('id_token');

        this.router.navigateByUrl('/deals'); 
    }

    loggedIn(){
        return tokenNotExpired(); 
    }
}