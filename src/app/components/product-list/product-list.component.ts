import { Component, OnInit } from '@angular/core'
import { ProductService } from '../../services/product/product-service'
import Product from '../../interfaces/Product.interface'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: [],
})
export class ProductListComponent implements OnInit {
    products: Array<Product> | undefined

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.products = this.productService.getProducts()
    }
}
