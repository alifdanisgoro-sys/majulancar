import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Produk from './pages/Produk'
import Berita from './pages/Berita'
import Kontak from './pages/Kontak'
import Mesinpertanian from './pages/Mesinpertanian'
import Mesinjalan from './pages/Mesinjalan'
import Alatujilab from './pages/Alatujilab'
import Mesinpertaniandetail from './pages/Mesinpertaniandetail'
import Mesinjalandetail from './pages/Mesinjalandetail'
import BeritaDetail from './pages/BeritaDetail'
import Alatujilabdetail from './pages/Alatujilabdetail'
import Galeri from './pages/Galeri'
import GaleriDetail from './pages/GaleriDetail'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" />
            <Route path="/mesinpertanian" element={<Mesinpertanian />} />   
              <Route path="/mesinpertanian/:id" element={<Mesinpertaniandetail />} />                    
            <Route path="/mesinjalan" element={<Mesinjalan/>} /> 
              <Route path="/mesinjalan/:id" element={<Mesinjalandetail />} />                                        
            <Route path="/alatujilab" element={<Alatujilab />} />         
              <Route path="/alatujilab/:id" element={<Alatujilabdetail />} />                                        
          <Route path="/berita" element={<Berita />} />
            <Route path="/berita/:id" element={<BeritaDetail />} />
          <Route path="/galeri" element={<Galeri />} />
            <Route path="/galeri/:id" element={<GaleriDetail />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>        
            />
      </div>
    </>
  )
}
