import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Mesinpertaniandetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  // 🔹 Data produk (bisa diganti ambil dari API nanti)
  const products = [
    {
      id: 1,
      name: "Mesin Rotary Mixer",
      category: "Mesin Industri",
      image: `${import.meta.env.BASE_URL}images/Mesin-Rotary-Mixer.jpg`,
      description: `
Mesin rotary mixer adalah peralatan industri yang dirancang untuk mencampur berbagai jenis material, umumnya berbentuk bubuk, butiran (granul), atau padatan kering, secara merata (homogen) melalui sistem rotasi drum atau tabung pencampur.

**Cara Kerja Mesin Rotary Mixer**
Mesin ini bekerja dengan cara memutar tabung atau drum besar yang berisi bahan campuran. Proses rotasi menghasilkan pencampuran yang homogen tanpa merusak struktur bahan. Kecepatan dan arah putaran drum dikontrol melalui panel kontrol yang dilengkapi dengan inverter untuk pengaturan daya secara presisi.

**Spesifikasi Mesin Rotary Mixer**
- Material Drum Mixer : Plate Stainless Steel 304 (tahan karat dan higienis)
- Dimensi Tabung :
  - Panjang: 1800 mm
  - Diameter: 1500 mm
- Material Rangka : UNP 120 (konstruksi kokoh dan tahan lama)
- Penggerak : Gear Motor 10 HP + Inverter 7,5 kW (10 HP), 3 Phase
- Panel Kontrol : Include (pengaturan otomatis kecepatan dan arah putaran)
- Kapasitas : 1000 Kg per batch
- Include Plate Form : Memudahkan akses dan instalasi
- Tinggi Unit Rotary Mixer : ± 3,5 meter (disesuaikan dengan input mesin rotary dryer)

**Keunggulan Mesin Rotary Mixer**
- Efisiensi Pencampuran Tinggi : Mampu mencampur bahan dalam jumlah besar hingga 1000 kg dalam satu siklus.
- Material Tahan Lama dan Higienis : Menggunakan stainless steel food-grade pada bagian drum.
- Kontrol Fleksibel : Panel dengan inverter memudahkan pengaturan daya dan rotasi.
- Desain Modular dan Kuat : Struktur kokoh dengan material rangka UNP, serta disesuaikan untuk integrasi dengan mesin lain seperti rotary dryer.

**Aplikasi Mesin Rotary Mixer**
- Pakan Ternak : Mencampur bahan seperti jagung, bungkil, dedak, dan premix.
- Kimia dan Pupuk : Mencampur bubuk kimia, pupuk organik, atau kompos.
- Makanan dan Bumbu: Untuk pencampuran kering bahan pangan secara merata.
- Konstruksi: Pencampuran material ringan seperti pasir halus atau semen aditif.

**Tingkatkan Produktivitas Usaha Anda Sekarang Juga!**
Gunakan Mesin Rotary Mixer berkualitas tinggi ini untuk memaksimalkan hasil produksi Anda. Dengan kapasitas besar, material tahan lama, dan pengoperasian yang mudah, mesin ini adalah solusi cerdas bagi bisnis yang mengutamakan efisiensi dan kualitas.
      `,
    },

    {
      id: 2,
      name: "Mesin Mixer Clay",
      category: "Mesin Pertanian",
      image: `${import.meta.env.BASE_URL}images/Mesin-Mixer-Clay.jpg`,
      description: `
Mesin mixer clay adalah alat mekanis yang berfungsi untuk mengolah tanah liat dengan cara mencampur material tanah liat bersama air atau bahan aditif lainnya. Proses ini membuat tekstur clay menjadi lebih lentur, homogen, dan mudah dibentuk, sekaligus menghilangkan gelembung udara yang bisa mengganggu kualitas produk.
Spesifikasi Mesin Mixer Clay (Plant) — Type Double Mixer

| Komponen | Keterangan |
|———————–|————————————-|
| Material Rangka | UNP 120 |
| Material Body | Plate 3mm |
| Penggerak | Gear Reducer 10 HP, E.Motor 10 HP/3 Phase 380 V |
| Dimensi (P x L x T) | 2000 x 1500 x 2000 mm |
| Sistem | Double Screw Agitator |
| Kapasitas Produksi | 4–5 Ton/jam (continuous) |
| Keterangan Tambahan | Tidak termasuk ban set |
Mesin ini menggunakan sistem **Double Screw Agitator**, yang memastikan pencampuran tanah liat menjadi lebih merata dan efisien, sangat ideal untuk proses produksi berkesinambungan dengan kapasitas besar.

Kelebihan Menggunakan Mesin Mixer Clay
- Efisiensi Waktu : Proses pencampuran menjadi jauh lebih cepat dibandingkan metode manual.
- Kualitas Konsisten : Tanah liat yang dihasilkan memiliki tekstur dan kelembapan yang seragam.
- Meningkatkan Produksi: Cocok untuk kebutuhan produksi skala kecil hingga besar.
- Mengurangi Tenaga Kerja: Minim penggunaan tenaga manusia sehingga menghemat biaya operasional.
- Konstruksi Kuat: Dengan material UNP 120 dan plate 3mm, mesin tahan lama untuk pemakaian intensif.

Aplikasi Mesin Mixer Clay
- Industri pembuatan batu bata
- Pabrik keramik
- Pusat kerajinan tanah liat
- Studio seni dan workshop kerajinan
- Proyek konstruksi berbahan dasar tanah liat
Mesin Mixer Clay Type Double Mixer adalah pilihan yang tepat untuk meningkatkan efisiensi produksi dalam pengolahan tanah liat skala besar. Dengan kapasitas mencapai 5 ton per jam dan sistem double screw agitator mesin ini memberikan hasil campuran tanah liat yang optimal, siap mendukung pertumbuhan usaha anda.
      `,
    },
    {
      id: 3,
      name: "Mesin Wood Chipper Plant",
      category: "Mesin Pertanian",
      image: `${import.meta.env.BASE_URL}images/Mesin-Hydrodan-Wood-Chipper.jpg`,
      description: `
Mesin Wood Chipper Plant merupakan alat yang digunakan untuk memotong atau mencacah kayu menjadi serpihan-serpihan (wood-chips). Mesin ini sering digunakan dalam industri kehutanan, pertanian, dan pengelolaan limbah kayu. Fungsi Mesin Wood Chipper Plant adalah untuk mengubah potongan kayu besar, ranting, dan sisa-sisa kayu lainnya menjadi serpihan kecil. Serpihan ini dapat digunakan sebagai bahan bakar biomassa, mulsa untuk pertanian, atau bahan baku untuk industri pulp dan kertas.
Mesin ini biasanya dirancang dengan berbagai kapasitas sesuai kebutuhan pengguna, dari kapasitas kecl untuk penggunaan domestik hingga kapasitas besar untuk kebutuhan industri. Mesin ini bekerja dengan mekanisme pemotong yang dapat berupa pisau tajam atau drum chipper. Material kayu dimasukkan ke dalam mesin, dimana pisau-pisau tajam memotongnya menjadi serpihan kecil.
Mesin Wood Chipper Plant dapat digerakkan oleh berbagai sumber tenaga, termasuk mesin diesel, mesin besin, atau motor listrik, tergantung pada model dan spesifikasinya.

      `,
    },    
    {
      id: 4,
      name: "Mesin Pengayak Getar",
      category: "Mesin Pertanian",
      image: `${import.meta.env.BASE_URL}images/Mesin-Pengayak-Tipe-Getar.jpg`,
      description: `
Mesin Pengayak Getar atau mesin sortasi berfungsi untuk memilah ukuran dari produk yang akan diproduksi, mesin pengayak tipe getar ini bisa digunakan untuk mengayak aneka pupuk organik, pupuk butiran maupun komoditi lain yang sejenis seperti mengayak pasir, tepung. Untuk ukuran mesh dan jumlah mesh dapat disesuaikan dengan kebutuhan konsumen.
Spesifikasi :
- Kapasitas : 300kg/ jam (Optional)
- Dimensi ( pxlxt) : 1350 x 900 x 1100 mm
- Material Rangka : Mild Steel Hollow 40
- Material Ram : Stainless Steel Mesh
- Material Body : Plate SPHD 2mm
- Penggerak : E. Motor 1PK
- Transmisi : Pulley dan V-Belt
- Berat Mesin : 120kg

     `,
    },  
    {
      id: 5,
      name: "Mesin Hydroseeding",
      category: "Mesin Pertanian",
      image: `${import.meta.env.BASE_URL}images/Mesin-Pengayak-Tipe-Getar.jpg`,
      description: `
Mesin Hydroseeding atau Mesin Penebar Benih Rumput digunakan untuk menyebar bibit rumput dalam reklamasi lahan bekas pertambangan.Mesin ini mampu menyemprokan bibit dan media yang telah dicampurkan dengan air dengan jangkauan yang cukup jauh hingga 50-70 meter.Dengan Mesin Hydroseeding anda dapat menghemat cost karena membutuhkan tenaga pengoperasi yang lebih sedikit dan mampu mengerjakan cakupan lahan yang luas dengan waktu yang cepat.

A. Mesin Hydroseeding 1000Lt
Spesifikasi :
- Type : Trailer
- Capasity : 1200 Ltr
- Work Capasity : 1000 Ltr
- Power : Yanmar TF 160

Starting System : Electric Starter
- Pump : Slury Pump Ebara FSH 50
- Pump Drive : Belt Pulley
- Agitator : Horizontal Mechanical Padle
- Agitator Drive : Chain and Sprocket System
- Discharge Distance : up to 25 mtr
- Material Body : Plate 5 mm Painting
- Chasis : Canal C 5 x 20 x 10 cm
- Nozlle : Narrow Fan

Long Distance
- Safety : Light Safety Emergency Stop Engine
- Tyres : R 15 x 75 x 20 Load Range Tracking treed

B. Mesin Hydroseeding 2000Lt
Spesifikasi :
- Power : Yanmar TS 230 RS 23 HP
Starting System : Electric
Cooling System : Water – Radiator
- Fuel Tank Enggine : 21 Liter
- Pump : Ebara Centrifugal Pump Type FSH80 – 65
- Pump Drive : Belt Drive Conection to enggine of agitator
operation
- Agitator : Mechanical Padle Circulation Horizontal
- Agitator Drive : Chain and Sprocket Conect to enggine reducer
speed system
- Discharge Distance : up to 25 mtr from end of distance tower
- Material Body : Plate 5 mm. S 45C (Steel)
- Chasis : W ;5 mm Bending Plate
- Nozlle : Narrow Fan
Wide Fan
Long Distance
- Light Safety : Scotlite IM3 Including Market
- Tyres : R 15 – 75 – 20 Load Range Tracking treed 4 Wheels
- Trailer : Tandem

C. Mesin Hydroseeding 4000Lt
Spesifikasi :
- Power : Kubota Diesel Engine V 3300 Series
Type : Water Cooled
Bore and Stroke : 98 x 110
Gross Intermiten : 50Hp
- Fuel Tank Enggine : 25 Liter
- Pump : Ebara Centrifugal Pump (Optional)
- Pump Drive : Belt Drive Conection to enggine of agitator
operation
- Agitator : Mechanical Padle Horizontal Circulation
- Agitator Drive : Chain and Sprocket Conect to enggine reducer
speed system
- Discharge Distance : up to 30 mtr from end of distance tower
or Hose
- Material Body : Plate 5 mm. ST
- Chasis : Width ; 5 mm Bending Plate
- Nozlle : Narrow Fan
Wide Fan
Long Distance 16 – 20 mm
- Safety : Reflector Light
Emergemcy Stop Engine
Clipsal Electrik
- Model : Mobile 4 Wheel (Optional)
- Tyres : R 15 – 75 – 20 Load Range
Tracking treed 4 Wheels
     `,
    },  
    {
      id: 6,
      name: "Germinator Benih",
      category: "Mesin Pertanian",
      image: `${import.meta.env.BASE_URL}images/Germinator-Benih-atau-Seed-Germinator-2.jpg`,
      description: `
Germinator Benih atau Seed Germinator ini memiliki beberapa type diantaranya Germinator Elektrik dan Germinator Non Elektrik. Germinator Benih atau Seed Germinator adalah alat peraga untuk melihat dan mengetahui perkembangan dan pertumbuhan suatu benih, perkecambahan biji, penanaman benih, dan histocyte dan mikroba.
Spesifikasi Germinator 72-1:
- Material : Steel Plate
- Size : 116 x 50 x 107cm (p,l,t)
- 6 Baki dari Aluminum
- Pintu : 2 pintu.
- Finishing : Cat Duco

Spesifikasi Germinator 73-2A:
- Material : Steel Plate
- Size : 81 x 50 x 69cm (p,l,t)
- Rak Atas (p,l,t) : 42 x 70 x 2.5cm (3pcs)
- Rak Bawah (p,l,t) : 70 x 42 x 2.5cm (2pcs)
- Pan Bawah with frame (p,l,t) : 76x48x3cm
- Pintu : 2 pintu.
- Finishing : Cat Duco

Spesifikasi Germinator 73-2B:
- Material : Steel Plate
- Size : 81 x 50 x 69cm (p,l,t)
- Rak Atas (p,l,t) : 42 x 70 x 2.5cm (3pcs)
- Rak Bawah (p,l,t) : 70 x 42 x 2.5cm (2pcs)
- Pan Bawah with frame (p,l,t) : 76x48x3cm
- Pintu : 2 pintu.
- Finishing : Cat Duco

Spesifikasi Germinator 73-2A/B:
- Material : Steel Plate
- Size : 50 x 50 x 69cm (p,l,t)
- Rak Atas (p,l,t) : 42 x 45 x 2.5cm (3pcs)
- Rak Bawah (p,l,t) : 42 x 45 x 2.5cm (2pcs)
- Pintu : 1 pintu.
- Finishing : Cat Duco
     `,
    },  
    {
      id: 7,
      name: "Mesin Pemeras Santan Kelapa",
      category: "Mesin Pertanian",
      image: `${import.meta.env.BASE_URL}images/Mesin-Pemeras-Santan-Kelapa-2.jpg`,
      description: `
Mesin Pemeras Santan Kelapa berfungsi untuk mengepress kelapa yang telah diparut untuk memisahkan santan kelapa dari ampasnya. Mesin pemeras santan ini biasanya digunakan dalam industri-industri seperti pengolahan makanan, industry farmasi, industry pengolahan minyak kelapa dan yang lainnya.
Spesifikasi :
- Type A22
- Kapasitas : 25 – 30 liter/jam ( 200-300 butir )
- Dimensi pxlxt : 105 x 45 x 140 cm
- Bahan Material:Staeinlis Steel
- Rangka :Siku 50
- Penggerak:E-Mtr 1Hp / Mtr Bensin 5.5Hp

Spesifikasi :
- Type A33
- Kapasitas : 30 – 50 liter/jam ( 400-500 butir )
- Dimensi pxlxt : 120 x 50 x 149 cm
- Bahan Material : Staeinlis Steel
- Rangka : Siku 50
- Penggerak : E-Mtr 2Hp / Mtr Bensin 6.5Hp

     `,
    },  
    {
      id: 8,
      name: "Alat Perebah Sapi",
      category: "Mesin Pertanian",
      image: `${import.meta.env.BASE_URL}images/Alat-Perebah-Sapi-Restraining-Box-2-300x225.jpg`,
      description: `
Alat perebah sapi atau Restraining Box merupakan alat yang berfungsi untuk membantu merebahkan sapi dari posisi berdiri untuk memudahkan proses pemotongan. Alat ini biasanya digunakan di Rumah Pemotongan Hewan (RPH).
Dengan menggunakan alat ini maka sapi akan lebih mudah dikendalikan sehingga dapat mencegah terjadinya kecelakaan karena tendangan maupun tandukan hewan terhadap juru potong maupun pekerja lainnya.
Sebaliknya, jika tanpa menggunakan restraining box perebah sapi sering dilakukan tanpa metode yang benar dan bahkan cenderung kasar sehingga menyebabkan sapi mengamuk. Sapi yang mengamuk akan sulit dikendalikan dan dapat melukai petugas maupun orang – orang yang berada disekitar area penyembelihan.

Spesifikasi :
• Dimensi : P x L x T = 2785 x 1580 x 2870 mm
• Rangka :
  1. Hollow 75 x 75 mm, hollow 50 x 50 mm,
  2. Plat t : 6 mm, 10 mm, 16 mm
  3. Siku 70 x 70 mm, 60 x 60 mm
  4. Pipa diameter 3/4″”, 1″”, 1 1/4″”
  5. penutup plat 3 mm, lantai bordes 3 mm lengkap dengan as, bushing, nipple dan roller

• Penjepit Sapi : Hollow 75 x 40 mm lengkap dengan as, bushing, nipple, dan bantalan karet

• Pintu Sliding :
  1. Hollow 50 x 50 mm, hollow 40 x 40 mm, Unp 65 x 35 mm,
  2. Siku 60 x 60 mm, penutup plat t: 3 mm

• Hydraulic cylinder :
  1. 2 pcs. Hydraulic Cylinder bore dia. ID 70 X as 40 X stroke 100 mm
  2. Force @ cylinder at max. operating pressure = 1.154 kgf/cm2
  3. Total Force = 2.308 kgf/cm2.
  4. Speed at full stroke = 3,25 second.
  5. 1 pce. Hydraulic Cylinder bore dia. ID 100 X as 50 X stroke 300 mm
  6. Force at max. operating pressure = 2.355 kgf/cm2.
  7. Speed at full stroke = 9,94 second

• Hydraulic Power Unit :
  1. Submersible hydraulic pump 9,8 cc/Rev.-
  2. Electric Motor 1 HP/4 Pole/3 Phase/ 220/380 VAC
  3. Center Block with Integrated Relief Valve
  4. Hand Control Valve 3/8” – 3 bank, spring center type
  5. Oil Reservoir = 35 liter
  6. Pressure Gauge 0 – 60 bar
  7. Operating Pressure Recommendation = max. at 30 bar

• Finish : Hotdip Galvanizing
- Agricultural Equipment ISO 9001 : 2015
- Agricultural Equipment ISO 14001 : 2015 ”
    `,
    },  
    {
      id: 9,
      name: "Kandang Jepit Otomatis",
      category: "Mesin Pertanian",
      image: `${import.meta.env.BASE_URL}images/Kandang-Jepit-Otomatis-Restraining-Cage.jpg`,
      description: `
Kandang Jepit Otomatis atau Restraining Cage adalah alat yang digunakan untuk melindungi penyembelih terhadap perlawanan ternaik itu saat akan disembelih. Alat ini juga mampu mengurangi rasa sakit pada hewan ternak.
Cara kerjanya adalah dengan menggiring ternak ke kandang jepit yang nantinya akan dijepit sesuai ukuran (untuk tidak membuat ternak kesakitan). Lalu alat penjepit ternak itu akan dibalik 180 derajat dan ternak siap untuk disembelih tanpa khawatir ternak itu akan melawan atau meronta-ronta.Lalu, ternak itu ditampung pada tempat khusus, sehingga bersih karena tidak tersentuh tanah atau lainnya.

Spesifikasi :
• Dimensi : P x L x T = 2785 x 1580 x 2870 mm
• Rangka :
  1. Hollow 75 x 75 mm, hollow 50 x 50 mm,
  2. Plat t : 6 mm, 10 mm, 16 mm
  3. Siku 70 x 70 mm, 60 x 60 mm
  4. Pipa diameter 3/4″”, 1″”, 1 1/4″”
  5. penutup plat 3 mm, lantai bordes 3 mm lengkap dengan as, bushing, nipple dan roller

• Penjepit Sapi : Hollow 75 x 40 mm lengkap dengan as, bushing, nipple, dan bantalan karet

• Pintu Sliding :
  1. Hollow 50 x 50 mm, hollow 40 x 40 mm, Unp 65 x 35 mm,
  2. Siku 60 x 60 mm, penutup plat t: 3 mm

• Hydraulic cylinder :
  1. 2 pcs. Hydraulic Cylinder bore dia. ID 70 X as 40 X stroke 100 mm
  2. Force @ cylinder at max. operating pressure = 1.154 kgf/cm2
  3. Total Force = 2.308 kgf/cm2.
  4. Speed at full stroke = 3,25 second.
  5. 1 pce. Hydraulic Cylinder bore dia. ID 100 X as 50 X stroke 300 mm
  6. Force at max. operating pressure = 2.355 kgf/cm2.
  7. Speed at full stroke = 9,94 second

• Hydraulic Power Unit :
  1. Submersible hydraulic pump 9,8 cc/Rev.-
  2. Electric Motor 1 HP/4 Pole/3 Phase/ 220/380 VAC
  3. Center Block with Integrated Relief Valve
  4. Hand Control Valve 3/8” – 3 bank, spring center type
  5. Oil Reservoir = 35 liter
  6. Pressure Gauge 0 – 60 bar
  7. Operating Pressure Recommendation = max. at 30 bar

• Finish : Hotdip Galvanizing
- Agricultural Equipment ISO 9001 : 2015
- Agricultural Equipment ISO 14001 : 2015 ”
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
