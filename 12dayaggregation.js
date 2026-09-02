/*

//$lookup operator is used to perform a left outer join to another collection in the same database to filter in documents from the "joined" collection for processing.

db.products.insertMany([
  {
    _id: 1,
    name: "Laptop",
    price: 1200,
  },
  {
    _id: 2,
    name: "Mouse",
    price: 25,
  },
  {
    _id: 3,
    name: "Keyboard",
    price: 75,
  },
]);

db.orders.insertMany([
  {
    _id: 101,
    product_id: 1,
    quantity: 2,
  },
  {
    _id: 102,
    product_id: 2,
    quantity: 5,
  },
]);



db.products.insertMany([
  {
    name: "iPhone 15",
    category: "Electronics",
    brand: "Apple",
    price: 1200,
    quantity: 10,
    rating: 4.7,
  },
  {
    name: "Galaxy S24",
    category: "Electronics",
    brand: "Samsung",
    price: 1000,
    quantity: 15,
    rating: 4.6,
  },
  {
    name: "MacBook Air",
    category: "Electronics",
    brand: "Apple",
    price: 1500,
    quantity: 5,
    rating: 4.8,
  },
  {
    name: "Dell XPS 15",
    category: "Electronics",
    brand: "Dell",
    price: 1400,
    quantity: 7,
    rating: 4.5,
  },
  {
    name: "AirPods Pro",
    category: "Electronics",
    brand: "Apple",
    price: 250,
    quantity: 25,
    rating: 4.6,
  },
  {
    name: "Galaxy Buds",
    category: "Electronics",
    brand: "Samsung",
    price: 180,
    quantity: 30,
    rating: 4.3,
  },
  {
    name: "iPad Air",
    category: "Electronics",
    brand: "Apple",
    price: 700,
    quantity: 12,
    rating: 4.7,
  },
  {
    name: "Dell Monitor",
    category: "Electronics",
    brand: "Dell",
    price: 400,
    quantity: 20,
    rating: 4.2,
  },

  {
    name: "Nike Air Max",
    category: "Footwear",
    brand: "Nike",
    price: 180,
    quantity: 20,
    rating: 4.5,
  },
  {
    name: "Adidas Ultraboost",
    category: "Footwear",
    brand: "Adidas",
    price: 200,
    quantity: 15,
    rating: 4.6,
  },
  {
    name: "Nike Revolution",
    category: "Footwear",
    brand: "Nike",
    price: 120,
    quantity: 30,
    rating: 4.2,
  },
  {
    name: "Puma Runner",
    category: "Footwear",
    brand: "Puma",
    price: 100,
    quantity: 25,
    rating: 4.1,
  },
  {
    name: "Adidas Superstar",
    category: "Footwear",
    brand: "Adidas",
    price: 150,
    quantity: 18,
    rating: 4.4,
  },
  {
    name: "Nike Pegasus",
    category: "Footwear",
    brand: "Nike",
    price: 160,
    quantity: 22,
    rating: 4.7,
  },

  {
    name: "Levis 501",
    category: "Clothing",
    brand: "Levis",
    price: 80,
    quantity: 40,
    rating: 4.3,
  },
  {
    name: "Levis Jacket",
    category: "Clothing",
    brand: "Levis",
    price: 150,
    quantity: 20,
    rating: 4.5,
  },
  {
    name: "Zara T-Shirt",
    category: "Clothing",
    brand: "Zara",
    price: 40,
    quantity: 50,
    rating: 4.1,
  },
  {
    name: "Zara Jeans",
    category: "Clothing",
    brand: "Zara",
    price: 70,
    quantity: 35,
    rating: 4.2,
  },
  {
    name: "H&M Hoodie",
    category: "Clothing",
    brand: "H&M",
    price: 60,
    quantity: 45,
    rating: 4.0,
  },
  {
    name: "H&M Jacket",
    category: "Clothing",
    brand: "H&M",
    price: 100,
    quantity: 25,
    rating: 4.3,
  },

  {
    name: "Coffee Maker",
    category: "Home",
    brand: "Philips",
    price: 120,
    quantity: 15,
    rating: 4.4,
  },
  {
    name: "Vacuum Cleaner",
    category: "Home",
    brand: "Dyson",
    price: 500,
    quantity: 8,
    rating: 4.8,
  },
  {
    name: "Air Fryer",
    category: "Home",
    brand: "Philips",
    price: 200,
    quantity: 18,
    rating: 4.5,
  },
  {
    name: "Blender",
    category: "Home",
    brand: "Philips",
    price: 100,
    quantity: 25,
    rating: 4.2,
  },
  {
    name: "Robot Vacuum",
    category: "Home",
    brand: "Dyson",
    price: 800,
    quantity: 5,
    rating: 4.7,
  },
  {
    name: "Toaster",
    category: "Home",
    brand: "Philips",
    price: 70,
    quantity: 30,
    rating: 4.0,
  },
])



*/

// join products table with orders table

db.products.aggregate([
    {
        _id:101,
        product_id: 1,
        quantity: 2,    
    },
    {
        _id: 102,
        product_id: 2,
        quantity: 2,
    }
])




// join products table with orders table

db.products.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "id",
            foreignField: "product_id",
            as: "order_details",
        }
    }
])



//join orders table with product tables

    db.orders.aggregate([
        {
            $lookup: {
                from: "products",
                localField: "product_id",
                foreignField: "_id",
                as: "product_details",
            }
        }
    ])



    // find the average price of all products
    