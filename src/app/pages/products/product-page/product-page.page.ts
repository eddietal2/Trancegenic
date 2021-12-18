import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit {
  productID: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    // private auth: AuthSevice
    ) {
      // this.userEmail = this.auth.userEmail;
     }

  ngOnInit() {
    // Get Post ID from navigation params on the main posts tab
    const id  = this.activatedRoute.snapshot.paramMap.get('_id');
    this.productID = id;
  }

}
