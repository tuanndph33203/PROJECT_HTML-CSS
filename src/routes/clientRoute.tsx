import { Route, Routes } from 'react-router-dom';
import User from '@/views/client/components/User';
import { Header, Footer, Banner, Services } from '@/views/client/components/index';
import { useState } from 'react';
import Home from '@/views/client/Home/Home';
import Cart from '@/views/client/Cart/Cart';
import Checkout from '@/views/client/Checkout/Checkout';
import Product from '@/views/client/Product/Product';
import Shop from '@/views/client/Shop/Shop';

function Client() {
  const [active, setActive] = useState<Boolean>(false);
  const [menu, setMenu] = useState<Boolean>(false);

  window.addEventListener('resize',function () {
    if (window.innerWidth > 992) {
      setMenu(false)
    }
  })
  return (
    <>
      <Header login={setActive} setMenu={setMenu} menu={menu}></Header>
      <Banner></Banner>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/product/:tag' element={<Product />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      <Services></Services>
      {/*End .services*/}
      <Footer></Footer>
      <User login={setActive} active={active}></User>
    </>
  )
}

export default Client;
