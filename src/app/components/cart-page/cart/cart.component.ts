import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
	cart:any = [];
	total:any = {
		oTotal:0,
		sTotal:0
	};

	constructor() { }

	ngOnInit() {
		this.cart = DataService.cart;

		for(let i=0;i<this.cart.length;i++){
			this.total.oTotal += parseFloat(this.cart[i].originalPrice);
			this.total.sTotal += parseFloat(this.cart[i].salePrice);
		}
	}
}
