import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeRoute from './routes/HomeRoute';

import ContactUsRoute from './routes/ContactUsRoute';
import ProjectsRoute from './routes/ProjectsRoute';
import ProductsRoute from './routes/ProductsRoute';
import InscriptionsRoute from './routes/InscriptionsRoute';
import BlogRoute from './routes/BlogRoute';
import StrategicLinesRoute from './routes/StrategicLinesRoute';
import AuthRoute from './routes/AuthRoute';
import ProfileRoute from './routes/ProfileRoute';
import PetCoinsInfoRoute from './routes/PetCoinsInfoRoute';

export default function App() {

  return (
    <BrowserRouter>
      <Header/>
        <main className="isolate">
          <Routes>
            <Route path='/' element={<HomeRoute/>}></Route>

            <Route path='/auth' element={<AuthRoute/>}></Route>
            <Route path='/mi-cuenta' element={<ProfileRoute/>}></Route>

            <Route path='/proyectos' element={<ProjectsRoute/>}></Route>
            <Route path='/lineas-estrategicas' element={<StrategicLinesRoute/>}></Route>
            <Route path='/tienda' element={<ProductsRoute/>}></Route>
            <Route path='/blog' element={<BlogRoute/>}></Route>
            <Route path='/embajadores' element={<InscriptionsRoute/>}></Route>
            <Route path='/contacto' element={<ContactUsRoute/>}></Route>
            <Route path='/petcoins' element={<PetCoinsInfoRoute/>}></Route>

            <Route path='*' element={<HomeRoute/>}></Route>
          </Routes>
        </main>
      <Footer/>
    </BrowserRouter>
  )
}
