import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';

import { CommonService } from '../../../services/common.service';
import { DataService } from '../../../services/data.service';

@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
	data:any = [];

	constructor(private cs:CommonService, private route: ActivatedRoute) { }

	ngOnInit() {
        this.route.params.subscribe(params => {
		    this.getItems();
		});
	}

	getItems():any{
		let gender = this.route.snapshot.params['gender'];
		let type = this.route.snapshot.params['type'];

		this.cs.getItemsData().subscribe(response => {console.log(response);
			this.data = response.items[gender][type];
        }, error => console.log('An error occurred…', error));
	}

	addToCart(item):void{
		DataService.cart.push(item);
	}
}
