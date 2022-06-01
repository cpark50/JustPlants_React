# INF124 Project Assignment #4 

## JustPlants Admin Page
JustPlants is an e-commerce website that sells indoor plants to customers and encourage people to connect with the environment.
To manage stocks and product information, we built an admin page that allows adding, updating and deleting products of JustPlants.

## Contributors
- Rongbing Lai
- Cindy Park
- Jiahao Lei

## Introduction to the General Layout
**Main page** (http://localhost:8081/products) \
The main page shows the list of products of JustPlants. When you click the product from the right column, you can view the product details such as id, price, size, description and how to take care(water, light, pet & child friendliness).

The admin can edit the existing product information by clicking the "edit" button and also search products by name. The website also allows filtering for pet and child friendly products. 



**Add page** (http://localhost:8081/add) \
When the admin clicks "Add" from the navigation bar, the website directs to a page that allows admin to add new products. The user can input all the product information such as id, name, biological name, price, size, description, care instructions and image file. When new product is added, it will be updated on the JustPlant e-commerce site. 

**Edit Product page** (http://localhost:8081/products/{id}) \
When viewing the product from the mainpage, user can click "edit" and it will direct to a page where the user can update product information. The last part of the url is the id number of the product. The editing product information page also allows user to delete the product. It works similar to adding new product but instead of creating a new one, it updates information on top of the existing content. 







