# Wisata Impian - Dokumentasi Proyek

## 📝 Deskripsi Proyek
Wisata Impian adalah sebuah website galeri destinasi wisata yang menampilkan koleksi tempat-tempat wisata impian. Website ini dibuat sebagai bagian dari UTS dengan fokus pada tampilan yang responsif dan interaktif.

## 🛠️ Teknologi yang Digunakan
- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.8
- Custom CSS Variables

## 🎨 Struktur Proyek
```
UTS-D0224308/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── images/
    ├── 1.png
    ├── Bali.jpg
    ├── Lombok.jpg
    └── Raja Ampat.jpg
```

## 📋 Komponen Utama

### 1. Navbar
- Komponen navigasi responsif yang melekat di bagian atas (sticky)
- Menggunakan custom styling dengan efek blur
- Menu: Beranda, Tempat, dan Kontak
- Termasuk toggle button untuk tampilan mobile

### 2. Header/Beranda
- Tampilan hero section dengan dua kolom
- Kolom kiri: Judul, deskripsi, dan tombol CTA
- Kolom kanan: Gambar ikon dengan efek border radius circular
- Fully responsive design

### 3. Destinasi Favorit
- Grid layout dengan card destinasi wisata
- Setiap card memiliki:
  - Gambar destinasi
  - Judul lokasi
  - Deskripsi singkat
  - Tombol "Lihat Selengkapnya"
  - Rating bintang
- Efek hover yang elegan dengan transformasi dan bayangan

## 🎯 Fitur Khusus

### Styling Kustom
```css
:root {
    --bg: rgb(16, 24, 33);
    --card: rgb(16, 24, 33);
    --border-card: rgb(255, 255, 255);
    --color: white;
    --nav-h: 70px;
}
```
- Penggunaan CSS variables untuk konsistensi warna dan styling
- Dark theme dengan aksen putih
- Transisi dan animasi yang halus

### Responsivitas
- Fully responsive design menggunakan Bootstrap grid system
- Breakpoints yang disesuaikan untuk berbagai ukuran layar
- Optimasi gambar untuk berbagai device

### Interaktivitas
```javascript
function validasiForm() {
    // Validasi form kontak
    // Memeriksa input email, nama, dan pesan
    // Menampilkan feedback kepada user
}
```
- Validasi form kontak
- Feedback visual untuk input user
- Smooth scroll behavior

## 🔧 Panduan Penggunaan

### Menjalankan Proyek
1. Clone repository atau download files
2. Buka `index.html` di browser modern
3. Pastikan koneksi internet aktif untuk loading Bootstrap CDN

### Memodifikasi Styling
- Edit `styles.css` untuk kustomisasi tampilan
- Gunakan CSS variables di `:root` untuk mengubah tema
- Sesuaikan breakpoints sesuai kebutuhan

### Menambah Destinasi
1. Tambahkan gambar di folder `images/`
2. Copy struktur card HTML yang ada
3. Sesuaikan konten (gambar, judul, deskripsi)

## 📱 Kompatibilitas
- Chrome (versi terbaru)
- Firefox (versi terbaru)
- Safari (versi terbaru)
- Edge (versi terbaru)
- Responsive pada mobile devices

## 👤 Informasi Pengembang
Dikembangkan oleh: Achmad Aidhil (D0224308)

## 🔒 Performa dan Optimasi
- Penggunaan CSS minimal dan efisien
- Optimasi gambar untuk load time yang lebih cepat
- Smooth scrolling untuk navigasi yang lebih baik
- Penggunaan Bootstrap untuk komponen UI yang konsisten