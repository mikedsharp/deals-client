import { Component, OnInit } from '@angular/core';
import {Deal} from './deal'; 


import {DealService} from './deal.service'; 
import { AuthService } from './auth.service';

@Component({
    selector: 'public-deals',
    templateUrl: 'public-deals.component.html', 
    styleUrls:['public-deals.component.css'], 
    providers:[DealService, AuthService]
})
export class PublicDealsComponent implements OnInit {
    
    publicDeals: Deal[]; 

    constructor( private dealService: DealService, private authService: AuthService) { 
        
    }

    ngOnInit():void { 
        this.dealService.getPublicDeals()
            .then(deals => this.publicDeals = deals); 
    }

    purchase(item){
        alert("You bought the: " + item.name); 
    }
}