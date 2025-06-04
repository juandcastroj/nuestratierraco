import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeRoute from './routes/HomeRoute';
import ContactUsRoute from './routes/ContactUsRoute';
import ProjectsRoute from './routes/ProjectsRoute';
import ProductsRoute from './routes/ProductsRoute';
import InscriptionsRoute from './routes/InscriptionsRoute';
import LoginRoute from './routes/LoginRoute';
import BlogRoute from './routes/BlogRoute';
import RegisterRoute from './routes/RegisterRoute';

export default function App() {

  return (
    <BrowserRouter>
      <Header/>
        <main className="isolate">
          <Routes>
            <Route path='/' element={<HomeRoute/>}></Route>
            <Route path='/login' element={<LoginRoute/>}></Route>
            <Route path='/register' element={<RegisterRoute/>}></Route>
            <Route path='/projects' element={<ProjectsRoute/>}></Route>
            <Route path='/stack' element={<ProductsRoute/>}></Route>
            <Route path='/blog' element={<BlogRoute/>}></Route>
            <Route path='/inscriptions' element={<InscriptionsRoute/>}></Route>
            <Route path='/contact' element={<ContactUsRoute/>}></Route>
            <Route path='*' element={<HomeRoute/>}></Route>
          </Routes>
        </main>
      <Footer/>
    </BrowserRouter>
  )
}
