import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../types/product.interface';
import { map } from 'rxjs/operators';

const url = 'https://app-crud-material-fbcab-default-rtdb.firebaseio.com/productlist'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

	products: ProductInterface[] = [];

  constructor(private http: HttpClient) { }
	
//CREATE------------------------------------------
	createData(product: ProductInterface) {
		return this.http.post<ProductInterface>(`${url}.json`, product);
	}
	
//READ--------------------------------------------
getData() {
  return this.http.get<{ [key: string]: ProductInterface }>(`${url}.json`)
    .pipe(
      map(responseData => {
        const productsArray: ProductInterface[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            productsArray.push({ ...responseData[key], id: key });
          }
        }
        return productsArray;
      })
    );
}

//UPDATE--------------------------------------------
updateData(product: ProductInterface, id: string) {
  return this.http.put(`${url}/${id}.json`, product);
}

	
	//DELETE------------------------------------------
	deleteData(id: string) {
		return this.http.delete(`${url}/${id}.json`);
	}
	
}