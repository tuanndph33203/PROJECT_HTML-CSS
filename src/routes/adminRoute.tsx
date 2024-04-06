import { Route, Routes } from 'react-router-dom';
import Preloader from '@/views/admin/components/ui/Header';
import Statistical from '@/views/admin/Home/Statistical';
import ProductDetail from '@/views/admin/Product/ProductDetail';
import ProductCreate from '@/views/admin/Product/ProductCreate';
import AdminAuthMiddleware from '@/middelwares/authenticate';
import Sidebar from '@/views/admin/components/ui/Sidebar';
import { useState } from 'react';

function Admin() {
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);
  console.log(sidebarToggle);
  
  return (
    <AdminAuthMiddleware>
      <Preloader setSidebar={setSidebarToggle} sidebar={sidebarToggle}></Preloader>
      <div className="relative">
        <Sidebar sidebar={sidebarToggle}></Sidebar>
        <Routes>
          <Route path='/' element={<Statistical />} />
          <Route path='/product/:slug' element={<ProductDetail />} />
          <Route path='/product/create' element={<ProductCreate />} />
        </Routes>
      </div>
    </AdminAuthMiddleware>
  );
}

export default Admin;
