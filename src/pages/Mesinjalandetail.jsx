import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Mesinjalandetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  // 🔹 Data produk (bisa diganti ambil dari API nanti)
  const products2 = [
    {
      id: 1,
      name: "Asphalt Sprayer Mini",
      category: "Mesin Jalan",
      image: "/images/Asphalt-Sprayer-Mini-2.jpg",
      description: `
AMP adalah seperangkat peralatan mekanik & elektronik dimana agregat akan dipanaskan, dikeringkan dan dicampur dengan aspal yang nantinya menghasilkan campuran beraspal panas yang memenuhi persyaratan tertentu yang disebut hotmix atau laston, Asphalt Sprayer Mini adalah mesin yang difungsikan untuk mengolah aspal dan campurannya pada saat pekerjaan jalan dilakukan (proyek). Asphalt Sprayer Mini ini biasanya dipakai pada pekerjaan jalan yang sifatnya tidak besar atau proyek kecil karena disediakan dengan kapasitas kecil yaitu 700-100kg.
Type GTM 1000 MIX

Spesifikasi :
- Model : Trailer 4 roda
- Volume Tabung : 80 ltr
- Mesin Penggerak : Diesel 16-20 Hp + Gear Box
- Pemanas material : Kompor sembur + kompressor angin
- Bahan bakar : Minyak Tanah/Solar
- Volume : 700-1000 kg
- Kapasitas : 2-3 Ton/jam
- Ukuran roda depan : 600/13
- Ukuran roda belakang : 700/15
- Waktu pengisian dan memasukkan material : 2.30 jam
- Dimensi panjang : 325 cm
- Dimensi lebar : 180 cm
- Dimensi Tinggi : 250 cm
     `,
    },

    {
      id: 2,
      name: "Mesin Asphal Mixing Plant Mini",
      category: "Mesin Jalan",
      image: "/images/Mesin-Asphalt-Mixing-Plant-Mini.jpg",
      description: `
Asphalt Mixing Plant (AMP) berfungsi untuk mengolah aspal dan campurannya dilokasi proyek, AMP merupakan seperangkat peralatan mekanik dan elektronik dimana agregat dipanaskan, dikeringkan dan dicampur dengan aspal untuk menghasilkan campuran beraspal panas yang memenuhi persyaratan tertentu yang disebut hotmix atau laston. Asphalt Mixing Plant Mini ini lebih efisien cara penggunaan dan dapat mengurangi pengeluaran biaya angkut material. Asphalt Mixing Plant Mini disediakan dengan kapasitas kecil yaitu 700 – 100kg. Jadi Asphalt Mixing Plant Mini biasanya dipergunakan untuk pekerjaan jalan yang sifatnya tidak besar (proyek kecil). AMP dapat terletak di lokasi yang permanen atau berpindah dari satu tempat ke tempat lain.
Mesin Asphalt Mixing Plant Mini
Type GTM 1000 MIX
Spesifikasi :
– Model : Trailer 4 roda
– Volume Tabung : 80 ltr
– Mesin Penggerak : Diesel 16-20 Hp + Gear Box
– Pemanas material : Kompor sembur + kompressor angin
– Bahan bakar : Minyak Tanah/Solar
– Volume : 700-1000 kg
– Kapasitas : 2-3 Ton/jam
– Ukuran roda depan : 600/13
– Ukuran roda belakang : 700/15
– Waktu pengisian dan memasukkan material : 2.30 jam
– Dimensi panjang : 325 cm
– Dimensi lebar : 180 cm
– Dimensi Tinggi : 250 cm
      `,
    },
    {
      id: 3,
      name: "Asphal Finisher",
      category: "Mesin Pertanian",
      image: "/images/Asphalt-Finisher.jpg",
      description: `
Asphalt Finisher atau Asphalt Paver merupakan salah satu alat berat konstruksi yang berfungsi sebagai menghamparkan aspal (meletakan material aspal pada area yang telah direncanakan) serta memberikan pemadatan awal sebelum dipadatkan ulang dengan roller. Material aspal yang ditumpahkan di mulut alat, secara otomatis akan dibentuk dan diratakan sesuai dengan ketebalan dan lengkungan jalan yang diinginkan. Agar didapat permukaanyang rata, kekentalan (slump) aspal yang dipakai harus sesuai dengan karakteristik alat.
Spesifikasi :
– Model : RP453L
– Basic paving width : 1.8m
– Max paving width : 4.5m
– Max paving thickness : 280mm
– Paving speed : 0~18m/min
– Travel speed : 0~21Km/h
– Hopper capacity : 12t
– Theoretical productivity capacity : 240t/h
– Gradeability : ≥20%
– Pavement evennesss : ≤3mm
– Transverse leveling accuracy : ±0.2%
– Centre crown ratio : ≤5%
– Engine model : SC4H
– Engine power : 73.5kW
– Engine speed : 2000r/min
– Vibrating speed : 0~1500r/min
– Vibrating trip : 4mm
– Crown adjustment : -1~3%
– Machine weight : 11t
– Maximum working condition quality : 11.9t
– Diesel tank capcity : 140L
– Hydraulic fuel tank capacity : 140L
– Overall dimensions (L*W*H) : 6242 x 4753 x 3728mm

      `,
    },    
    {
      id: 4,
      name: "Mobile Asphalt Mixing Plant",
      category: "Mesin Jalan",
      image: "/images/Mobile-Asphalt-Mixing-Plant-AMP-2.jpg",
      description: `
Mesin Mobile Asphalt Mixing Plant digunakan untuk memproduksi campuran aspal panas yang digunakan dalam konstruksi jalan. Proses produksi di asphalt mixing plant melibatkan pencampuran agregat dengan aspal panas, yang kemudian dihasilkan dalam bentuk campuran yang siap untuk digunakan dalam pembangunan atau perbaikan jalan. Mesin ini biasanya terdiri dari berbagai komponen termasuk drum pengering untuk mengeringkan agregat, silo untuk penyimpanan bahan baku, sistem pengukuran dan pencampuran, serta sistem kontrol untuk mengatur suhu dan proporsi campuran secara tepat. Penggunaan Asphalt Mixing Plant memungkinkan produsen aspal untuk menciptakan campuran yang konsisten dan berkualitas tinggi sesuai dengan spesifikasi yang dibutuhkan dalam proyek konstruksi jalan.
“Mobile Asphalt Mixing Plant (AMP) Lokal
Kapasitas 6 – 15 Ton/Jam
Spesifikasi :
COLD BIN : 1,5 m3 x 3 Compartments
– Dimension : 2315 x 1280 x 1540 mm
– Feeder : Vibration Feeder
– Vibro Motor : 0,1 kw/4 Pole = 3 pcs
LOWER CONVEYOR : Capacity 15 TPH
– Dimension : 450 W x 6500 L
– Gear Motor : 1,5 kw /4 P = 1:20
DRIVING SYSTEM
– Power : 15 kw/8 Pole
– Induction Motor
JOINT CONVEYOR : Capacity 15 TPH
– Dimension : 450 W x 6500 L Integrated with drive system
TRANSFER CONVEYOR Capacity 15 TPH
– Dimension : 450 W x 6500 L
– Gear Motor : 1,5 kw /4 P = 1:20
DRYER AND BURNER Capacity 15 TPH
– Dryer Dimension : Dia. 980 x 2220 L
– Burner Fuel Consumsion : Solar 10 – 20 liter/jam
DUST COLLECTION Capacity 45 m3/jam
– Induction Motor : 4 kw/4 Pole
HOT ELLEVATOR Capacity 15 TPH
– Type : Bucket Ellevator Attachment Chain Type
– Power : Gear Motor 2,2 KW / 1:20
”
“ROTARY SCREEN Capacity 15 TPH
– Type : Rotary Reciprocating
– Power : Integrated With Hot Elevator
HOT BIN
– Type : Terdiri dari 3 Bin yang dibagi sesuai dengan dimensi Aggregate
– Power : Pneumatic System
WEIGHT SYSTEM
– Aggregate : Pneumatic Operated Gate 3 Fraction S.A, Electronic Load cell & Monitor, Capacity 400 Kgs
-Asphalt : Three Way Valve Pneumatic Operated S.A, Electronic Load cell & Monitor, Capacity 50 Kgs
– Asphalt Spraying Pump : 1,5 KW/4 Pole, Capacity : 250 Liter/Min
MIXER Capacity 210 Kg/Batch
– Type : Double Shaft Pugmill, Wear Resistance Steel Liner and Paddle Tip
– Power : Integrated With Drive System
ASPHALT KETTLE Capacity 500 Liter
– Type : Cylinder Steel
– Burner : Solar 1,14 Liter/Jam
COMPRESSOR Capacity 90 Liter
– Type : Piston Type, c/w air reciver tank
– Induction Motor : 0,75 KW/4 Pole
– Max Pressure : 11 Kg/Cm2
FUEL TANK Capacity 200 Liter
– Dia : 550 x 870 L
PENGOPERASIAN
– Pengoperasian dilakukan melalui Panel Control dengan menggunakan Electrical System dan Pneumatic System
KEBUTUHAN DAYA
– Daya yang dibutuhkan untuk mengoperasikan AMP : 80 KVA
KELENGKAPAN
– Tool Set
– Pump Asphalt Supply”
     `,
    },  
    {
      id: 5,
      name: "Aspal Sprayer",
      category: "Mesin Jalan",
      image: "/images/Aspal-Sprayer.jpg",
      description: `
Kami memproduksi Aspal Sprayer atau mesin penyemprot aspal merupakan peralatan jalan yang digunakan untuk menyemprotkan aspal cair ke permukaan jalan hingga merata, yang nantinya aspal cair ini berguna sebagai lapisan pengikat atau prime coat agar mengikat material di bawahnya sehingga jalan menjadi kuat untuk dilalui beban berat.
Untuk pemesanan bisa langsung menghubungi nomor yang tertera pada website resmi kami.
Spesifikasi :
– Material Tangki Asphalt : Plate SS-41
– Kapasitas Tangki Asphalt : 850-1400 liter
– Hand Sprayer : Kecepatan semprot asphalt cair panas 5 liter/menit
– Kopling Magnet : Type MA-GA-12 Volt
– Mesin Penggerak : Diesel Engine, 5 HP/2200 rpm
– Generator : 2000 watt/220 volt
– Burner : Electrical Burner, 1/4 HP
– Burner Solar Consumtion : 5-10 liter/jam
– Material Tangki Solar : Plate SS-41
– Kapasitas Tangki Solar : 78 liter
– Asphalt Pump : Gear Pump GC-25
– Roda Depan : Castor wheel LBR-NR 200 x 75
– Rubber Wheel Kapasitas : 300 kg
– Roda Belakang : 7.50-16-8 PR
– Dimensi (pxlxt) : 4270 x 1920 x 2750 mm
     `,
    },  
    {
      id: 6,
      name: "Lampu Jalan PJU Solar Cell 100W",
      category: "Mesin Jalan",
      image: "/images/Lampu-Jalan-PJU-Solar-Cell-100W.jpg",
      description: `
Lampu Jalan PJU Solar Cell Two in One 100W berfungsi sebagai alat bantu penerangan yang menggunakan sistem solar cell sehingga menghemat pemakaian listrik. Lampu Jalan PJU Solar Cell 100W dilengkapi dengan Baterai sebagai tempat penyimpanan energi listrik yang mampu tahan 10-20 Hari.
Cocok untuk penggunaan sebagai lampu jalan seperti :
* Penerangan jalan umum perkotaan
* Lampu jalan akses bandara international airport
* Penerangan lampu jalan komplek perumahan modern
* Penerangan lapangan parkir
* Lampu jalan untuk area industri seperti pabrik
Spesifikasi:
– Mono Solar Panel : Efficiency 40W
Life >18%
Size 25 Years
– LED Light : Power 100W
Color Temp 6500-7000K
Luminums Flux 4000LM
– Battery : Capacity 3.2V-30AH (LiFePO4)
Life Cycle : 2000 cycles
– Water proof level : IP66
– Charging Time : 4-5H
– Working Time : 10-20H/Day
– Height of installation : 5-7m
– Distance of installation : <20m
     `,
    },  
    {
      id: 7,
      name: "Vibratory Roller GTM FURD FYL 800",
      category: "Mesin Jalan",
      image: "/images/Vibratory-Roller-GTM-FURD-FYL-800.jpg",
      description: `
Vibratory Roller GTM-FURD FYL-800 atau tandem roller berfungsi menggilas sampai memadatkan semua hasil timbunan tanah. Proses pemadatan tanah melewati beberapa cara pemampatan bahkan memakai metode getaran sehingga sangat baik diaplikasikan pada jenis tanah berpasir ataupun dengan kontur kerikil berpasir.
Spesifikasi :
– Type : Vibratory Roller GTM-FURD FYL-800
– Walk Speed : 0 – 4 km/h
– Gradeability : 30% / ≤15o
– Drive Type : Hydraulic Transmission
– Vibration Control : Electro Cloucth
– Vibration Frequency : 70 Hz
– Exiting Force : 20 kN
– Water Tank : 26 l
– Hydraulic Oil Tank :20 l
– Engine Model : Honda GX390
– Power : 13 hp
– Starting Mode : Electric & Hand
– Wheel Size : (350 mm x 635 mm) X 2
– Weight : 780 kg
– Dimension : 1510 mm x 870 mm x 1920 mm

     `,
    },  
    {
      id: 8,
      name: "Power Trowel S100H",
      category: "Mesin Jalan",
      image: "/images/Power-Trowel-S100H.jpg",
      description: `
Power Trowel GTM-S100H adalah alat konstruksi yang berfungsi menghaluskan permukaan screed (beton) sebelum kering.
Spesifikasi :
– Type : Power Trowel GTM-S100H
– Engine Model : Honda GX160
– Power : 5.5 hp
– Trowel Diameter : 920 mm
– Pitch Range : 0 – 15 o
– Speed Range : 60 – 100 rpm
– Weight : 80 kg
– Dimension : 1020 mm x 1020 mm x 750 mm

    `,
    },  
    {
      id: 9,
      name: "Mesin Marka Jalan Semi Automatis Compressor",
      category: "Mesin Jalan",
      image: "/images/Mesin-Marka-Jalan-Semi-Automatis-Compressor.jpg",
      description: `
Kami memproduksi berbagai perlengkapan mesin marka jalan dengan spesifikasi sesuai dengan standar. Mesin Marka Jalan Semi Otomatis Kompresor merupakan mesin yang digunakan oleh para kontraktor jalan pada saat pekerjaan pengecatan marka jalan dilakukan. Mesin Marka Jalan ini berfungsi untuk mengaplikasikan bahan cat thermoplastic dan glassbeads ke media jalan dengan bantuan pemanasan dari gas LPG dan diaplikasikan dengan mesin marka sehingga menghasilkan garis marka jalan non profil (standard) dengan ukuran garis 10,12,15,30 cm.
TEKNAS Type GTM-MJ01B
Spesifikasi :
– Bahan Tabung : Double Jacket stainless steel
– Bahan bottom plate alas Tabung Mild steel
– Kapasitas Tangki Cat : 100 Kg
– Material Rangka : Canal C Steel
– Material Dispenser : Stainless Steel
– Kapasitas Tangki Glass Bead : 10 Kg
– Dispenser Glass Bead : System Tembak / Compressor
– Include Compressor dan Pressure Gauge
– Include Engine GX160
– Include Head Compressor
– Sepatu Marka : Lebar 12 cm dan 30 cm (double handle)
– Dispenser : Lebar 12 cm dan 30 cm (double handle)
– Bahan Bakar : Gas LPG
– Dimensi (p x l x t) : 1300 x 800 x 900 mm
– Berat Mesin : ± 200 kg
– Dilengkapi dengan Gas Lighter Refillable
– Regulator LPG Kecil (High Pressure)
– Certificate Machine Road Markings ISO 9001:2015
– Certificate OHSAS 18001:2015
    `,
    },  
  ]

  const product2 = products2.find((p) => p.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!product2) {
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
        <img src={product2.image} alt={product2.name} className="w-full h-96 object-cover" />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">{product2.name}</h1>
          <p className="text-gray-500 mb-6">{product2.category}</p>

          <div
            className="text-gray-700 leading-relaxed text-justify whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: product2.description.replace(/\n/g, "<br/>") }}
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
                product2.name
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
