import { Component, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.template.html',
})
export class ProductListComponent { 
    @Input() products: Product[];
    selectedProduct: Product;

    selectProduct(product: Product){
        this.selectedProduct = product;
    }
}