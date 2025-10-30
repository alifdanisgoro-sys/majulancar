export default function Kontak() {
  return (
    <section className="p-8 text-center bg-gradient-to-b from-gray-100 to-white animate-fade-slide">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Hubungi Kami</h2>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Nama" className="p-3 border rounded-md" />
        <input type="email" placeholder="Email" className="p-3 border rounded-md" />
        <textarea placeholder="Pesan" className="p-3 border rounded-md h-32"></textarea>
        <button type="button" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Kirim Pesan
        </button>
      </form>
    </section>
  )
}
