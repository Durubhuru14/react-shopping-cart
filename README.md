# React Shopping Cart

A modern e-commerce shopping cart application built with React, Tailwind CSS, and Headless UI.

## Screenshots

![ss1](https://i.imgur.com/bCVaYDU.png)
![ss2](https://i.imgur.com/0sElYRY.png)
![ss3](https://i.imgur.com/oialXRy.png)
![ss4](https://i.imgur.com/Dn7azK7.png)

## Features

- Product listing with images and details
- Add products to cart
- Update product quantities
- Remove products from cart
- Clear entire cart
- Responsive design for all screen sizes
- Toast notifications for user feedback
- Shopping cart sidebar/dialog
- Subtotal calculation

## Technologies Used

- React
- Tailwind CSS
- Headless UI (for accessible components)
- Heroicons (for SVG icons)
- React Toastify (for notifications)
- React Context API (for state management)

## Installation

- Clone the repository:
   ```bash
   git clone https://github.com/Durubhuru14/react-shopping-cart.git
   ```

- Navigate to the project directory:
   ```bash
   cd react-shopping-cart
   ```

- Install dependencies:
   ```bash
   npm install
   ```

- Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── assets/                 # Static assets like images
├── Components/             # React components
│   ├── Navbar.jsx          # Navigation bar component
│   ├── ProductLists.jsx    # Product listing component
│   └── ShoppingCartDialog.jsx # Shopping cart dialog
├── Context/                # Context providers
│   └── CartContext.jsx     # Cart context provider
├── data/                   # Data files
│   └── products.js         # Product data
├── Reducers/               # Reducers
│   └── CartReducer.jsx     # Cart reducer logic
├── App.css                 # Main CSS file
├── App.jsx                 # Main App component
└── main.jsx                # Entry point
```

## Context API

The app uses React Context API for state management with a cart reducer that handles:
- Adding items to cart
- Updating item quantities
- Removing items from cart
- Clearing the entire cart

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

[Durubhuru](https://github.com/Durubhuru14)