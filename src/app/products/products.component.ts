import { Component, OnInit } from "@angular/core";



@Component({
   selector:"app-products",
   templateUrl:"./products.component.html",
   styleUrls:["./products.component.scss"]
})

export class ProductsComponent implements OnInit{
   isdisabled:boolean=true
   productsstate:string= "No product is added yet"
   noofproduct:number=0
    searchproductname  :string = "no product is search yet"
   ngOnInit(): void {
      console.log("product comp is init");
      setTimeout(() => {
          this.isdisabled=false
      }, 1000);
  }

  OnProductsearch(eve:Event){
   let val=(eve.target as HTMLInputElement).value
      console.log(val)
      this.searchproductname=val
  }

  getproductstatus(){
   console.log('btn clicked')
   this.noofproduct++
   this.productsstate=`${this.noofproduct} product is added to cart !!`
   
  }

  removeproduct(){
   if (this.noofproduct >0) {
      this.noofproduct--
      this.productsstate=`${this.noofproduct} product is added to cart !!`
   }
  }

}