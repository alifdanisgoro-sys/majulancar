import { useParams, useNavigate } from "react-router-dom"

export default function BeritaDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const beritaData = {
    1: {
      title: "PT Maju Lancar Barokah Luncurkan Mesin Rotary Mixer Terbaru",
      date: "20 Oktober 2025",
      image: "/images/Mesin-Rotary-Mixer.jpg",
      content: `
PT Maju Lancar Barokah kembali menghadirkan inovasi terbaru dalam dunia mesin industri, yaitu **Mesin Rotary Mixer Generasi 2025**. Produk ini dirancang dengan sistem rotasi efisien dan teknologi inverter yang mampu menghemat energi hingga 15%.

Mesin ini ditujukan bagi sektor pertanian dan industri pengolahan makanan, dengan fokus utama pada proses pencampuran bahan secara homogen tanpa merusak struktur komponen.

Keunggulan:
- Efisiensi tinggi dengan kapasitas 1000 kg/batch
- Material food-grade tahan korosi
- Sistem kontrol inverter modern
- Desain modular mudah perawatan

Peluncuran resmi dilakukan di pabrik utama Bogor dan dihadiri oleh mitra bisnis dari seluruh Indonesia. Direktur utama menyampaikan komitmen perusahaan untuk terus berinovasi demi mendukung industri nasional.`,
    },
    2: {
      title: "Inovasi Teknologi Mesin Pertanian Ramah Lingkungan",
      date: "10 September 2025",
      image: "/images/Q1.jpg",
      content: `
PT Maju Lancar Barokah terus berkomitmen menghadirkan solusi pertanian yang ramah lingkungan. Melalui riset intensif, perusahaan berhasil menciptakan sistem pencampuran berbasis tenaga rendah namun hasil tetap maksimal.

Inovasi ini merupakan langkah nyata mendukung *green technology* di sektor pertanian Indonesia.`,
    },
    3: {
      title: "Kerjasama Strategis dengan BUMN dalam Produksi Mesin Konstruksi",
      date: "15 Agustus 2025",
      image: "/images/Q2.jpg",
      content: `
Dalam rangka memperkuat industri manufaktur dalam negeri, PT Maju Lancar Barokah resmi menandatangani kerjasama strategis dengan salah satu BUMN untuk memproduksi mesin konstruksi berskala besar.

Kerjasama ini mencakup pengembangan teknologi, distribusi nasional, dan pelatihan tenaga kerja terampil.`,
    },
  }

  const berita = beritaData[id]

  if (!berita) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Artikel Tidak Ditemukan
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Kembali
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src={berita.image}
          alt={berita.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">
            {berita.title}
          </h1>
          <p className="text-gray-500 mb-6">{berita.date}</p>
          <div
            className="text-gray-700 leading-relaxed text-justify whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: berita.content.replace(/\n/g, "<br/>") }}
          />
          <div className="mt-10">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 rounded-md border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              ← Kembali ke Daftar Berita
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
