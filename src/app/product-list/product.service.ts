import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    getProducts() : Promise<Product[]> {
        let list = new Array<Product>();

        for(let i =0; i< 20; i++){
            list.push({
                productId: Math.random(),
                productName: "Product "+i,
                price: i * 10
            });
        }

        return Promise.resolve(<Product[]>list);
    }
}