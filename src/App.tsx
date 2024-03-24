// Trong App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Client from './routes/clientRoute';
import Admin from './routes/adminRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Client />} />
        <Route path='/admin/*' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
