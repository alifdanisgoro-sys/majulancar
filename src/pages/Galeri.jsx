import { Link } from "react-router-dom"

export default function Galeri() {
  const galeriList = [
    {
      id: 1,
      name: "Mesin Rotary Mixer",
      image: `${import.meta.env.BASE_URL}images/Mesin-Rotary-Mixer.jpg`,
      description: "Mesin pencampur bahan pertanian dan industri dengan kapasitas besar dan sistem rotasi efisien.",
    },
    {
      id: 2,
      name: "Mesin Mixer Clay",
      image: `${import.meta.env.BASE_URL}images/Mesin-Mixer-Clay.jpg`,
      description: "Mesin pengaduk tanah liat dengan sistem double screw agitator untuk hasil homogen dan cepat.",
    },
    {
      id: 3,
      name: "Mesin Pengayak Getar",
      image: `${import.meta.env.BASE_URL}images/Mesin-Pengayak-Tipe-Getar.jpg`,
      description: "Mesin penyaring untuk memilah ukuran bahan seperti pupuk, pasir, dan tepung dengan sistem getar.",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
          Galeri Produk
        </h1>

        {/* 🔹 Grid Galeri */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galeriList.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <Link to={`/galeri/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-4">
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
