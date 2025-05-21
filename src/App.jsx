import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home';
import ContactUsRoute from './pages/contact_us';
import ProjectsRoute from './pages/projects';
import StackRoute from './pages/stack';

export default function App() {

  return (
    <BrowserRouter>
      <Header/>
      <main className="isolate">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contact' element={<ContactUsRoute/>}></Route>
          <Route path='/projects' element={<ProjectsRoute/>}></Route>
          <Route path='/stack' element={<StackRoute/>}></Route>
          <Route path='*' element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </main>
    </BrowserRouter>
  )
}
