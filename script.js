// Logical OR (||)
// Mengembalikan BENAR jika kedua operan BENAR


let penghasilan = false;
let kredit = false;
let syaratPinjaman = penghasilan || kredit;
console.log('Berhak', syaratPinjaman);

// NOT (!)
let aplikasiDitolak = !syaratPinjaman;
console.log('Aplikasi Ditolak', aplikasiDitolak);