import {Injectable} from '@angular/core'; 
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Deal} from './deal'; 
import {AuthHttp} from 'angular2-jwt'; 

@Injectable()
export class DealService {
    
    private publicDealsUrl = 'http://localhost:3000/deals/public';  
    private privateDealsUrl = 'http://localhost:3000/deals/private';  
    
    constructor(private http: Http, private authHttp: AuthHttp) { 

    }

    getPublicDeals() {
        return this.http
            .get(this.publicDealsUrl)
            .toPromise()
            .then(response => response.json() as Deal[])
            .catch(this.handleError); 
    }

    getPrivateDeals(){
         return this.authHttp
            .get(this.privateDealsUrl)
            .toPromise()
            .then(response => response.json() as Deal[])
            .catch(this.handleError); 
    }

    private handleError(error:any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
} 