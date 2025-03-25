// main.js
import { index, store, destroy } from "./controller.js";

const main = () => {
    console.log('=== Daftar User Awal ===');
    index(); 

    console.log('\n=== Menambah Data ===');
    store(); 

    console.log('\n=== Daftar User Setelah Ditambah ===');
    index(); 

    console.log('\n=== Menghapus Data ===');
    destroy(); khir

    console.log('\n=== Daftar User Setelah Dihapus ===');
    index(); 
}

main();