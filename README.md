# INF124 Project Assignment #4 
"NEEDS TO BE UPDATED"

## JustPlants
JustPlants is an e-commerce website that sells indoor plants to customers and encourage people to connect with the environment.  

## Contributors
- Rongbing Lai
- Cindy Park
- Jiahao Lei

## Introduction to the General Layout
**Main page**\
The main page is built with JSP, where all the products in page are fetched from the database that stores all plants in stock. The user can click each plants and the website will direct the customer to the product page. 

The main page is the product page where all the products are listed. There is a navigation bar with a Home tab that brings the user back to the main page, an About Company tab that shows the overview of the company business, and a View My Cart tab that allows users to view the cart and make orders.

After making the order, there will be a recent order section shown in the home page below all the products. Users can rate the products that they have ordered. 

**About Company page**\
The About Company page has the mission statement, and the about us, which is a business overview, and finally the team with team profiles and titles. Clicking on the title on the top center can navigate to the main page. It is a static page built with HTML and CSS. 

**Detailed Product page**\
The product page is also built with JSP and SQL. By clicking on the products from the main page, it will lead you to each of the detailed product pages. The user can always navigate back to the main page or the about company page via the top navigation bar.The detailed product page has a bigger image on the left side. On the right side, there are the type of the products, the product name, description, size, instruction for caring, price and quantity modifying input and Add to cart button. By clicking on the Add to cart button, it will add the desired quantity of that product to customer's cart by storing all the information distinct from each HTTP sessions.

**View Shopping Cart page**\
This page fetches user's cart information using session's attributes and displays product information with SQL. Along product images and name, user can see and update the item quantity for each of the items which will be reflected in cart quantity from navigation bar and total price. After user finalizes the quantity and items, they can proceed to order by clicking the checkout button. By matching the product id with the session's array attribute, it allows to selectively fetch product info from the database. 

**Order Form page**\
This page is built with JSP and utilized Ajax to apply shipping rates and tax rates based on user input. 
The order form is for customers to order products by filling in the information. The form has three sections. The first section is a cart, which displays the user's id, all products in the cart, and the total price. The second section is shipping information, asking customers to fill in the shipping info including names, phone number, address and shipping method. The third section is payment information where customers need to enter their credit card. Customers can reset the info by clicking on the reset button, or check out by clikcing the checkout button. If the cart is empty and the customer try to check out without any item, checkout button will direct customer to a error page with a go back button; if customer properly fills all the required information and the cart is not empty, checkout button will direct customer to the order confirmed page with order details and save the order information to the server database.

**RESTful APIs**\
To practice RESTful service for our webpage, we implemented a feature that generates JSON response using Jersey REST framework. The order and product resources interact with the REST services. The product information that is displayed in the product page can be displayed in a JSON format and this can be viewed by using the url (e.g. http://localhost:8080/ecommerce/api/product/9) where the last part of the url can be any value in range [1, 10], which is the id of our product. 


Method Type: GET
Request URL: http://localhost:8080/ecommerce/api/product/{id}
Sample Response: ![Alt example of json](https://github.com/cpark50/JustPlants/blob/main/REST%20JSON%20example.png)

Method Type: GET
Request URL: http://localhost:8080/ecommerce/api/order/{order_id}
Sample Response: {"id": "1", "uid": "1234", "shipping": "overnight", "orders": '["p_1", "p_2"]'}

Method Type: POST
Request URL: http://localhost:8080/ecommerce/api/order/
Sample Response: Order added Successfully
Sample Request: {"id": "1", "uid": "1234", "shipping": "overnight", "orders": '["p_1", "p_2"]'}






