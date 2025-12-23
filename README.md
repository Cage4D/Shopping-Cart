# Shop.cart

A small shopping cart demo built with React and React Router.  
The project focuses on client-side routing, shared state, and working with external API data.

## Demo
https://shopping-site-demo.vercel.app/

## Overview

This application simulates a basic shopping flow:
- Users can browse a list of products
- Select quantities
- Add items to a shared cart
- Navigate between pages without losing cart state

The goal of the project is to practice React fundamentals and application structure, not to create a production-ready store.

## Tech Stack

- React (Vite)
- React Router
- Tailwind CSS
- Fake Store API
- Typed.js (landing page text animation)

## Routes

The app uses nested routes:

- `/` – Layout component
- `/` (index) – Landing page
- `/shop` – Product listing
- `/cart` – Cart view

The `Home` component acts as the layout and owns the cart state, which is shared with child routes using React Router’s `Outlet` context.

## State Management

- Cart state is stored in the layout component (`Home.jsx`)
- Child routes access and update the cart via `useOutletContext`
- When adding an item:
  - Quantity must be greater than zero
  - Existing items are updated instead of duplicated

No external state libraries are used.

## Data Source

Product data is fetched from:
https://fakestoreapi.com/products

It is a frontend-only project


## Limitations

- No persistent storage (cart resets on refresh)
- No authentication or checkout
- No backend validation

These limitations are intentional to keep the project focused on frontend logic.


This project is intended for learning and personal use.

