# WDW Shop - Modern Next.js 14 E-commerce Platform 🚀

WDW Shop is a high-performance, fully responsive e-commerce web application built with **Next.js 14**, **Redux Toolkit**, and **Clerk**. It features a sleek, modern design with a seamless user experience, including advanced authentication, shopping cart management, and product filtering.

---

## ✨ Features
-  **Secure Authentication:** Integrated sign-in and sign-up flows powered by Clerk.
-  **Dynamic Shopping Cart:** Real-time state management for items, quantities, and price totals using Redux.
-  **Persistent Wishlist:** Add and remove favorite products with ease.
-  **Real-time Search:** Instantly find products by title using the optimized search interface.
-  **Category Filtering:** Browse specific product collections like electronics, jewelry, and clothing.
-  **Responsive Design:** Optimized for all screen sizes (Mobile, Tablet, and Desktop) using Tailwind CSS.
-  **Performance Optimized:** Utilization of Next.js Server Components, Image Optimization, and App Router for superior speed.
-  **Modern UI/UX:** Clean, elegant interface using Shadcn UI (Radix UI) and Lucide icons.

---

## 🛠️ Built With (Tech Stack)
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router & Server Actions)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Auth Provider:** [Clerk](https://clerk.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) (Shadcn UI style)
- **Icons:** [Lucide-React](https://lucide.dev/)
- **Toast Notifications:** [Sonner](https://sonner.stevenly.me/)

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/Muad-Ahmed/ecommerce-next-js.git
cd ecommerce-next-js
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the project's root directory and include your Clerk API keys:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### 3. Run Development Server
Start the application locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to explore the shop.

---

## 📂 Project Structure
- **/app**: Core application logic, routing, and page layouts (App Router).
- **/components**: Reusable UI components categorized into Home, Base UI, and Helpers.
- **/store**: Global state management configuration and slices for Cart and Favorites.
- **/lib**: Utility functions and shared helpers.
- **/request**: Centralized API fetching logic for products and categories.
- **/public**: Static assets including brand assets and optimized images.

---

### Developed By
**Muad Ahmed**
- GitHub: [Muad-Ahmed](https://github.com/Muad-Ahmed)

---
*If you find this project helpful, please consider giving it a ⭐!*
