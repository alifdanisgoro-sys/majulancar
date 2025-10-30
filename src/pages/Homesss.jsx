{/* 🔹 Hero Section Responsif */}
<div className="relative w-full bg-gray-100 overflow-hidden">
  <div className="max-w-6xl mx-auto relative h-[60vh] md:h-[80vh] flex justify-center items-center">
    {images.map((img, index) => (
      <div
        key={index}
        className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ${
          index === current ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        {/* 🔸 Gambar tidak melebar, tetap proporsional */}
        <img
          src={img}
          alt={`Slide ${index + 1}`}
          className={`max-h-[60vh] md:max-h-[80vh] w-auto object-contain object-center mx-auto rounded-none transition-transform duration-[3000ms] ${
            index === current ? "scale-105" : "scale-100"
          }`}
        />

        {/* 🔸 Lapisan gelap transparan agar teks tetap jelas */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    ))}

    {/* 🔸 Teks Overlay (Blur kaca transparan) */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-6 md:p-10 max-w-2xl animate-fade-slide">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          PT Maju Lancar Barokah
        </h1>
        <p className="text-white text-base md:text-lg leading-relaxed mb-6">
          Produsen alat dan mesin industri, pertanian, dan konstruksi terpercaya di Indonesia.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
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

    {/* 🔸 Tombol Navigasi Kiri–Kanan */}
    <button
      onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
      className="absolute left-3 md:left-5 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-gray-800 font-bold rounded-full p-2 md:p-3 transition"
    >
      ‹
    </button>
    <button
      onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
      className="absolute right-3 md:right-5 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 text-gray-800 font-bold rounded-full p-2 md:p-3 transition"
    >
      ›
    </button>

    {/* 🔹 Indikator Bulat */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
      {images.map((_, index) => (
        <span
          key={index}
          onClick={() => setCurrent(index)}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            index === current ? "bg-white" : "bg-gray-400/70"
          }`}
        ></span>
      ))}
    </div>
  </div>
</div>
