import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Alatujilabdetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  // 🔹 Data produk (bisa diganti ambil dari API nanti)
  const products = [
    {
      id: 1,
      name: "Soil Compaction Meter",
      category: "Alat Uji",
      image: "/images/Soil-Compaction-Meter.jpg",
      description: `
Soil Compaction Tester atau Alat ukur kepadatan tanah brand DICKEY-john ini menggunakan tiang dan rod berbahan stainless steel. Tongkat sensor tersebut ditandai ukuran kedalaman dalam inchi : 3”, 6”, 9”, 12”, 15”, 18″.
Soil Compaction Tester atau Alat Ukur Kepadatan Tanah merupakan alat ukur yang digunakan untuk menguji tingkat kepadatan lapisan tanah, untuk membantu didalam proyek bangunan, gedung, jembatan, jalan umum dan proyek konstruksi lainnya.
Ketika tiang dimasukkan ke dalam tanah, maka jarum penunjuk hasil akan menunjukkan hasil pengukuran dalam bentuk skala jarum. Hasil pengukuran terdiri dari 3 level, yaitu 0-200 psi, 200-300 psi, dan > 300 psi, ketiganya dibedakan berdasarkan kode warna pada jarum ukur.
Penguji pemadatan tanah harus digunakan sebelum mengolah untuk memverifikasi apakah ada lapisan pemadatan, mengidentifikasi seberapa dalam lapisan pemadatan dan untuk mengidentifikasi seberapa dalam tanah sebenarnya bekerja.
Instrumen ini dilengkapi dengan dua tip:
1. Size 1/2 untuk digunakan di tanah yang keras
2. Size 3/4 untuk digunakan di tanah lunak
      `,
    },

    {
      id: 2,
      name: "UV VIS Spectrophotometer AE S60 2U",
      category: "Alat Uji",
      image: "/images/UV-VIS-Spectrophotometer-AE-S60-2U.jpg",
      description: `
Instrumen ini adalah instrumen single beam, tujuan umum yang dirancang untuk memenuhi kebutuhan laboratorium konvensional. Instrumen ini ideal untuk berbagai aplikasi seperti Chemistry, Biochemistry, Enviromental Protection, Food and Beverage Labs, Water and Waste Water Labs, serta bidang lainnya dalam pengendalian kualitas dan penelitian.
Instrumen ini dilengkapi dengan layar LCD matriks 128 x 64 titik untuk hasil fotometrik, operasi yang mudah, dan panjang gelombang 200nm hingga 1000 nm. Instrumen ini ideal untuk pengukuran dalam wilayah panjang gelombang terlihat dan ultraviolet dari spektrum elektromagnetik.

Spesifikasi :
Wavelength Range : 190-1000nm
Band Width : 2nm
Wavelength Accuracy : ±1nm
Wavelength Repeatability : 0,5nm
Wavelength Setting : Auto
Photometric Accuracy : ±0.5% T
Photometric Repeatability : 0.3% T
Photometric Display Range : 0-200%T, -0.3-3.0A, 0-9999C
Stability : 0.002A/h @500nm
Stray Light : ≤0.3 % T @220nm, 360 nm
Data Output Port : USB
Printer Port : Parallel Port
Display : 128*64 Dots LCD
Lamps : Deuterium Lamp & Tungsten Halogen Lamp
Detector : Silicon Photodiode
Power Requirment : AC 85-250 V
Dimension (L*W*H) : 420*280*180mm
Weight : 11 kg
      `,
    },
    {
      id: 3,
      name: "Hydrometer Analysis Test Set",
      category: "Alat Uji",
      image: "/images/Hydrometer-Analysis-Test-Set-2.jpg",
      description: `
Hydrometer Analysis Test Set digunakan bersama dengan analisis saringan standar pada tanah berbutir halus dengan berbagai ukuran partikel untuk menghasilkan kurva gradasi yang lengkap. Ini juga digunakan untuk mengevaluasi sedimentasi atau halusnya tanah tertentu secara lebih akurat.

– ASTM D-422 / AASHTO T-88
Consist of :
* 150.1 Hydrometer A – 152 H (Glass, stream line, range 0 – 60 gr soil/ltr : 1pc
* 150.2 Hydrometer B – 151 H (Glass, stream line, range 0.995-1.038) 1 pc
* 150.3 Mechanical Stirer (Electric, 220 volt, cast alumunium frame, 10.000 rpm) : 1pc
* 150.4 Dispersion Cup (Stainless steel, brass baffles) : 1pc
– Hydrometer Jar Bath (Steel sheet, fibre glass couted, temperature control)
Consist of :
* 150.5 Bath (Steel sheet, fibre glass coated, 60 x 30 x 40 cm) : 1pc
* 150.6 Water Heater (Electric, range ambient to 60 deg. C) : 1pc
– Dispension Agent
Consist of :
* 150.7 Sodium Hexa (Bottled, powder) : 1kg
* 150.8 Water Glass (Bottled, liquid) : 1kg
* 150.9 Hydrometer Jar (Glass, 1000 ml capacity) : 3pcs
* GE-405 Graduated Cylinder (1000 ml capacity) : 1pc
* GE-600 Thermometer (Range 0 – 50 deg.C) : 1pc
– Dimension ( l x w x h) : 90 x 50 x 50 cm
– Gross Weight : 50 kg
      `,
    },    

  ]

  const product = products.find((p) => p.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Produk Tidak Ditemukan</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Kembali ke Daftar Produk
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-6">{product.category}</p>

          <div
            className="text-gray-700 leading-relaxed text-justify whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: product.description.replace(/\n/g, "<br/>") }}
          />

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 rounded-md border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              ← Kembali ke Daftar Produk
            </button>

            <a
              href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(
                product.name
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
