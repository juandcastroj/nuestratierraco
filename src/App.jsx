import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeRoute from './pages/HomeRoute';
import ContactUsRoute from './pages/ContactUsRoute';
import ProjectsRoute from './pages/ProjectsRoute';
import StackRoute from './pages/StackRoute';

export default function App() {

  return (
    <BrowserRouter>
      <Header/>
      <main className="isolate">
        <Routes>
          <Route path='/' element={<HomeRoute/>}></Route>
          <Route path='/projects' element={<ProjectsRoute/>}></Route>
          <Route path='/stack' element={<StackRoute/>}></Route>
          <Route path='/contact' element={<ContactUsRoute/>}></Route>
          <Route path='*' element={<HomeRoute/>}></Route>
        </Routes>
        <Footer/>
      </main>
    </BrowserRouter>
  )
}
