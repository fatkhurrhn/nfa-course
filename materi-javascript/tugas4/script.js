   class Kendaraan {
       constructor(nama) {
           this.nama = nama;
           this.tersedia = true;
       }

       sewa() {
           this.tersedia = false;
       }

       kembalikan() {
           this.tersedia = true;
       }
   }

   class Pelanggan {
       constructor(nama, nomorTelepon, kendaraanDisewa) {
           this.nama = nama;
           this.nomorTelepon = nomorTelepon;
           this.kendaraanDisewa = kendaraanDisewa;
       }

       getInfo() {
           return {
               nama: this.nama,
               nomorTelepon: this.nomorTelepon,
               kendaraanDisewa: this.kendaraanDisewa
           };
       }
   }

   class SistemPenyewaan {
       constructor() {
           this.daftarPelanggan = [];
           this.idCounter = 1;
       }

       tambahPenyewaan(nama, nomorTelepon, kendaraan) {
           const pelanggan = new Pelanggan(nama, nomorTelepon, kendaraan);
           const kendaraanObj = new Kendaraan(kendaraan);
           kendaraanObj.sewa();

           const id = this.idCounter++;
           this.daftarPelanggan.push({
               id: id,
               pelanggan: pelanggan
           });

           return id;
       }

       getDaftarPelanggan() {
           return this.daftarPelanggan;
       }

       hapusPenyewaan(id) {
           const index = this.daftarPelanggan.findIndex(item => item.id === id);
           if (index !== -1) {
               const pelanggan = this.daftarPelanggan[index].pelanggan;
               const kendaraanObj = new Kendaraan(pelanggan.kendaraanDisewa);
               kendaraanObj.kembalikan();

               this.daftarPelanggan.splice(index, 1);
               return true;
           }
           return false;
       }
   }

   const sistemPenyewaan = new SistemPenyewaan();
   let dataTable;

   function renderDaftarPenyewaan() {
       const daftarPelanggan = sistemPenyewaan.getDaftarPelanggan();
       const tbody = document.getElementById('daftarPenyewaan');

       if (dataTable) {
           dataTable.destroy();
       }

       tbody.innerHTML = '';

       daftarPelanggan.forEach((item, index) => {
           const pelanggan = item.pelanggan;
           const info = pelanggan.getInfo();

           const row = document.createElement('tr');
           row.innerHTML = `
                <td>${index + 1}</td>
                <td>${info.nama}</td>
                <td>${info.nomorTelepon}</td>
                <td>${info.kendaraanDisewa}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="hapusPenyewaan(${item.id})">
                        Kembalikan
                    </button>
                </td>
            `;

           tbody.appendChild(row);
       });

       dataTable = $('#tabelPenyewaan').DataTable({
           language: {
               url: 'https://cdn.datatables.net/plug-ins/1.13.4/i18n/id.json'
           },
           responsive: true
       });
   }

   function tambahPenyewaan(event) {
       event.preventDefault();

       const nama = document.getElementById('nama').value;
       const nomorTelepon = document.getElementById('nomorTelepon').value;
       const kendaraan = document.getElementById('kendaraan').value;

       if (nama && nomorTelepon && kendaraan) {
           sistemPenyewaan.tambahPenyewaan(nama, nomorTelepon, kendaraan);
           renderDaftarPenyewaan();

           document.getElementById('formPenyewaan').reset();

           alert('Penyewaan berhasil ditambahkan!');
       }
   }

   function hapusPenyewaan(id) {
       if (confirm('Apakah Anda yakin ingin mengembalikan kendaraan ini?')) {
           sistemPenyewaan.hapusPenyewaan(id);
           renderDaftarPenyewaan();
           alert('Kendaraan berhasil dikembalikan!');
       }
   }

   document.getElementById('formPenyewaan').addEventListener('submit', tambahPenyewaan);

   window.onload = function () {
       sistemPenyewaan.tambahPenyewaan('Fathur Ar-Rahman', '081234567890', 'Mobil - Honda Brio');
       sistemPenyewaan.tambahPenyewaan('Salman Al-Farisi ', '087654321098', 'Motor - Yamaha NMAX');
       sistemPenyewaan.tambahPenyewaan('Rizky Saputra Aji', '089876543210', 'Mobil - Mitsubishi Xpander');

       renderDaftarPenyewaan();
   };