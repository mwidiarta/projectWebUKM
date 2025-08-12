PROJECT COMPANY PROFILE - COMPUTER CLUB DIGITAL TALENT 2025

Struktur Folder:
- src : Berisi file sumber HTML, gambar, input.css, dan JavaScript
- dist : Berisi hasil akhir (final output) yang siap ditampilkan di browser
- package.json & package-lock.json : Berisi daftar dependensi project

CARA MELIHAT PROJECT WEB:
1. Buka file dist/index.html di browser
   (JANGAN membuka src/index.html karena file ini belum terhubung ke CSS hasil build)

Cara Build Ulang Project (Opsional):
1. Pastikan Node.js sudah terinstall di komputer (disarankan versi 18 atau lebih)
2. Buka terminal/command prompt di folder project ini
3. Jalankan perintah:
   npm install
   npm run build

Perintah tersebut akan:
- Menyalin file HTML, gambar, dan JS dari folder src ke dist
- Meng-compile Tailwind CSS dari src/css/input.css menjadi dist/css/style.css (minified)


Terima kasih.
