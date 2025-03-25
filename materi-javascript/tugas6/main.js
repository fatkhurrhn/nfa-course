// main.js
import { index, store, destroy } from "./controller.js";

const main = () => {
    console.log('=== Daftar User Awal ===');
    index(); // Tampilkan data awal

    console.log('\n=== Menambah Data ===');
    store(); // Tambah dua data

    console.log('\n=== Daftar User Setelah Ditambah ===');
    index(); // Tampilkan data setelah ditambah

    console.log('\n=== Menghapus Data ===');
    destroy(); // Hapus data terakhir

    console.log('\n=== Daftar User Setelah Dihapus ===');
    index(); // Tampilkan data setelah dihapus
}

main();