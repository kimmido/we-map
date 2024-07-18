import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import SearchBar from './pages/SearchBar';

// 페이지 이동
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      // loader: ,
      children: [
        {
          path: "team",
          element: <SearchBar />,
          // loader: teamLoader,
        },
      ],
    },
  ]);
