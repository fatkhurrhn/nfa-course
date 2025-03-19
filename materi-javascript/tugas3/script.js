let produkToko = [{
        id: 1,
        nama: "Laptop",
        harga: 7000000,
        stok: 5
    },
    {
        id: 2,
        nama: "Mouse",
        harga: 200000,
        stok: 10
    },
    {
        id: 3,
        nama: "Keyboard",
        harga: 350000,
        stok: 7
    }
];

const tabelProduk = document.getElementById('tabelProduk');
const formTambahProduk = document.getElementById('formTambahProduk');
const formHapusProduk = document.getElementById('formHapusProduk');
const notifikasi = document.getElementById('notifikasi');
const notifikasiJudul = document.getElementById('notifikasiJudul');
const notifikasiPesan = document.getElementById('notifikasiPesan');

function tampilkanNotifikasi(judul, pesan, tipe) {
    notifikasiJudul.textContent = judul;
    notifikasiPesan.textContent = pesan;

    const headerNotifikasi = notifikasi.querySelector('.toast-header');
    headerNotifikasi.className = 'toast-header';
    if (tipe === 'sukses') {
        headerNotifikasi.classList.add('bg-success', 'text-white');
    } else if (tipe === 'error') {
        headerNotifikasi.classList.add('bg-danger', 'text-white');
    } else {
        headerNotifikasi.classList.add('bg-info', 'text-white');
    }

    const toast = new bootstrap.Toast(notifikasi);
    toast.show();
}

function tambahProduk(nama, harga, stok) {
    let idTertinggi = 0;
    for (let i = 0; i < produkToko.length; i++) {
        if (produkToko[i].id > idTertinggi) {
            idTertinggi = produkToko[i].id;
        }
    }

    const idBaru = idTertinggi + 1;

    const produkBaru = {
        id: idBaru,
        nama: nama,
        harga: parseInt(harga),
        stok: parseInt(stok)
    };
    produkToko.push(produkBaru);
    tampilkanNotifikasi('Berhasil', `Produk ${nama} berhasil ditambahkan dengan ID: ${idBaru}`, 'sukses');
    tampilkanProduk();
}

function hapusProduk(id) {
    id = parseInt(id);
    let indeksProduk = -1;
    for (let i = 0; i < produkToko.length; i++) {
        if (produkToko[i].id === id) {
            indeksProduk = i;
            break;
        }
    }

    if (indeksProduk !== -1) {
        const namaProduk = produkToko[indeksProduk].nama;
        produkToko.splice(indeksProduk, 1);

        tampilkanNotifikasi('Berhasil', `Produk ${namaProduk} dengan ID: ${id} berhasil dihapus`, 'sukses');
    } else {
        tampilkanNotifikasi('Error', `Produk dengan ID: ${id} tidak ditemukan`, 'error');
    }

    tampilkanProduk();
}

function tampilkanProduk() {
    tabelProduk.innerHTML = '';
    for (let i = 0; i < produkToko.length; i++) {
        const produk = produkToko[i];
        const barisBaru = document.createElement('tr');
        const hargaFormatted = produk.harga.toLocaleString('id-ID');
        barisBaru.innerHTML = `
            <td>${produk.id}</td>
            <td>${produk.nama}</td>
            <td>${hargaFormatted}</td>
            <td>${produk.stok}</td>
        `;
        tabelProduk.appendChild(barisBaru);
    }
}

formTambahProduk.addEventListener('submit', function (e) {
    e.preventDefault();
    const namaProduk = document.getElementById('namaProduk').value;
    const hargaProduk = document.getElementById('hargaProduk').value;
    const stokProduk = document.getElementById('stokProduk').value;
    tambahProduk(namaProduk, hargaProduk, stokProduk);
    this.reset();
});
formHapusProduk.addEventListener('submit', function (e) {
    e.preventDefault();
    const idProduk = document.getElementById('idProduk').value;
    hapusProduk(idProduk);
    this.reset();
});
document.addEventListener('DOMContentLoaded', function () {
    tampilkanProduk();
});