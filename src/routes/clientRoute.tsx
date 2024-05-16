import { Route, Routes } from 'react-router-dom';
import User from '@/views/client/components/User/User';
import { Header, Footer, Banner, Services } from '@/views/client/components/ui/index';
import { useState } from 'react';
import Home from '@/views/client/Home/Home';
import Cart from '@/views/client/Cart/Cart';
import Checkout from '@/views/client/Checkout/Checkout';
import Product from '@/views/client/Product/Product';
import Shop from '@/views/client/Shop/Shop';
import Purchase from '@/views/client/Purchase/Purchase';

function Client() {
  const [active, setActive] = useState<Boolean>(false);
  const [menu, setMenu] = useState<Boolean>(false);
  const [page, setPage] = useState<string>('');
  const [orders, setOrders] = useState<{}[]>([]);
  window.addEventListener('resize',function () {
    if (window.innerWidth > 992) {
      setMenu(false)
    }
  })
  return (
    <>
      <Header login={setActive} setMenu={setMenu} menu={menu}></Header>
      <Banner page={page}></Banner>
      <Routes>
        <Route path='/' element={<Home setPage={setPage} />} />
        <Route path='/cart' element={<Cart setPage={setPage} setOrders={setOrders} />} />
        <Route path='/checkout' element={<Checkout setPage={setPage} orders={orders} />} />
        <Route path='/product/:slug' element={<Product setPage={setPage} setOrders={setOrders}  />} />
        <Route path='/shop' element={<Shop setPage={setPage} />} />
        <Route path='/purchase/*' element={<Purchase setPage={setPage} />} />
      </Routes>
      <Services></Services>
      {/*End .services*/}
      <Footer></Footer>
      <User login={setActive} active={active}></User>
    </>
  )
}

export default Client;
