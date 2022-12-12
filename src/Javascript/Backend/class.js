
class ProductManager {
  static id= 0;
  static products;
  
constructor (title,description,price,thumbnail,stock){
  ProductManager.id += 1;
  this.products= []
  this.title= title;
  this.description= description;
  this.price=price;
  this.thumbnail=thumbnail;
  this.stock=stock;
  this.code= ProductManager.id;
}

addProduct(){
  this.products.push([{title:this.title,description:this.description,price:this.price,thumbnail:this.thumnail,stock:this.stock,code:this.code}]);
}
  getProducts(){
    console.log("getProducts",ProductManager.products)
  }
  
  getProductByID(){}


}

const producto1= new ProductManager("Hamburguesa","hispter", 200, "delivery", 100 );
producto1.addProduct()

const producto2= new ProductManager("pizza", "Italiana", 300, "delivry", 100);
producto2.addProduct()
