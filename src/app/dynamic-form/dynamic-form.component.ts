import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list';
import { ProductService } from '../product-list';
import { Product } from '../product-list';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.template.html',
    directives: [ ProductListComponent ],
    providers: [ ProductService ]
})
export class DynamicFormComponent implements OnInit{ 
    products: Product[];

    constructor(private productService: ProductService) { }

    loadData(){
        this.productService.getProducts().then(result => this.products = result);
    }
    ngOnInit(){
        this.loadData();

        setTimeout(() => this.loadData(), 5000);
    }
}