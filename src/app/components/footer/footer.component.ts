import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
	appData:any = {};

	constructor(private cs:CommonService) { }

	ngOnInit() {
		this.cs.getAppData().subscribe(response => {
			this.appData.name = response.name;
        }, error => console.log('An error occurred…', error));

        this.appData.year = new Date().getFullYear();
	}
}
