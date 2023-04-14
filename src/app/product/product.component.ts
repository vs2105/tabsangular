import { Component, OnInit } from "@angular/core";

  


@Component({
    selector:"app-product",
    // selector:"[app-product]",
    // selector:".app-product",
    templateUrl:"./product.component.html",
//     template: `
//     <p class ="info"> The product is {{pName}} with ID {{pID}} and status is in {{pStatus}}
// </p>
// `,
    styleUrls:["./product.component.scss"]
//     styles:[
//         `
//         .info{
//     padding: 10px;
//     border: 1px solid #ededed;
//     border-radius: 5px;
//     background-color: #ededed;
// }
//         `
//     ]

})



export class productcomponent implements OnInit{
   
    
  
    pName:string="Samsung S22 ultra";
    pID:number=315;
    pStatus:string="in transit";
    isproductavailible!:boolean  

      constructor(){

      }
     

      ngOnInit(): void {
        console.log("product comp is init");
        this.isproductavailible=Math.random() > .5 ? true : false
         
    }
   

    public getproductid(){
        return this.pID
    }
  
    public getbgcolor(){
      this.isproductavailible ? "orange" :"#ccc"
    //   if(this.isproductavailible){
    //     return "orange"
    //  }else{
    //     return "#ccc"   
    //  }
    }
}
    
