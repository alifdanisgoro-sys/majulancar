import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Alatujilab() {
  const navigate = useNavigate()

  // 🔹 Data produk (bisa kamu tambah)
  const products = [
    { id: 1, name: "Soil Compaction Meter", category: "Alat Uji", image: `${import.meta.env.BASE_URL}images/Soil-Compaction-Meter.jpg` },
    { id: 2, name: "UV VIS Spectrophotometer AE S60 2U", category: "Alat Uji", image: `${import.meta.env.BASE_URL}images/UV-VIS-Spectrophotometer-AE-S60-2U.jpg` },
    { id: 3, name: "Hydrometer Analysis Test Set", category: "Alat Uji", image: `${import.meta.env.BASE_URL}images/Hydrometer-Analysis-Test-Set-2.jpg` },
  ]

  // 🔹 State
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [sortOption, setSortOption] = useState("default")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // 🔹 Ambil kategori unik
  const categories = ["Semua", ...new Set(products.map((p) => p.category))]

  // 🔹 Filter produk berdasarkan pencarian & kategori
  let filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory === "Semua" || product.category === selectedCategory
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  // 🔹 Urutkan produk (sorting)
  if (sortOption === "az") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortOption === "za") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
  } else if (sortOption === "kategori") {
    filteredProducts.sort((a, b) => a.category.localeCompare(b.category))
  }

  // 🔹 Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem)

  // 🔹 Fungsi ganti halaman
  const goToPage = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      {/* Judul */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Daftar Produk Kami</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Temukan produk-produk unggulan kami di sini.
        </p>
      </div>

      {/* 🔍 Pencarian, Filter, dan Sorting */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 mb-10">
        {/* Input pencarian */}
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPage(1)
          }}
          className="w-full md:w-1/3 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
        />

        {/* Dropdown kategori */}
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value)
            setCurrentPage(1)
          }}
          className="w-full md:w-1/4 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Dropdown sorting */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full md:w-1/4 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
        >
          <option value="default">Urutkan: Default</option>
          <option value="az">Nama (A - Z)</option>
          <option value="za">Nama (Z - A)</option>
          <option value="kategori">Berdasarkan Kategori</option>
        </select>
      </div>

      {/* 🔹 Daftar produk */}
      {currentProducts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/alatujilab/${product.id}`)}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <span className="text-sm font-semibold text-gray-500">{product.category}</span>
                <h2 className="text-xl font-bold text-blue-700">{product.name}</h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-8">❌ Produk tidak ditemukan.</p>
      )}

      {/* 🔸 Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`px-4 py-2 rounded-md font-semibold border ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50"
              } transition-all duration-300`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
