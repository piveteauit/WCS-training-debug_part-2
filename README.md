# Checkpoint 2

## Step 1 - Start the project

1. Clone the repo from Github.
2. Create a branch with your name and switch on it.
3. Run `npm run setup`.
4. Run `npm run dev`.
5. Go to `localhost:4001` with your favorite browser.



```
products:
{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}
```

```
carts:
{
    "id": 1,
    "userId": 1,
    "date": "2020-03-02T00:00:00.000Z",
    "products": [
      {
        "productId": 1,
        "quantity": 4
      },
      {
        "productId": 2,
        "quantity": 1
      },
      {
        "productId": 3,
        "quantity": 6
      }
    ]
}
```

```
users:
{
    "address": {
        "geolocation": {
        "lat": "-37.3159",
        "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
        "firstname": "john",
        "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
}
```

```
categories:
"electronics"
```


Pages:

Home UserList - (Login) (With the cart infos if user has some products in or not)
Shop (With product main part and user Cart excerpt on the right)
    Panier sur le côté
    Navbar secondaire pour les categories
    Liste des produits au milieu -> Vers details produit
Details produits


Cart detail (With checkout action)
Checkout
Profil (Read / Edit user infos)






## Step 2 - Debug the project
