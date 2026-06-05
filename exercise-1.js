/*
# JavaScript Objects Exercise
Create an object called `product` with the following properties:

```
name: "Tea Leaf"
price: 490
stock: 100
```

Then complete these tasks:
1. Print the entire object.
2. Print the product name.
3. Print the product price.
4. Add a new property called `category` with the value `"Grocery"`.
5. Update the stock to `120`.
6. Delete the `category` property.
7. Add a method called `showInfo()` that prints:

```text
Tea Leaf - ৳490
```

8. Call the `showInfo()` method.
9. Print all keys of the object.
10. Print all values of the object.

### Expected Concepts

* Object creation
* Accessing properties
* Adding properties
* Updating properties
* Deleting properties
* Object methods
* `Object.keys()`
* `Object.values()`
*/

const product = {
    name: "Tea Leaf",
    price: 490,
    stock: 100,

    showInfo: function() {
        console.log(this.name + " - ৳" + this.price);
    }
};

console.log(product);

console.log(product.name);
console.log(product.price);

product.category = "Grocery";
product.stock = 120;

delete product.category;

product.showInfo();

console.log(Object.keys(product));
console.log(Object.values(product));