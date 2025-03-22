// Data Produk
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Headphone", harga: 1500000 },
    { id: 4, nama: "Monitor", harga: 3000000 },
    { id: 5, nama: "Keyboard", harga: 800000 }
  ];
  
  // Menampilkan Produk dengan Destructuring
  function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkList.forEach(({ id, nama, harga }) => {
      console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga.toLocaleString()}`);
    });
  }
  
  // Menambahkan Produk dengan Spread Operator
  function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
    console.log(`Produk baru ditambahkan: ${nama}`);
  }
  
  // **Menghapus Produk dengan Rest Parameter**
  function hapusProduk(id) {
    produkList = produkList.filter(produk => produk.id !== id);
    console.log(`Produk dengan ID ${id} telah dihapus`);
  }
  
  // **Event Handler**
  const eventHandler = {
    tambah: (id, nama, harga) => {
      tambahProduk(id, nama, harga);
      tampilkanProduk();
    },
    hapus: (id) => {
      hapusProduk(id);
      tampilkanProduk();
    },
    tampilkan: () => tampilkanProduk()
  };
  
  // **Contoh Penggunaan
  console.log("===== Inisialisasi Data =====");
  tampilkanProduk();
  
  console.log("\n===== Menambah Produk =====");
  eventHandler.tambah(6, "Tablet", 7000000);
  
  console.log("\n===== Menghapus Produk =====");
  eventHandler.hapus(2);
  