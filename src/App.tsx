// Trong App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Client from './routes/clientRoute';
import Admin from './routes/adminRoute';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}/>
      <Routes>
        <Route path='/*' element={<Client />} />
        <Route path='/admin/*' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
