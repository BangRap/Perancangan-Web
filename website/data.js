
const SITE_DATA = {
  brand: {
    name: "KMK St. Thomas Aquinas",
    campus: "Institut Teknologi Sumatera",
    tagline: "Bersatu dalam iman, bertumbuh dalam pengetahuan, dan berbagi dalam pelayanan.",
    email: "katolikitera@gmail.com",
    copyright: "2026 Divisi Implementasi Teknologi - Departemen Media Komunikasi Visual - KMK St. Thomas Aquinas ITERA",
  },

  assets: {
    logo: "https://www.kmkitera.com/logokmk.png",
    logoLarge: "https://www.kmkitera.com/hd-logo-kmk-500.png",
    instagram: "https://www.kmkitera.com/instagram.png",
    youtube: "https://www.kmkitera.com/youtube.png",
    spotify: "https://www.kmkitera.com/spotify.png",
    tiktok: "https://www.kmkitera.com/tiktok.png",
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
        title: "KMK St. Thomas Aquinas",
        kicker: "Unit Kegiatan Mahasiswa Kristen",
        text: "Bersatu dalam iman, bertumbuh dalam pengetahuan, dan berbagi dalam pelayanan.",
        image: "https://www.kmkitera.com/bg-2.JPG",
      },
      {
        title: "Kegiatan Kami",
        kicker: "Mengembangkan Iman dan Persaudaraan",
        text: "Berbagai kegiatan rohani, sosial, dan pengembangan diri yang memperkuat iman dan persaudaraan.",
        image: "https://www.kmkitera.com/bg-1.JPG",
      },
      {
        title: "Pelayanan Rohani",
        kicker: "Berbagi Kasih dan Kebaikan",
        text: "Menghidupkan nilai Katolik melalui pelayanan kepada sesama dan lingkungan kampus.",
        image: "https://www.kmkitera.com/bg-3.JPG",
      },
      {
        title: "Unit Kegiatan Mahasiswa",
        kicker: "Persaudaraan dalam Keberagaman",
        text: "Membangun relasi dan persahabatan yang menghormati perbedaan di lingkungan kampus.",
        image: "https://www.kmkitera.com/bg-4.JPG",
      },
      {
        title: "Pengembangan Talenta",
        kicker: "Talenta untuk Kemuliaan Tuhan",
        text: "Mengembangkan potensi mahasiswa untuk melayani dan berbagi dengan sesama.",
        image: "https://www.kmkitera.com/bg-5.jpg",
      },
    ],

    welcome: {
      eyebrow: "Selamat Datang di",
      title: "KMK St. Thomas Aquinas Institut Teknologi Sumatera",
      body: "Unit Kegiatan Mahasiswa Katolik St. Thomas Aquinas Institut Teknologi Sumatera adalah komunitas iman yang mengajak mahasiswa Katolik bertumbuh dalam kasih Kristus, membangun persaudaraan, dan melayani dengan hati.",
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
        date: "12 April 2024",
        title: "Ada Pelangi di Balik Hujan",
        image: "https://res.cloudinary.com/df1oh69xd/image/upload/v1754498784/lagu_misa_sheets/mtegc5d6yavs21j9qtqa.jpg",
        summary: "Renungan tentang harapan ketika kehidupan tidak selalu berjalan sesuai rencana, namun tetap menyimpan warna kebaikan.",
      },
      {
        date: "12 Maret 2024",
        title: "Mari Berdoa dengan Kerendahan Hati",
        image: "https://res.cloudinary.com/df1oh69xd/image/upload/v1754498481/lagu_misa_sheets/g9bsaqmvqs7qnymx0sre.jpg",
        summary: "Ajakan untuk membangun kebiasaan doa yang sederhana, rendah hati, dan dekat dengan kehidupan sehari-hari.",
      },
      {
        date: "4 Februari 2024",
        title: "Mengapa Tuhan Menciptakan Perbedaan?",
        image: "https://res.cloudinary.com/df1oh69xd/image/upload/v1754497962/lagu_misa_sheets/er2sy15hf3ii67ureuyn.jpg",
        summary: "Catatan iman tentang keberagaman, kepedulian, dan cara melihat sesama sebagai anugerah.",
      },
    ],

    liturgy: {
      date: "Sabtu, 23 Mei 2026",
      color: "Putih",
      celebration: "Hari Biasa Pekan V Paskah",
      readings: ["Kis. 15:22-31", "Mzm. 57:8-9,10-12", "Yoh. 15:12-17"],
    },

    join: {
      title: "Mari Bergabung dengan KMK St. Thomas Aquinas",
      button: "Gabung Menjadi Anggota",
      href: "https://www.instagram.com/kmk_itera/",
      body: "Kami mengundang semua mahasiswa Katolik ITERA untuk bertumbuh bersama dalam komunitas yang hangat, penuh kasih, dan siap melayani.",
    },

    testimonials: [
      {
        name: "Winky Apriyani",
        meta: "Sains Atmosfer dan Keplanetan / 2023",
        image: "https://www.kmkitera.com/bph20252026/WinkyApriyani.png",
        text: "KMK membantu saya tetap bertumbuh dalam iman selama kuliah dan menjadi keluarga kedua yang saling mendukung.",
      },
      {
        name: "Pius Windu Abimanyu Wicaksono",
        meta: "Teknik Lingkungan / 2022",
        image: "https://www.kmkitera.com/bph20252026/PiusWinduAbimanyuWicaksono.png",
        text: "Bergabung dengan KMK mempertemukan saya dengan banyak teman dan pengalaman organisasi yang membentuk karakter.",
      },
      {
        name: "Michael Mathew",
        meta: "Teknik Informatika / 2023",
        image: "https://www.kmkitera.com/bph20252026/MichaelMathew.png",
        text: "Sebagai mahasiswa baru, KMK memberi ruang untuk merasa diterima dan bertumbuh dalam iman di lingkungan kampus.",
      },
      {
        name: "Chandra Budi Wijaya",
        meta: "Teknik Informatika / 2022",
        image: "https://www.kmkitera.com/bph20252026/ChandraBudiWijaya.png",
        text: "KMK adalah komunitas yang peduli pada perkembangan iman, akademik, dan kehidupan anggota-anggotanya.",
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
        question: "Bagaimana cara bergabung dengan KMK St. Thomas Aquinas ITERA?",
        answer: "Kamu dapat menghubungi pengurus KMK melalui media sosial atau datang langsung pada kegiatan rutin kami.",
      },
      {
        question: "Apa saja kegiatan rutin KMK St. Thomas Aquinas?",
        answer: "Kegiatan rutin meliputi pertemuan mingguan, pendalaman iman, perayaan Ekaristi, kegiatan sosial, dan pengembangan diri.",
      },
      {
        question: "Dimana lokasi sekretariat KMK St. Thomas Aquinas?",
        answer: "Untuk informasi lokasi pertemuan dan agenda terbaru, silakan hubungi pengurus KMK terlebih dahulu.",
      },
      {
        question: "Apakah ada biaya keanggotaan?",
        answer: "Tidak ada biaya wajib. Iuran sukarela biasanya digunakan untuk mendukung kegiatan bersama.",
      },
    ],
  },

  profile: {
    hero: {
      title: "Profil KMK St. Thomas Aquinas",
      subtitle: "Unit Kegiatan Mahasiswa Katolik Institut Teknologi Sumatera",
      image: "https://www.kmkitera.com/comp-bg-profil.webp",
    },
    history: {
      title: "Sejarah",
      image: "https://www.kmkitera.com/bg-sejarah.webp",
      paragraphs: [
        "Awalnya, kegiatan mahasiswa Kristen difasilitasi oleh UKM Komunitas Mahasiswa Kristen Katolik untuk mahasiswa Kristen Protestan dan Katolik. Bertambahnya jumlah mahasiswa mendorong terbentuknya unit khusus.",
        "Pada tahun 2019, KMK St. Thomas Aquinas ITERA hadir sebagai rumah bagi mahasiswa Katolik yang ingin bertumbuh dalam iman, persaudaraan, dan pelayanan.",
        "Nama St. Thomas Aquinas dipilih karena semangatnya memadukan iman dan pengetahuan, selaras dengan kehidupan mahasiswa di institut teknologi.",
      ],
      milestones: [
        { year: "2019", text: "Pendirian KMK St. Thomas Aquinas ITERA" },
        { year: "2019-Sekarang", text: "Pengembangan program rohani, sosial, dan regenerasi anggota" },
      ],
    },
    vision: {
      title: "Visi dan Misi",
      quote: "Menjadikan KMK ITERA sebagai rumah untuk bertumbuh dalam iman dan kasih, meningkatkan kualitas sumber daya anggota, serta terlibat aktif di tengah masyarakat.",
      missions: [
        { number: "01", title: "Menumbuhkan Iman dan Kasih", text: "Menumbuhkan iman dan kasih sebagai dasar kehidupan orang Katolik." },
        { number: "02", title: "Regenerasi Anggota", text: "Mendorong regenerasi melalui peningkatan mutu anggota dan kaderisasi." },
        { number: "03", title: "Meningkatkan Kekeluargaan", text: "Membangun kekeluargaan dengan berlandaskan asas KMK ITERA." },
        { number: "04", title: "Membangun Kebersamaan", text: "Merawat kebersamaan antaranggota KMK, baik di dalam maupun luar organisasi." },
      ],
    },
    organization: {
      roles: [
        { title: "Ketua Umum", text: "Mengkoordinasikan arah pelayanan dan program kerja KMK." },
        { title: "Sekretaris", text: "Menata administrasi, arsip, dan komunikasi organisasi." },
        { title: "Bendahara", text: "Mengelola kebutuhan dana kegiatan dengan transparan." },
        { title: "Departemen Pelayanan", text: "Menggerakkan kegiatan rohani, sosial, dan pengembangan anggota." },
      ],
    },
  },

  events: {
    hero: {
      title: "Galeri Kegiatan",
      subtitle: "Dokumentasi Kegiatan KMK St. Thomas Aquinas ITERA",
      image: "https://www.kmkitera.com/comp-bg-event.webp",
    },
    items: [
      {
        category: "Natal",
        date: "26 Desember 2024",
        participants: "60 peserta",
        title: "Natal KMK 2024",
        location: "ITERA",
        image: "https://res.cloudinary.com/df1oh69xd/image/upload/v1751460311/lagu_misa_sheets/sv9khzgtensahuvcsqy4.jpg",
        text: "Perayaan Natal KMK menjadi momen sukacita, ibadat bersama, penampilan kreatif, dan kebersamaan yang menguatkan persaudaraan.",
      },
      {
        category: "KOD",
        date: "7 Agustus 2024",
        participants: "49 peserta",
        title: "KMK Our Day 2024",
        location: "ITERA",
        image: "https://res.cloudinary.com/df1oh69xd/image/upload/v1754506177/lagu_misa_sheets/t0xpzedm41gsbdhhtlq1.jpg",
        text: "Kegiatan pengenalan dan kebersamaan untuk mempererat relasi antar mahasiswa Katolik melalui sharing, diskusi, dan permainan interaktif.",
      },
      {
        category: "LDKWK",
        date: "25 Mei 2024",
        participants: "39 peserta",
        title: "LDKWK 2024",
        location: "RIMA ITERA",
        image: "https://res.cloudinary.com/df1oh69xd/image/upload/v1754508516/lagu_misa_sheets/uvmu2ngbpwuz69fchz89.jpg",
        text: "Latihan dasar kepemimpinan yang membekali anggota dengan nilai pelayanan, tanggung jawab, dan regenerasi organisasi.",
      },
      {
        category: "Retret",
        date: "9 April 2024",
        participants: "53 peserta",
        title: "Retret KMK Laverna 2024",
        location: "Rumah Retret La Verna",
        image: "https://res.cloudinary.com/df1oh69xd/image/upload/v1749478827/lagu_misa_sheets/tuq7kczx1rxfiovkijsy.jpg",
        text: "Ruang hening untuk berdoa, berefleksi, dan menemukan kembali kedamaian dalam suasana persaudaraan.",
      },
      {
        category: "Perayaan",
        date: "22 Nov 2023",
        participants: "20 peserta",
        title: "Penutupan BKSN",
        location: "ITERA",
        image: "https://res.cloudinary.com/df1oh69xd/image/upload/v1751870779/lagu_misa_sheets/vpbkiwr4heio0mt8za6y.jpg",
        text: "Puncak kegiatan Bulan Kitab Suci Nasional yang mengajak peserta mencintai Sabda dan merawat persaudaraan.",
      },
      {
        category: "Camping",
        date: "31 Okt 2023",
        participants: "150 peserta",
        title: "Camp With KMK Day-4",
        location: "ITERA",
        image: "https://res.cloudinary.com/df1oh69xd/image/upload/v1751903815/lagu_misa_sheets/ti651vh2p0r8ee6thurp.jpg",
        text: "Kegiatan alam dan pengembangan diri yang menekankan kerja sama, ketangguhan, dan kenangan kebersamaan.",
      },
    ],
  },


  prayers: {
    hero: {
      title: "Doa Katolik",
      subtitle: "Temukan berbagai doa harian, devosi, dan doa-doa penting",
      image: "https://www.kmkitera.com/bg-gereja.jpg",
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
