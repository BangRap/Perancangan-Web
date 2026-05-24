
const SITE_DATA = {
  brand: {
    name: "FKMK Sekolah Vokasi IPB",
    campus: "Institut Pertanian Bogor",
    tagline: "Bersatu dalam iman, bertumbuh dalam pengetahuan, dan berbagi dalam pelayanan.",
    email: "fkmksvipb@apps.ipb.ac.id",
    copyright: "2026 FKMK Sekolah Vokasi IPB",
  },

  assets: {
    logo: "Logo FKMK.png",
    logoLarge: "Logo FKMK.png",
    instagram: "instagram.png",
    tiktok: "tik-tok.png",
  },

  navigation: [
    { page: "home", label: "Beranda", href: "index.html" },
    { page: "profile", label: "Profil", href: "profil.html" },
    { page: "events", label: "Event", href: "event.html" },
    { page: "prayers", label: "Doa Katolik", href: "doa.html" },
  ],

  home: {
    heroSlides: [
      {
        title: "Forum Keluarga Mahasiswa Katolik",
        kicker: "Unit Kegiatan Mahasiswa Katolik Sekolah Vokasi IPB",
        text: "Bersatu dalam iman, bertumbuh dalam pengetahuan, dan berbagi dalam pelayanan.",
        image: "dokum2.png",
      },
      {
        title: "Kegiatan Kami",
        kicker: "Mengembangkan Iman dan Persaudaraan",
        text: "Berbagai kegiatan rohani, sosial, dan pengembangan diri yang memperkuat iman dan persaudaraan antar sesama.",
        image: "dokum1.png",
      },
      {
        title: "Pelayanan Rohani",
        kicker: "Berbagi Kasih dan Kebaikan",
        text: "Menghidupkan nilai Katolik melalui pelayanan kepada sesama dan lingkungan kampus.",
        image: "paskah.png",
      },
      {
        title: "Unit Kegiatan Mahasiswa",
        kicker: "Persaudaraan dalam Keberagaman",
        text: "Membangun relasi dan persahabatan yang menghormati perbedaan di lingkungan kampus.",
        image: "studibanding.png",
      },
    ],

    welcome: {
      eyebrow: "Selamat Datang di",
      title: "Forum Keluarga Mahasiswwa Katolik Sekolah Vokasi IPB",
      body: "FKMK adalah organisasi kemahasiswaan yang diperuntukkan bagi mahasiswa Sekolah Vokasi IPB yang beragama Katolik. Tujuannya untuk mempererat hubungan antar sesama Katolik, baik secara jasmani maupun rohani.",
    },

    pillars: [
      {
        title: "Pelayanan",
        quote: "Sebab Anak Manusia juga datang bukan untuk dilayani, melainkan untuk melayani.",
        source: "Markus 10:45",
        icon: "briefcase",
      },
      {
        title: "Iman",
        quote: "Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku.",
        source: "Filipi 4:13",
        icon: "heart",
      },
      {
        title: "Persaudaraan",
        quote: "Jikalau kamu saling mengasihi, semua orang akan tahu bahwa kamu adalah murid-murid-Ku.",
        source: "Yohanes 13:35",
        icon: "users",
      },
    ],

    articles: [
      {
        date: "18 Mei 2026",
        title: "Tetap Bersinar di Tengah Kesibukan",
        image: "pray.jpg",
        summary: "Kadang hidup terasa penuh tugas, tekanan, dan rasa lelah yang datang bertubi-tubi. Dalam kesibukan itu, kita sering lupa memberi waktu untuk diri sendiri dan Tuhan. Padahal, hati yang tenang lahir dari hubungan yang dekat dengan-Nya.Tuhan tidak meminta kita menjadi sempurna setiap saat, tetapi tetap setia berjalan dan tidak kehilangan harapan. Bahkan di hari yang berat sekalipun, selalu ada kesempatan untuk bertumbuh, belajar, dan menjadi lebih kuat.",
      },
      {
        date: "12 Maret 2024",
        title: "Belajar Bersyukur dalam Hal Kecil",
        image: "unsplash.jpg",
        summary: "Sering kali kita menunggu hal besar untuk merasa bahagia, padahal Tuhan menghadirkan banyak berkat melalui hal-hal sederhana. Senyum dari seseorang, udara pagi yang sejuk, atau hari yang masih bisa dijalani adalah bentuk kasih Tuhan yang kadang terlewatkan. Hati yang bersyukur membuat hidup terasa lebih ringan. Saat kita belajar melihat kebaikan kecil setiap hari, kita akan sadar bahwa Tuhan tidak pernah meninggalkan kita, bahkan dalam masa sulit sekalipun.",
      },
      {
        date: "4 Februari 2024",
        title: "Jangan Takut Memulai Lagi",
        image: "road.jpg",
        summary: "Kegagalan bukan akhir dari perjalanan. Kadang Tuhan mengizinkan kita jatuh supaya kita belajar menjadi lebih kuat dan lebih bijaksana. Tidak apa-apa jika langkahmu sempat berhenti, yang penting adalah keberanian untuk bangkit kembali. Tuhan selalu membuka kesempatan baru bagi mereka yang mau mencoba lagi. Masa lalu tidak menentukan seluruh hidupmu. Setiap hari adalah kesempatan baru untuk memperbaiki diri dan berjalan lebih baik dari sebelumnya.",
      },
    ],

    testimonials: [
      {
        name: "Nixon A.F Girsang",
        meta: "Teknik dan Manajem Lingkungan / 2024",
        image: "orang1.png",
        text: "FKMK menjadi tempat saya menemukan keluarga baru di perantauan. Di sini saya belajar bertumbuh dalam iman, pelayanan, dan persahabatan.",
      },
      {
        name: "Aileen Claire Lukito",
        meta: "Manajemen Industri Jasa Makanan dan Gizi / 2025",
        image: "orang2.png",
        text: "Bersama FKMK, saya tidak hanya berkembang secara rohani, tetapi juga belajar menjadi pribadi yang lebih peduli dan bertanggung jawab.",
      },
      {
        name: "Kaludia Nugrahani P.W",
        meta: "Komunikasi Digital dan Media / 2025",
        image: "orang3.png",
        text: "FKMK membantu saya beradaptasi dengan lingkungan kampus dan menemukan teman-teman yang saling mendukung.",
      },
      {
        name: "Destry Novena M.S",
        meta: "Manajemen Agribisnis / 2025",
        image: "orang4.png",
        text: "FKMK bukan sekadar komunitas, tetapi tempat untuk bertumbuh, berbagi, dan saling menguatkan dalam perjalanan perkuliahan.",
      },
    ],

    gallery: [
      {
        title: "Doa Rosario",
        image: "https://res.cloudinary.com/df1oh69xd/image/upload/v1756474572/lagu_misa_sheets/khlw4sjmrueulg8nacnb.jpg",
      },
      {
        title: "Ibadah BKSN",
        image: "https://res.cloudinary.com/df1oh69xd/image/upload/v1756474118/lagu_misa_sheets/emiu81ubbfqrz4sekyhg.jpg",
      },
      {
        title: "First Gathering KMK 2025",
        image: "https://res.cloudinary.com/df1oh69xd/image/upload/v1756472999/lagu_misa_sheets/wbivr9kou1qs4uklrqef.jpg",
      },
    ],

    faqs: [
      {
        question: "Bagaimana cara bergabung dengan FKMK Sekolah Vokasi IPB?",
        answer: "Kamu dapat menunggu informasi kapan kami membuka open recruitment di instagram kami",
      },
      {
        question: "Apa saja kegiatan rutin FKMK Sekolah Vokasi IPB?",
        answer: "Kegiatan rutin meliputi pertemuan mingguan, pendalaman iman, pelaksanaan program kerja, kegiatan sosial, dan pengembangan diri.",
      },
      {
        question: "Apakah ada biaya keanggotaan?",
        answer: "Tidak ada biaya wajib. Iuran sukarela biasanya digunakan untuk mendukung kegiatan bersama saja.",
      },
    ],
  },

  profile: {
    hero: {
      title: "Profil FKMK SV IPB",
      subtitle: "Unit Kegiatan Mahasiswa Katolik Institut Teknologi Sumatera",
      image: "dokum3.png",
      subtitle: "Unit Kegiatan Mahasiswa Katolik Institut Pertanian Bogor",
    },
    history: {
      title: "Sejarah",
      image: "fotobersama1.png",
      paragraphs: [
        "FKMK adalah organisasi kemahasiswaan yang diperuntukkan bagi mahasiswa Sekolah Vokasi IPB yang beragama Katolik. Tujuannya untuk mempererat hubungan antar sesama Katolik, baik secara jasmani maupun rohani. FKMK didirikan pada tahun 2012 oleh angkatan 50, dengan tujuan memenuhi kebutuhan mahasiswa Katolik yang mencari tempat untuk berbagi, mengembangkan iman, dan membangun rasa kekeluargaan di antara sesama mahasiswa Katolik.",
      ],
      milestones: [
        { year: "2012", text: "Pendirian FKMK SV IPB" },
      ],
    },
    vision: {
      title: "Visi dan Misi",
      quote: "FKMK berkomitmen menjadi pusat pergerakan yang transformatif secara spiritual dan aktif dalam pelayanan untuk melahirkan pemimpin Katolik yang memiliki karakter kuat (karakter baja) bagi Gereja dan bangsa Indonesia.",
      missions: [
        { number: "01", title: "Inspire", text: "Menjadi sumber kekuatan untuk menjawab kegelisahan mahasiswa dan menciptakan ruang perjumpaan dengan Tuhan yang kreatif serta mendalam." },
        { number: "02", title: "Impact", text: 'Berperan sebagai "Garam dan Terang Dunia" dengan mengkaji isu strategis dari sudut pandang iman Katolik serta bergerak melayani sesama yang membutuhkan.' },
        { number: "03", title: "Ignite", text: 'Membangun komunitas sebagai "rumah yang sesungguhnya" dan menjadi benteng pertahanan agar tidak ada anggota yang merasa sendirian.' },
      ],
    },
    organization: {
      roles: [
        { title: "BPH", text: "Badan yang memiliki fungsi kontrol, koordinasi, pengembangan dan peningkatan untuk menjalankan dan bertanggung jawab atas segala kegiatan dan program kerja yang telah ditetapkan. BPH terdiri dari ketua umum, wakil ketua, sekretaris 1 dan 2, bendahara 1 dan 2." },
        { title: "HAKRAB", text: "Divisi yang merupakan bagian dari organisasi yang bertugas berkomunikasi dengan publik, baik internal ataupun eksternal. Keakraban merupakan salah satu kegiatan yang dilakukan oleh humas di bagian internal organisasi." },
        { title: "ROHANI", text: "Divisi yang mengelola kegiatan rohani dan sosial yang berkaitan dengan kesejahteraan. Divisi ini bertujuan untuk membentuk pribadi yang beriman, bertaqwa, dan memiliki budi pekerti yang baik. Biasanya divisi ini yang memimpin doa dalam suatu acara ataupun mempererat hub antara Tuhan dan diri sendiri. " },
        { title: "KOMINFO", text: "Divisi yang bertugas untuk mengelola dan menyebarkan informasi, serta komunikasi. menjalin Kominfo merupakan wajah ini FKMK karena branding organisasi sangat diperlukan. " },
        { title: "PENKRAF", text: "Divisi ini berfokus pada pengembangan talenta anggota dan penguatan ekonomi kreatif. Melalui koordinasi lintas divisi, kami menciptakan peluang pendanaan organisasi dengan cara yang kreatif dan menyenangkan." },
      ],
    },
  },

  events: {
    hero: {
      title: "Galeri Kegiatan",
      subtitle: "Dokumentasi Kegiatan FKMK Sekolah Vokasi IPB",
      image: "event.png",
    },
    items: [
      {
        category: "Valentine FKMK",
        date: "15 Februari 2026",
        title: "Valentine FKMK 2026",
        location: "Sekolah Vokasi IPB",
        image: "valentine.png",
        text: "Valentine FKMK 2026 merupakan kegiatan perayaan Hari Valentine sebagai ajang mempererat hubungan antaranggota",
      },
      {
        category: "Studi Banding",
        date: "16 Mei 2026",
        title: "Studi Banding dengan KMK PNJ",
        location: "Sekolah Vokasi IPB",
        image: "studibanding.png",
        text: "Studi Banding bersama KMK PNJ merupakan kegiatan kunjungan dan diskusi antara FKMK dan KMK PNJ untuk berbagi pengalaman.",
      },
      {
        category: "Paskah FKMK",
        date: "18 April 2026",
        title: "Paskah FKMK 2026",
        location: "Sekolah Vokasi IPB",
        image: "paskah.png",
        text: "Latihan dasar kepemimpinan yang membekali anggota dengan nilai pelayanan, tanggung jawab, dan regenerasi organisasi.",
      },
    ],
  },


  prayers: {
    hero: {
      title: "Doa Katolik",
      subtitle: "Temukan berbagai doa harian, devosi, dan doa-doa penting",
      image: "gereja1.jpg",
    },
    items: [
      {
        title: "Kemuliaan",
        text: `Kemuliaan kepada Bapa dan Putra dan Roh Kudus,\nseperti pada permulaan, sekarang, selalu,\ndan sepanjang segala abad. Amin.`,
      },
      {
        title: "Ratu Surga",
        text: `P. Ratu surga bersukacitalah Alleluya.\nU. Sebab Dia yang boleh kau kandungkan haleluya.\nP. Telah bangkit seperti disabdakanNya haleluya.\nU. Doakanlah kami pada Allah haleluya.\nP. Bersukacitalah dan bergembiralah Perawan Maria haleluya.\nU. Sebab Tuhan sungguh telah bangkit haleluya.\nP. Marilah kita berdoa.\nP+U. Ya Allah, Engkau telah berkenan menggembirakan dunia dengan kebangkitan Tuhan kami Yesus Kristus. Kami mohon, berilah supaya dengan pengantaraan BundaNya, Perawan Maria, kami bersukacita dalam kehidupan yang kekal. Karena Kristus Tuhan kami. Amin.`,
      },
      {
        title: "Aku Percaya",
        text: `Aku percaya akan Allah, Bapa yang Mahakuasa, pencipta langit dan bumi.\nDan akan Yesus Kristus, Putra-Nya yang tunggal, Tuhan kita,\nyang dikandung dari Roh Kudus, dilahirkan oleh Perawan Maria;\nyang menderita sengsara dalam pemerintahan Pontius Pilatus,\ndisalibkan, wafat dan dimakamkan;\nyang turun ke tempat penantian,\npada hari ketiga bangkit dari antara orang mati;\nyang naik ke surga,\nduduk di sebelah kanan Allah Bapa yang Mahakuasa;\ndari situ Ia akan datang mengadili orang hidup dan mati.\nAku percaya akan Roh Kudus,\nGereja Katolik yang Kudus,\npersekutuan para kudus,\npengampunan dosa,\nkebangkitan badan,\nkehidupan kekal. Amin.`,
      },
      {
        title: "Doa Angelus",
        text: `Maria diberi kabar oleh malaikat Tuhan, bahwa ia akan mengandung dari Roh Kudus.\nSalam Maria...\nAku ini hamba Tuhan, terjadilah padaku menurut perkataanmu.\nSalam Maria...\nSabda sudah menjadi daging, dan tinggal di antara kita.\nSalam Maria...\nDoakanlah kami, ya Santa Bunda Allah, supaya kami dapat menikmati janji Kristus.\nYa Allah, karena kabar malaikat kami mengetahui bahwa Yesus Kristus Putra-Mu menjadi manusia; curahkanlah rahmat-Mu ke dalam hati kami, supaya karena sengsara dan salib-Nya, kami dibawa kepada kebangkitan yang mulia. Sebab Dialah Tuhan, pengantara kami. Amin.`,
      },
      {
        title: "Doa Tobat",
        text: `Allah yang maharahim, aku menyesal atas dosa-dosaku. Aku sungguh patut Engkau hukum, terutama karena aku telah tidak setia kepada Engkau yang maha pengasih dan mahabaik bagiku.\nAku benci akan segala dosaku, dan berjanji dengan pertolongan rahmat-Mu hendak memperbaiki hidupku dan tidak akan berbuat dosa lagi. Allah yang maha-murah, ampunilah aku, orang berdosa. Amin.`,
      },
      {
        title: "Salam Maria",
        text: `Salam Maria, penuh rahmat,\nTuhan bersamamu,\nterpujilah engkau di antara wanita,\ndan terpujilah buah tubuhmu, Yesus.\nSanta Maria, Bunda Allah,\ndoakanlah kami orang berdosa ini,\nsekarang dan waktu kami mati. Amin.`,
      },
    ],
  },
};
