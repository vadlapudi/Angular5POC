import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class CommonService {
	appData:any;
	data:any;

	constructor(private http: Http) {
		
	}

    getAppData():any{
    	let observable: any = new ReplaySubject(1);

    	if(this.appData === undefined){
    		this.http.request('/assets/data/appData.json', {
	            method: 'GET'
	        }).subscribe(response => {
	            var resp = JSON.parse(response['_body']);
	            this.appData = resp;
	            observable.next(resp);
	            observable.complete();
	        }, error => console.log('An error occurred…', error));
    	}else{
    		observable.next(this.appData);
	        observable.complete();
    	}

    	return observable;
    }

    getItemsData():any{
    	let observable: any = new ReplaySubject(1);

    	if(this.data === undefined){
    		this.http.request('/assets/data/data.json', {
	            method: 'GET'
	        }).subscribe(response => {
	            var resp = JSON.parse(response['_body']);
	            this.data = resp;
	            observable.next(resp);
	            observable.complete();
	        }, error => console.log('An error occurred…', error));
    	}else{
    		observable.next(this.data);
	        observable.complete();
    	}

    	return observable;
    }

}
