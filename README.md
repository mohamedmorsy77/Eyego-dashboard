Dashboard Project
=================

This project is a dashboard built using React, Redux Toolkit, and other modern web technologies. The application dynamically displays products and allows the user to interact with data through sorting, pagination, and filtering. It also features a charting component to analyze product data based on various metrics.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




Key Features
------------

1.  **Authentication with Mocked API:**
    
    *   For authentication, I used a mocked API with json-server and json-server-auth. After a successful login, an access token is generated for the user.
        
    *   bashCopyEdit"server": "concurrently \\"npx json-server data/db.json --watch --port 5000\\" \\"npx json-server-auth data/db.json --watch --port 5001\\""
        
    *   This command sets up two instances of json-server—one for the data and another for authentication, both running on different ports.
        
2.  **Dummy JSON for Product Data:**
    
    *   I used dummyjson for dynamically displaying products in a table. The product data is paginated, with 33 pages in total.
        
    *   Pagination is implemented to display products in chunks, improving usability.
        
3.  **Sorting and Filtering:**
    
    *   **Sorting:** The table supports sorting products by the highest rating and price.
        
    *   **Filtering:** The user can filter products by category or title via a search feature.
        
4.  **Recharts Library:**
    
    *   I integrated the Recharts library for data visualization.
        
    *   The chart is used to analyze product data based on various factors such as price, rating, and category. The data is passed to the chart, and it provides a visual representation of these metrics.
        
5.  **Redux Toolkit for State Management:**
    
    *   I used **Redux Toolkit** for managing authentication state and displaying data across components.
        
    *   I utilized **Redux Persist** to persist the authentication state, ensuring that the user stays logged in across page refreshes.
        
    *   I also used **Entity Adapter** to efficiently manage product data in the Redux store, making it easier to normalize and update the state.
        
6.  **Responsive Design with Tailwind CSS:**
    
    *   The application is fully responsive, thanks to **Tailwind CSS**, which I used to create a mobile-friendly interface. Tailwind allows for easy customization and quick development of responsive layouts.
        

Setup and Installation
----------------------

To set up the project locally, follow these steps:

1.  bashCopyEditgit clone
    
2.  bashCopyEditnpm install
    
3.  bashCopyEditnpm start
    
4.  bashCopyEditnpm run server
    

This will start the project and the server simultaneously.

Libraries and Tools Used:
-------------------------

*   **React.js** for the frontend framework.
    
*   **Redux Toolkit** for state management.
    
*   **Redux Persist** for persisting the authentication state.
    
*   **json-server** and **json-server-auth** for mocked API and authentication.
    
*   **Recharts** for data visualization (charts).
    
*   **Tailwind CSS** for responsive styling.
    
*   **DummyJSON** for dynamic product data.
