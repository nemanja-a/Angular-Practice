import { Injectable } from '@angular/core';
import { Product } from '../products';
import { HttpClient } from '@angular/common/http';
import { ShippingPrice } from '../models/shipping-price';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<ShippingPrice[]> {
    return this.http.get<ShippingPrice[]>('/assets/shipping.json');
  }
}
