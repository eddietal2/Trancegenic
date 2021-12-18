import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import Swiper, { SwiperOptions, Autoplay } from 'swiper';
import { ActionSheetController, IonContent, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

Swiper.use([Autoplay]);

interface Product {
  _id: string,
  title: string,
  duration: string,
  price: string,
  description?: string,
  reviews?: Array<Review>,
}
// Make FeaturedProduct with Timer?

interface Review {
  _id: string,
  reviewerUsername: string,
  reviewerEmail: string,
  reviewerProfilePicture: string,
  date: string,
  rating: number,
  review: string,
}


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsPage implements OnInit, AfterViewInit {
  skeletonData = false;
  filterPopoverOpen = false;
  filtering = false;
  filterOption = "Newest";
  featuredSliderVisible = true;
  allProductsFabVisibile = false;
  searching = false;
  accordianGroupValue: string;
  accordianBSubject$ = new BehaviorSubject('featured');
  accrodianSubsciption: Subscription;
  @ViewChild('productsPageContent') content: IonContent;

  // Static Data before Backend Integration
  // I only need _id, title, and duration for main Products page
  // Measure duration in milliseconds
  searchLoadedProducts: Array<Product> = [];
  staticProducts: Array<Product> = [
    {
      _id: "1",
      title: "Banana Pudding",
      duration: "2:30 Mins",
      price: "$5",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: [
        {
          _id: "1",
          reviewerUsername: "John Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 5,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          _id: "1",
          reviewerUsername: "John Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 4,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          _id: "1",
          reviewerUsername: "Jane Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 4.5,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
      ]
    },
    {
      _id: "2",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "2:30 Mins",
      price: "$50",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "2",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "2:30 Mins",
      price: "$50",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    }
  ]
  staticProductsInitialLoad: Array<Product> = [
    {
      _id: "1",
      title: "Banana Pudding",
      duration: "2:30 Mins",
      price: "$5",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: [
        {
          _id: "1",
          reviewerUsername: "John Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 5,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          _id: "1",
          reviewerUsername: "John Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 4,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          _id: "1",
          reviewerUsername: "Jane Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 4.5,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
      ]
    },
    {
      _id: "2",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "2:30 Mins",
      price: "$50",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "2",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "2:30 Mins",
      price: "$50",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    }
  ]
  staticFeaturedProducts: Array<Product> = [
    {
      _id: "1",
      title: "Product Name",
      duration: "2:30 Mins",
      price: "$5",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: [
        {
          _id: "1",
          reviewerUsername: "John Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 5,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          _id: "1",
          reviewerUsername: "John Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 4,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          _id: "1",
          reviewerUsername: "Jane Doe",
          reviewerEmail: "eddielacrosse2@gmail.com",
          reviewerProfilePicture: "",
          rating: 4.5,
          date: "Post 1 Day Ago",
          review: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
      ]
    },
    {
      _id: "2",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "2:30 Mins",
      price: "$50",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    },
    {
      _id: "3",
      title: "Product Name xxx xxx xxx xxx xx xx x x xx xxx",
      duration: "5:30 Mins",
      price: "$100",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
      reviews: []
    }
  ]
  categorySwipeConfig: SwiperOptions = {
    slidesPerView: 3.7,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  featuredSwipeConfig: SwiperOptions = {
    slidesPerView: 1.1,
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
    },
    navigation: true,
  };

  constructor(
    private actionSheetController: ActionSheetController,
    private router: Router,
    private toastController: ToastController,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    let accordianGroup = document.getElementById("accordian-group");
    let featuredProductsIonItem = document.getElementById('featured-products-item');
    let favoriotesProductsIonItem = document.getElementById('favorite-products-item');
    let allProductsIonItem = document.getElementById('all-products-item');

    featuredProductsIonItem.style.background = "#ffdcca";
    favoriotesProductsIonItem.style.background = "none";
    allProductsIonItem.style.background = "none";
    accordianGroup.attributes[0].value = 'featured';


  }

  ngOnInit() {

    this.accordianBSubject$.subscribe(
      data => {
        console.log(data)
      }
    )
  }

  /**
   * Track Scroll Position
   */
  scrollPosition(e) {
     console.clear();
     let scrollDetail = e.detail;
     let fabButton = document.getElementById('fab-button');

     console.log(scrollDetail);
     if (scrollDetail.scrollTop >= 400) {
      fabButton.style.opacity = '1';
      fabButton.style.pointerEvents = 'auto';
     }

     else {
      fabButton.style.opacity = '0';
      fabButton.style.pointerEvents = 'none';
     }

  }

  /**
    * Searching Products
    */
  onSearchChange(e) {
    console.clear();
    let searchInput = e.detail.value;
    this.searchLoadedProducts = [];
    console.log(searchInput)
    if(searchInput == '' || searchInput == null) {
      this.staticProducts = this.staticProductsInitialLoad;
    } else {
      this.staticProducts
        .filter((product) => {
          if(product.title.includes(searchInput)) {
            this.searchLoadedProducts.push(product)
          }
        })
        this.staticProducts = this.searchLoadedProducts;
        this.triggerSearchView();
        setTimeout(() => {
          this.searchToast();
        }, 2000);
    }
  }

  /**
   * Everytime I user does a successful search, a toast presents.
   */
   async searchToast() {
    const toast = await this.toastController.create({
      cssClass: 'dark-toast',
      message: `'All Products' have been updated. &#10003;`,
      duration: 2000
    });
    toast.present();
  }


  triggerSearchView() {
    let accordianGroup = document.getElementById("accordian-group");
    accordianGroup.attributes[0].value = 'all';
    this.searching = true;
    this.skeletonData = true;

    setTimeout(() => {
      this.searching = false;
      this.skeletonData = false;
      this.changeDetectorRef.detectChanges()
    }, 2000);
  }

  /**
   * Send user to that product's page
   * @param productID
   * @param userEmail
   */
  goToProductPage() {
    this.router.navigateByUrl("/product");
  }

  /**
   * Send user to that product's page
   * @param productID
   * @param userEmail
   */
  goTofavoriteProductsPage() {
    console.log('Wassup')
  }

  async openFilterActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Filter Products',
      cssClass: 'filter-action-sheet',
      buttons: this.actionSheetButtons()
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  closeFilterPopover() {
    this.filterPopoverOpen = false;
  }

  /**
   * Semantic Method.
   * @returns Array<ActionSheetButton>
   */
  actionSheetButtons(){
    return [
      {
        text: 'Low Price',
        data: 10,
        handler: () => {
          console.log('Share clicked');
          this.filterProductsFromActionSheet('Low Price')
        }
      },
      {
        text: 'Highest Price',
        data: 10,
        handler: () => {
          console.log('Share clicked');
          this.filterOption = 'Highest Price';
        }
      },
      {
        text: 'Newest',
        data: 10,
        handler: () => {
          console.log('Share clicked');
          this.filterOption = 'Newest';
        }
      },
      {
        text: 'Oldest',
        data: 10,
        handler: () => {
          console.log('Share clicked');
          this.filterOption = 'Oldest';
        }
      },
      {
        text: 'Longest Duration',
        data: 10,
        handler: () => {
          console.log('Share clicked');
          this.filterOption = 'Longest Duration';
        }
      },
      {
        text: 'Shortest Duration',
        data: 10,
        handler: () => {
          console.log('Share clicked');
          this.filterOption = 'Shortest Duration';
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        icon: 'return-down-back-outline',
        cssClass: 'filter-action-sheet-cancel-button',
        handler: () => {
          console.log('Filtering Cancelled!');
        }
      },
    ]
  }

  /**
   * Triggered specifically when filtering products
   * from the filter Action Sheet.
   * Trigger IonSpinner in ResultsBar
   * Trigger Skeleton Text while filtering
   * --
   * change filtering true
   * change filterOption UI
   * change skeletonData true
   * change filtering & skeletonData false
   * @param filterOption
   */
  filterProductsFromActionSheet(filterOption: string) {
    this.filterOption = filterOption;
    this.triggerFilteringView();
  }

  triggerFilteringView() {
    console.clear()
    console.log(this.changeDetectorRef)
    this.filtering = true;
    this.skeletonData = true;
    setTimeout(() => {
      this.filtering = false;
      this.skeletonData = false;
      this.changeDetectorRef.detectChanges()
    }, 2000);
  }

  accordianChange(e) {
    let accordian = e.detail.value;
    let featureProductsIonAccordian = document.getElementById('featured-products-accordian');
    let featuredProductsIonItem = document.getElementById('featured-products-item');
    let favoritesProductsIonAccordian = document.getElementById('favorite-products-accordian');
    let favoriotesProductsIonItem = document.getElementById('favorite-products-item');
    let allProductsIonAccordian = document.getElementById('all-products-accordian');
    let allProductsIonItem = document.getElementById('all-products-item');
    console.clear();
    console.log(accordian);

    if(accordian == 'all' || this.searching) {
      console.log(featureProductsIonAccordian.nextSibling);
      console.log(allProductsIonAccordian);
      this.accordianBSubject$.next(accordian)
      featuredProductsIonItem.style.background = "none";
      favoriotesProductsIonItem.style.background = "none";
      allProductsIonItem.style.background = "#ffdcca";
      this.insertAfter(favoritesProductsIonAccordian, allProductsIonAccordian)
      
    }
    if(accordian == 'favorites') {

      this.accordianBSubject$.next(accordian)
      featuredProductsIonItem.style.background = "none";
      favoriotesProductsIonItem.style.background = "#ffdcca";
      allProductsIonItem.style.background = "none";
      this.insertAfter(allProductsIonAccordian, favoritesProductsIonAccordian)
    }
    if(accordian == 'featured') {
      featuredProductsIonItem.style.background = "#ffdcca";
      favoriotesProductsIonItem.style.background = "none";
      allProductsIonItem.style.background = "none";
      this.accordianBSubject$.next(accordian)
    }
    if(accordian === undefined) {
      featuredProductsIonItem.style.background = "none";
      favoriotesProductsIonItem.style.background = "none";
      allProductsIonItem.style.background = "none";

    }
    
  }

  insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  
  // Swiper
  onSwiper(swiper) {
    // console.log(swiper);
  }
  onSlideChange() {
  }

  /**
   * Enables the user to hide the featured products from the UI
   */
  toggleFeaturedVisibility() {
    let featuredSlideWrapper = document.getElementById('featured-swiper');
    let featuredReturnPosition = document.getElementById('featured-return-position');

    switch (this.featuredSliderVisible) {
      case true:
        this.featuredSliderVisible = false
        featuredReturnPosition.scrollIntoView();
        featuredSlideWrapper.style.height = '0px';
        break;
      case false:
        this.featuredSliderVisible = true
        featuredReturnPosition.scrollIntoView();
        featuredSlideWrapper.style.height = '400px';
        break;
    
      default:
        break;
    }
  }

  /**
   * Scroll to the Top of the page.
   */
  scrollToTop() {
    this.content.scrollToTop();
  }
}
