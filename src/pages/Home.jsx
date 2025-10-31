import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CheckCircle, Cpu, ThumbsUp, Users, X, MapPin, Phone, Mail } from "lucide-react"

export default function Home() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [visibleSections, setVisibleSections] = useState({})
 const images = [
  `${import.meta.env.BASE_URL}images/W1.jpg`,
  `${import.meta.env.BASE_URL}images/W2.jpg`,
  `${import.meta.env.BASE_URL}images/W3.jpg`,
  `${import.meta.env.BASE_URL}images/W4.jpg`,
  `${import.meta.env.BASE_URL}images/W5.jpg`,
];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const aboutRef = useRef(null)
  const keunggulanRef = useRef(null)
  const galeriRef = useRef(null)
  const kontakRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.2 }
    )

    if (aboutRef.current) observer.observe(aboutRef.current)
    if (keunggulanRef.current) observer.observe(keunggulanRef.current)
    if (galeriRef.current) observer.observe(galeriRef.current)
    if (kontakRef.current) observer.observe(kontakRef.current)

    return () => observer.disconnect()
  }, [])

  const gallery = [
    {
      id: 1,
      name: "Mesin Rotary Mixer",
      image: `${import.meta.env.BASE_URL}images/Mesin-Rotary-Mixer.jpg`,
      desc: "Mesin industri untuk mencampur bahan padat dan cair dengan sistem rotasi drum.",
    },
    {
      id: 2,
      name: "Mesin Mixer Clay",
      image: `${import.meta.env.BASE_URL}images/Mesin-Mixer-Clay.jpg`,
      desc: "Dirancang untuk mencampur tanah liat agar homogen, cocok untuk industri bata dan keramik.",
    },
    {
      id: 3,
      name: "Mesin Pengayak Getar",
      image: `${import.meta.env.BASE_URL}images/Mesin-Pengayak-Tipe-Getar.jpg`,
      desc: "Memisahkan ukuran partikel bahan seperti pupuk, tepung, atau pasir halus.",
    },
    {
      id: 4,
      name: "Mesin Hydroseeding",
      image: `${import.meta.env.BASE_URL}images/Mesin-Hydroseeding-2.jpg`,
      desc: "Alat penyemprot benih rumput untuk reklamasi lahan dan penghijauan cepat.",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-gray-200 to-white min-h-screen h-80">
      {/* === HERO SLIDER === */}
      <div className="max-w-5xl mx-auto relative md:h-[68vh] flex justify-center items-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className={`max-h-[68vh] md:max-h-[80vh] w-auto object-contain object-center mx-auto rounded-none transition-transform duration-[4000ms] ${
                index === current ? "scale-100" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <div className="bg-blue-600 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl animate-fade-slide">
            <h1 className="text-5xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
              PT Maju Lancar Barokah
            </h1>
            <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
              Produsen alat dan mesin industri, pertanian, serta konstruksi terpercaya di Indonesia.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/mesin-pertanian"
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                🔍 Lihat Produk
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-blue-700 transition-all duration-300"
              >
                💬 Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* === TENTANG KAMI === */}
      <div
        id="about"
        ref={aboutRef}
        className={`max-w-4xl mx-auto px-6 py-16 text-grey-700 text-justify leading-relaxed space-y-4 transition-all duration-700 ${
          visibleSections.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">Tentang Kami</h2>
        <p>
          <strong>PT Maju Lancar Barokah (MALABAR)</strong> merupakan perusahaan manufaktur yang bergerak di bidang produksi alat dan mesin industri dengan fokus pada mesin pertanian dan alat konstruksi.
        Kami menyediakan dan memproduksi alat-alat/mesin dengan fokus utama pada produksi alat-alat atau mesin pertanian, mesin jalan, alat uji laboratorium dan lain lainnya.
 Menghasilkan produk alat-alat/mesin berkualitas tinggi yang sesuai dengan standar nasional dan internasional, mengutamakan kepuasan pelanggan melalui pelayanan yang cepat, tepat, dan terpercaya, mengembangkan sumber daya manusia yang kompeten dan berintegritas, dan mendorong inovasi dan penggunaan teknologi modern dalam setiap proses produksi
        </p>
      </div>

      {/* === KEUNGGULAN === */}
      <div
        id="keunggulan"
        ref={keunggulanRef}
        className="bg-gray-50 py-20"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Keunggulan Kami</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {[ 
            { icon: <CheckCircle className="mx-auto text-blue-600 w-12 h-12 mb-4" />, title: "Kualitas Terjamin", desc: "Produk dibuat dengan standar tinggi untuk daya tahan maksimal." },
            { icon: <Cpu className="mx-auto text-blue-600 w-12 h-12 mb-4" />, title: "Inovasi Teknologi", desc: "Kami terus berinovasi dalam teknologi industri." },
            { icon: <ThumbsUp className="mx-auto text-blue-600 w-12 h-12 mb-4" />, title: "Pelayanan Terbaik", desc: "Pelayanan cepat, profesional, dan ramah pelanggan." },
            { icon: <Users className="mx-auto text-blue-600 w-12 h-12 mb-4" />, title: "SDM Kompeten", desc: "Didukung oleh tenaga ahli berpengalaman." }
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-700 ${
                visibleSections.keunggulan ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {item.icon}
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* === Best Seller === */}
      <div
        id="galeri"
        ref={galeriRef}
        className="py-20 bg-white"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Best Seller</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {gallery.map((item, i) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className={`relative cursor-pointer group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition transform duration-700 ${
                visibleSections.galeri ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === HUBUNGI KAMI === */}
      <div
        id="kontak"
        ref={kontakRef}
        className="bg-blue-50 py-20"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Hubungi Kami</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center">
          {/* FORM KONTAK */}
          <form className={`bg-white p-8 rounded-xl shadow-lg space-y-4 transition-all duration-700 ${
            visibleSections.kontak ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <input type="text" placeholder="Nama Anda" className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"/>
            <input type="email" placeholder="Email Anda" className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"/>
            <textarea placeholder="Pesan Anda" rows="4" className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"/>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300 w-full">Kirim Pesan</button>
          </form>

          {/* INFO & MAP */}
          <div className={`space-y-6 transition-all duration-700 ${
            visibleSections.kontak ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <p>Jl. Raya Bogor No. 123, Kota Bogor, Jawa Barat</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <p>+62 812 3456 7890</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <p>info@malabar.co.id</p>
            </div>

            <iframe
              title="Lokasi PT Maju Lancar Barokah"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.349259235066!2d106.82250497499647!3d-6.216932560995514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3fda6b68a4b%3A0x8af0c5b90cbfb94f!2sBogor!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md border border-gray-300"
            ></iframe>
          </div>
        </div>
      </div>

      {/* === MODAL PRODUK === */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-6 animate-fade-in">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full relative p-6">
            <button onClick={() => setSelected(null)} className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition">
              <X size={28} />
            </button>
            <img src={selected.image} alt={selected.name} className="w-full h-72 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-bold text-blue-700 mb-2">{selected.name}</h3>
            <p className="text-gray-700 text-justify mb-6">{selected.desc}</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => navigate(`/produk/${selected.id}`)} className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300">
                🔍 Lihat Detail Produk
              </button>
              <button onClick={() => setSelected(null)} className="border border-gray-400 text-gray-600 px-5 py-2 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300">
                ✕ Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
