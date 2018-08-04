import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Car } from '../domain/car';
import { User } from '../domain/user';
import { GlobalVariable } from '../global';

@Injectable()
export class UserService {
	private baseApiUrl = GlobalVariable.BASE_API_URL;
    constructor(private http: HttpClient) {}

    getCarsSmall() {
        return this.http.get<any>('assets/data/cars-small.json')
            .toPromise()
            .then(res => <Car[]> res.data)
            .then(data => data);
    }

    postLogin(_data) {
    	var params = "name="+_data.name+"&password="+_data.password;
    	let headers = new HttpHeaders();
    	headers = headers.set("Content-Type", "application/x-www-form-urlencoded");
		
		return this.http.post<any>(this.baseApiUrl + '/authenticate',params, {headers: headers} )
        .toPromise()
        .then(data => data);
	}

	getUser(_data) {
		var params = "name="+_data.name+"&token="+_data.token;
		
		return this.http.get<any>(this.baseApiUrl + '/user?'+params)
        .toPromise()
        .then(data => data);
	}




	postGuarda(_data) {
    	//let headers = new HttpHeaders();
    	//headers.set("Content-Type", "application/x-www-form-urlencoded");
    	//headers.set("x-access-token", _data.token );

    	//var headers=new HttpHeaders({'Content-Type':'application/json'})
  		//'x-access-token': _data.token 
    	//let headers = new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"});
    	//headers = headers.set();
    				     //.set("x-access-token", _data.token );

		//let  httpParams = new HttpParams();
		//httpParams.append("x-access-token", _data.token );

    	
		/*const httpOptions = {
			 headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'}),
			 withCredentials: true
			};*/

		const httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json'})
			,params: new HttpParams().set('token', _data.token)
		}

    	console.log("##################################");
    	console.log(_data);
		
		return this.http.post<any>(this.baseApiUrl + '/user', _data,httpOptions )
        .toPromise()
        .then(data => data);
	}
}














