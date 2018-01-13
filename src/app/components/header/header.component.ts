import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
	appData:any = {};
	cart:any = [];

	constructor(private cs:CommonService) {
		this.cart = DataService.cart;
	}

	ngOnInit() {
		this.cs.getAppData().subscribe(response => {
			this.appData = response;
        }, error => console.log('An error occurred…', error));
	}

}
