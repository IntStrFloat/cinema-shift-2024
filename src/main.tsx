import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Afisha } from './pages/Afisha/Afisha.tsx';
import { Layout } from './layouts/Layout/Layout.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Afisha />,
      },
    ],
  },
]);
//     {
//       path: '/cart',
//       element: <Cart />,
//     },
//     {
//       path: '/product/:id',
//       element: <ProductPage />,
//       errorElement: <>Ошибка</>,
//       loader: async ({ params }) => {
//         const { data } = await axios.get(`${DOMEN}/products/${params.id}`);
//         return data;
//       },
//     },
//   ],
// },
// {
//   path: '/auth',
//   element: <AuthLoyuot />,
//   children: [
//     {
//       path: 'login',
//       element: <Login />,
//     },
//     {
//       path: 'register',
//       element: <Register />,
//     },
//   ],
// },
// {
//   path: '*',
//   element: <Error />,
// },
// ]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
