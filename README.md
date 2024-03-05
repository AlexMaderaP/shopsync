# ShopSync

Welcome to [ShopSync](https://shopsync.onrender.com/), a comprehensive full-stack e-commerce web application developed with the MERN stack, which stands for MongoDB, Express.js, React, and Node.js. This robust platform is designed to provide a seamless online shopping experience from browsing to checkout.

![Shopsync general view](https://github.com/AlexMaderaP/shopsync/assets/99360250/6aaed0d7-b746-444b-8bb0-5204e51bce7f)


At its core, ShopSync utilizes Express.js for its backend operations.

The data storage solution of choice is MongoDB. It allows for high volume data storage which makes it a good choice for our e-commerce application where large amounts of product and user data may be stored and accessed.

On the frontend, ShopSync leverages the power of React. This allows for a dynamic and responsive user experience, ensuring customers can navigate the site with ease and efficiency.

To manage the application state, ShopSync uses Redux Toolkit, a powerful tool that helps simplify a lot of Redux code. This ensures a predictable state container for JavaScript apps and a consistent developer experience.

ShopSync offers a wide range of features designed to mimic the real-world shopping experience. These include a full-featured shopping cart, product reviews and ratings, a top products carousel, product pagination, and a product search feature. Users can create profiles to view their orders and update their information. The checkout process is streamlined with shipping and payment method options, including PayPal and credit card integration.

For administrators, ShopSync provides a suite of tools for product and user management, including an order details page and the ability to mark orders as delivered. A database seeder is included for populating the database with initial products and users.

In summary, ShopSync is a robust, user-friendly e-commerce platform built with the MERN stack, designed to provide a seamless shopping experience from start to finish. Whether you’re a customer looking for a smooth shopping experience or an administrator seeking efficient management tools, ShopSync has got you covered. Enjoy the ShopSync experience! 😊

## How to run the app

- Create a MongoDB database and obtain your MongoDB URI.
- Create a PayPal account and obtain your Client ID in the developer portal

### Env Variables

Rename the `example.env` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'example321'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

You can change PAGINATION_LIMIT and JWT_SECRET as you want.

### Install Dependencies

Run this from the command line:

```
npm install
cd frontend
npm install
```

### Run Scripts

- `npm run server` - it will run the backend at port 3000
- `npm run client` - it will run the frontend at port 5000
- `npm run dev` - it will run concurrently the server and the client

### Feed your database

You can use the scripts:

- `npm run data:destroy` to delete your data.
- `npm run data:import` to import data.

You can check the users the script will create by going to `./backend/data/users.js`
The same way you can check and modify the products that will be created by the script in `./backend/data/users.js`

## Cart Functionality

- You can add as many items as you want.
- You cannot proceed to checkout if you have no items in your cart.
- When you go to checkout, it will redirect you to the login page if you are not logged in. You will also be able to create an account if that is the case.
- After you log in, you will be redirected to the shipping screen if you have not added it.
- Then you will be asked to select the payment method.
- Finally, you will go to the summary screen where you will be able to check your entire order details and have the option to submit your order.

## Payment

After you create your order, you get to the screen where you get the details and where you can proceed to payment with PayPal. When your payment is successful, you are able to see your order status updated and wait for your order to be delivered. Your order delivery status can only be changed by the admin.

## User

As a user, you have your own profile page where you can update your information and where you can check all your orders made.

## Admin

When you log in as an admin user, you have different features that a user cannot do. In the header, you have a special tab where you can use the following options:

- Orders: Where you can see the orders that have been created by all the users of the website, and where you can check the details and update their status.
- Users: You can see the information of all your users and where you can update any of these fields.
- Products: Page where you would be able to see all the products you have available. You will have the option to delete or edit any of the existing products and also the option to create as many as you want.

## MIT License

Copyright (c) 2023 Alejandro Madera Pinedo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
