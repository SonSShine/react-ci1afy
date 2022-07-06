import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import Layout from './Components/Layout';

// import Products from './Products/Products';
import Svice from './SV/Servide';
import Baohanh from './SV/Baohanh';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Svice />} />
          <Route path="/baohanh" element={<Baohanh />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
