[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/goQJehXc)
# 🧩 MFE Assignment: Build a Routed E-Commerce Shell with Module Federation

**Home, Product & Shop — Independently Deployable Pages with Fault-Tolerant Routing**

Welcome to this Micro Frontend assignment! 🚀  
In this task, you will build a routed e-commerce application using **Module Federation**. You will create a host shell app that loads multiple independently running frontend apps such as Home, Product, and Shop.

---

## ✅ Objective

- Build a **Micro Frontend architecture** using Module Federation.
- Create a main **Shell App** that handles routing and layout.
- Create separate remote apps for:
  - Home
  - Product
  - Shop
- Load remote pages dynamically inside the shell.
- Implement fault-tolerant routing so the shell does not crash if a remote app is unavailable.
- Practice independent app structure, routing, lazy loading, and deployment-ready frontend architecture.

---

## 💡 Project: Routed E-Commerce Shell

You will build a simple e-commerce-style application with multiple independently deployable pages.

The application should have:

- A main shell/container app.
- Separate remote apps for different pages.
- Navigation between pages.
- Error fallback if a remote module fails to load.
- Clean folder structure and reusable components.

---

## 🧱 Micro Frontend Apps

You need to create the following apps:

### 1. Shell App

The Shell App is the main container application.

Responsibilities:

- Provides the main layout.
- Contains the navigation menu.
- Defines application routes.
- Loads remote apps using Module Federation.
- Handles fallback UI if a remote app fails.

Example routes:

```txt
/           -> Home remote
/products   -> Product remote
/shop       -> Shop remote

### 2. Home Remote App

The Home app should display a simple landing page for the e-commerce platform.

Suggested content:

- Welcome message.
- Hero section.
- Featured categories or offers.
- Basic styling.

### 3. Product Remote App

The Product app should display a product listing page.

Suggested content:

- List of products.
- Product name, image placeholder, price, and description.
- Product card component.
- Basic filtering or sorting is optional.

### 4. Shop Remote App

The Shop app should display a shopping/cart-style page.

Suggested content:

- Cart summary.
- Items added to cart.
- Quantity controls.
- Total price section.
- Checkout button UI.

## 🖼️ UI Structure

[ Shell App ]

```txt
-----------------------------------------
| E-Commerce MFE                         |
| Home | Products | Shop                 |
-----------------------------------------

[ Remote Page Render Area ]

Home Page / Product Page / Shop Page
```

-----------------------------------------

## 📁 Suggested Project Structure

```txt
mfe-ecommerce-assignment/
├── shell/
│   ├── src/
│   │   ├── components/
│   │   ├── routes/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── home/
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── product/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── shop/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 📌 Instructions

### 1. Scaffold the apps

Create four separate frontend apps using Vite.

```bash
npm create vite@latest shell
npm create vite@latest home
npm create vite@latest product
npm create vite@latest shop
```
Use:

```bash
Framework: React
Variant: JavaScript
```

-----------------------------------------

## 2. Install dependencies

Each app should install required dependencies.

```bash
npm install
```

For Module Federation, use:

```bash
npm install @originjs/vite-plugin-federation
```

Install React Router in the shell app:

```bash
npm install react-router-dom
```

-----------------------------------------

## 3. Configure Module Federation

Each remote app should expose its main component.

Example remote exposure:

```bash
exposes: {
  './App': './src/App.jsx'
}
```

The shell app should consume the remote apps.

Example shell remotes:

```bash
remotes: {
  home: 'http://localhost:5001/assets/remoteEntry.js',
  product: 'http://localhost:5002/assets/remoteEntry.js',
  shop: 'http://localhost:5003/assets/remoteEntry.js'
}
```

-----------------------------------------

## 4. Add routing in Shell App

Use react-router-dom to create routes:

```bash
/         -> Home
/products -> Product
/shop     -> Shop
```

Remote pages should be loaded using lazy loading.

-----------------------------------------

## 5. Add fault-tolerant loading

The Shell App should handle remote loading failures gracefully.

