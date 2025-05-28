import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeRoute from './pages/HomeRoute';
import ContactUsRoute from './pages/ContactUsRoute';
import ProjectsRoute from './pages/ProjectsRoute';
import StackRoute from './pages/StackRoute';
import LoginRoute from './pages/LoginRoute';
import Inscriptions from './components/Inscriptions';
import BlogRoute from './pages/BlogRoute';

export default function App() {

  return (
    <BrowserRouter>
      <Header/>
        <main className="isolate">
          <Routes>
            <Route path='/' element={<HomeRoute/>}></Route>
            <Route path='/login' element={<LoginRoute/>}></Route>
            <Route path='/projects' element={<ProjectsRoute/>}></Route>
            <Route path='/stack' element={<StackRoute/>}></Route>
            <Route path='/blog' element={<BlogRoute/>}></Route>
            <Route path='/Inscriptions' element={<Inscriptions/>}></Route>
            <Route path='/contact' element={<ContactUsRoute/>}></Route>
            <Route path='*' element={<HomeRoute/>}></Route>
          </Routes>
        </main>
      <Footer/>
    </BrowserRouter>
  )
}
