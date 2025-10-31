import { Link } from "react-router-dom"

export default function Berita() {
  const beritaList = [
    {
      id: 1,
      title: "PT Maju Lancar Barokah Luncurkan Mesin Rotary Mixer Terbaru",
      date: "20 Oktober 2025",
      image: `${import.meta.env.BASE_URL}images/Mesin-Rotary-Mixer.jpg`,
      excerpt:
        "PT Maju Lancar Barokah resmi meluncurkan produk unggulan mesin Rotary Mixer generasi terbaru dengan efisiensi pencampuran yang meningkat hingga 20%...",
    },
    {
      id: 2,
      title: "Inovasi Teknologi Mesin Pertanian Ramah Lingkungan",
      date: "10 September 2025",
      image: `${import.meta.env.BASE_URL}images/Q1.jpg`,
      excerpt:
        "Perusahaan kembali menghadirkan inovasi mesin pertanian yang ramah lingkungan dengan material stainless steel food-grade dan sistem hemat energi...",
    },
    {
      id: 3,
      title: "Kerjasama Strategis dengan BUMN dalam Produksi Mesin Konstruksi",
      date: "15 Agustus 2025",
      image: `${import.meta.env.BASE_URL}images/Q2.jpg`,
      excerpt:
        "PT Maju Lancar Barokah menjalin kemitraan strategis dengan salah satu BUMN untuk memperkuat produksi mesin konstruksi nasional...",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
          Berita & Artikel
        </h1>

        {/* 🔹 Grid Berita */}
        <div className="grid md:grid-cols-3 gap-8">
          {beritaList.map((berita) => (
            <div
              key={berita.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={berita.image}
                alt={berita.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-blue-700 mb-2 line-clamp-2">
                    {berita.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">{berita.date}</p>
                  <p className="text-gray-700 text-justify line-clamp-3">
                    {berita.excerpt}
                  </p>
                </div>
                <Link
                  to={`/berita/${berita.id}`}
                  className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