Examples:

- Show loading state while remote page is loading.
- Show fallback UI if a remote app is unavailable.
- Prevent the whole shell from crashing.

-----------------------------------------

## Suggested fallback message:

This page is currently unavailable. Please try again later.
🚀 Suggested Ports

Use the following ports for consistency:

```bash
Shell App:   http://localhost:5000
Home App:    http://localhost:5001
Product App: http://localhost:5002
Shop App:    http://localhost:5003
```

-----------------------------------------

## 🧪 Expected Features

Your final project should include:

- A working Shell App.
- Separate Home, Product, and Shop remote apps.
- Navigation between all pages.
- Module Federation configuration.
- Remote apps loaded inside the shell.
- Error fallback for unavailable remotes.
- Clean and meaningful folder structure.
- Basic responsive styling.

-----------------------------------------

## ⭐ Bonus Features

Optional improvements:

- Add shared header/footer in Shell App.
- Add product data using a local JSON file.
- Add cart state in Shop app.
- Add loading skeletons.
- Add an Error Boundary component.
- Add deployment instructions.
- Deploy each app independently.

-----------------------------------------

## 📦 Deliverables
- A GitHub repository containing the completed project.
- The project should include:
  - Shell app
  - Home remote app
  - Product remote app
  - Shop remote app
  - Clear setup instructions
  - Working Module Federation configuration

-----------------------------------------

## ▶️ Running the Project

Run each app in a separate terminal.

```bash
cd home
npm install
npm run dev
```

```bash
cd product
npm install
npm run dev
```

```bash
cd shop
npm install
npm run dev
```

```bash
cd shell
npm install
npm run dev
```

Then open:

```bash
http://localhost:5000
```

-----------------------------------------

## 🚀 Deployment Instructions (Bonus)

Each app (`shell`, `home`, `product`, `shop`) is independently deployable. Steps to deploy for real:

1. **Build each app separately:**
   ```bash
   cd home && npm run build      # outputs to home/dist
   cd product && npm run build   # outputs to product/dist
   cd shop && npm run build      # outputs to shop/dist
   cd shell && npm run build     # outputs to shell/dist
   ```

2. **Host each `dist/` folder** on a static host that supports CORS (e.g. Vercel, Netlify, GitHub Pages, S3 + CloudFront). Each app gets its own URL, e.g.:
   ```
   home    -> https://home-yourapp.vercel.app
   product -> https://product-yourapp.vercel.app
   shop    -> https://shop-yourapp.vercel.app
   shell   -> https://shell-yourapp.vercel.app
   ```

3. **Point the shell at the deployed remotes.** Currently `shell/vite.config.js` hardcodes remote URLs to `localhost` for local dev:
   ```js
   remotes: {
     home: 'http://localhost:5001/assets/remoteEntry.js',
     product: 'http://localhost:5002/assets/remoteEntry.js',
     shop: 'http://localhost:5003/assets/remoteEntry.js',
   }
   ```
   For production, these should be switched to the deployed `remoteEntry.js` URLs (e.g. via environment variables so dev keeps using `localhost` and prod uses the real deployed URLs), then the shell rebuilt and redeployed.

4. **Verify CORS/HTTPS.** Each remote's host must serve `remoteEntry.js` with CORS enabled (most static hosts do this by default) and over HTTPS to avoid mixed-content issues when the shell is also served over HTTPS.

> Note: This section documents *how* to deploy; the apps have not been deployed as part of this submission.

-----------------------------------------

## 📅 Deadline

Please submit your GitHub repo link by: 12 - August - 2026

-----------------------------------------

## 💡 Tips
- Start all remote apps before running the shell.
- Keep each remote app small and focused.
- Test what happens when one remote app is stopped.
- Use clear component names and folder structure.
- Read the Module Federation and Vite plugin documentation carefully.

Helpful links:

- https://vitejs.dev/
- https://react.dev/
- https://reactrouter.com/
- https://github.com/originjs/vite-plugin-federation

## Happy Building! ⚡
