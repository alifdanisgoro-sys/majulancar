import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function GaleriDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const galeriData = {
    1: {
      name: "Mesin Rotary Mixer",
      image: `${import.meta.env.BASE_URL}images/Mesin-Rotary-Mixer.jpg`,
      description: `
Mesin rotary mixer digunakan untuk mencampur bahan pertanian atau industri secara merata melalui rotasi drum. 
Terbuat dari stainless steel 304, mesin ini higienis, tahan lama, dan mudah dioperasikan. 

**Spesifikasi Utama:**
- Kapasitas: 1000 Kg/batch  
- Penggerak: Gear Motor 10 HP  
- Material Drum: Stainless Steel 304  
- Rangka: UNP 120 (konstruksi kokoh)  
- Panel kontrol otomatis  
- Tinggi unit: ±3,5 meter  

Cocok untuk pakan ternak, pupuk, dan industri kimia.`,
    },
    2: {
      name: "Mesin Mixer Clay",
      image: `${import.meta.env.BASE_URL}images/Mesin-Mixer-Clay.jpg`,
      description: `
Mesin mixer clay berfungsi mencampur tanah liat secara merata menggunakan sistem Double Screw Agitator.

**Spesifikasi:**
- Dimensi: 2000 x 1500 x 2000 mm  
- Kapasitas: 4–5 ton/jam  
- Penggerak: Gear Reducer 10 HP  
- Sistem: Double Screw Agitator  

Cocok untuk pabrik bata, keramik, dan industri berbasis tanah liat.`,
    },
    3: {
      name: "Mesin Pengayak Getar",
      image: `${import.meta.env.BASE_URL}images/Mesin-Pengayak-Tipe-Getar.jpg`,
      description: `
Mesin pengayak tipe getar berfungsi memisahkan bahan berdasarkan ukuran.

**Spesifikasi:**
- Kapasitas: 300 kg/jam  
- Material rangka: Hollow 40  
- Material body: Plate SPHD 2mm  
- Penggerak: Motor 1 PK  

Digunakan pada industri pupuk, tepung, dan konstruksi.`,
    },
  }

  const produk = galeriData[id]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!produk) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Produk Tidak Ditemukan
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Kembali ke Galeri
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src={produk.image}
          alt={produk.name}
          className="w-full h-96 object-contain bg-gray-100"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">{produk.name}</h1>
          <div
            className="text-gray-700 leading-relaxed text-justify whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: produk.description.replace(/\n/g, "<br/>") }}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 rounded-md border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              ← Kembali ke Galeri
            </button>
            <a
              href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(
                produk.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition-all duration-300"
            >
              💬 Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
