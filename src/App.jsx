import { Routes, Route } from 'react-router-dom';
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
import PetCoinsInfoRoute from './routes/PetCoinsInfoRoute';
import EmailSentRoute from './routes/EmailSentRoute';
import TeamRoute from './routes/TeamRoute';
import ProfileRoute from './routes/ProfileRoute';
import VerifyEmailRoute from './routes/VerifyEmailRoute';
import { PrivateRoute } from './routes/private-routes/PrivateRoute';

export default function App() {

  return (
    <>
      <Header/>
          <Routes>
            <Route path='/' element={<HomeRoute/>}></Route>
            <Route path='/proyectos' element={<ProjectsRoute/>}></Route>
            <Route path='/lineas-estrategicas' element={<StrategicLinesRoute/>}></Route>
            <Route path='/equipo' element={<TeamRoute/>}></Route>
            <Route path='/productos' element={<ProductsRoute/>}></Route>
            <Route path='/blog' element={<BlogRoute/>}></Route>
            <Route path='/embajadores' element={<InscriptionsRoute/>}></Route>
            <Route path='/contacto' element={<ContactUsRoute/>}></Route>
            <Route path='/petcoins' element={<PetCoinsInfoRoute/>}></Route>
            <Route path='/email-sent' element={<EmailSentRoute/>}></Route>

            {/* 🔑 Página de auth (pública): si ya está logueado lo mando fuera) */}
            <Route
              path="/auth"
              element={
                <PrivateRoute requireAuth={false}>
                  <AuthRoute />
                </PrivateRoute>
              }
            />

            {/* 📩 Página de verificación — solo para usuarios logueados Y NO verificados */}
            <Route
              path="/verify-email"
              element={
                <PrivateRoute requireAuth={true} onlyWhenNotVerified={true}>
                  <VerifyEmailRoute />
                </PrivateRoute>
              }
            />

            {/* 👤 Perfil: requiere login y correo verificado */}
            <Route
              path="/mi-cuenta"
              element={
                <PrivateRoute requireAuth={true} requireVerified={true}>
                  <ProfileRoute />
                </PrivateRoute>
              }
            />

            <Route path='*' element={<HomeRoute/>}></Route>
          </Routes>
      <Footer/>
    </>
  )
}
