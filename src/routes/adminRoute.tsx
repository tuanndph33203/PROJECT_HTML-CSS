import { Route, Routes } from 'react-router-dom';
import Preloader from '@/views/admin/components/Header';
import Statistical from '@/views/admin/Home/Statistical';
import ProductDetail from '@/views/admin/Product/ProductDetail';
import ProductCreate from '@/views/admin/Product/ProductCreate';

function Admin() {
  return (
    <>
      <Preloader></Preloader>
      <Routes>
        <Route path='/' element={<Statistical />} />
        <Route path='/product/:tag' element={<ProductDetail />} />
        <Route path='/product/create' element={<ProductCreate />} />
      </Routes>
    </>
  );
}

export default Admin;
