import { Route, Routes } from 'react-router-dom';
import Product from '@/views/admin/Product/Product';
import Preloader from '@/views/admin/components/Header';
import Statistical from '@/views/admin/Home/Statistical';

function Admin() {
  return (
    <>
      <Preloader></Preloader>
      <Routes>
        <Route path='/' element={<Statistical/>} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </>
  );
}

export default Admin;
