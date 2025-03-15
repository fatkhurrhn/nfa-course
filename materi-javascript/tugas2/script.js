const daftarPegawai = [{
    nama: "Dodi Prayodi",
    umur: 25,
    jabatan: "Manajer",
    status: "Menikah"
}];

function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
}

function hitungGajiPokok(jabatan) {
    return jabatan === "Manajer" ? 15000000 : jabatan === "Asisten Manajer" ? 10000000 : 5000000;
}

function hitungTotalGajiSeluruh() {
    return daftarPegawai.reduce((total, pegawai) => {
        const gajiPokok = hitungGajiPokok(pegawai.jabatan);
        const tunjanganJabatan = gajiPokok * 0.15;
        const bpjs = gajiPokok * 0.10;
        const tunjanganKeluarga = pegawai.status === "Menikah" ? gajiPokok * 0.20 : 0;
        return total + gajiPokok + tunjanganJabatan + tunjanganKeluarga - bpjs;
    }, 0);
}

function renderTabel() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";
    
    daftarPegawai.forEach(pegawai => {
        const gajiPokok = hitungGajiPokok(pegawai.jabatan);
        const tunjanganJabatan = gajiPokok * 0.15;
        const bpjs = gajiPokok * 0.10;
        const tunjanganKeluarga = pegawai.status === "Menikah" ? gajiPokok * 0.20 : 0;
        
        const row = `<tr>
            <td>${pegawai.nama}</td>
            <td>${pegawai.umur} tahun</td>
            <td>${pegawai.jabatan}</td>
            <td>${pegawai.status}</td>
            <td>${formatRupiah(gajiPokok)}</td>
            <td>${formatRupiah(tunjanganJabatan)}</td>
            <td>${formatRupiah(bpjs)}</td>
            <td>${formatRupiah(tunjanganKeluarga)}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
    
    document.getElementById("tableFoot").innerHTML = `
        <tr>
            <td colspan="4">Total Gaji Seluruh Pegawai</td>
            <td colspan="4">${formatRupiah(hitungTotalGajiSeluruh())}</td>
        </tr>
    `;
}

document.getElementById("employeeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const namaBaru = document.getElementById("nama").value;
    const umurBaru = parseInt(document.getElementById("umur").value);
    const jabatanBaru = document.getElementById("jabatan").value;
    const statusBaru = document.getElementById("status").value;
    
    daftarPegawai.push({ nama: namaBaru, umur: umurBaru, jabatan: jabatanBaru, status: statusBaru });
    renderTabel();
    this.reset();
});

window.onload = renderTabel;
