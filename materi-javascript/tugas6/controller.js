// controller.js
import users from "./data.js";

const index = () => {
    // Tampilkan data menggunakan map()
    const userList = users.map((user, index) => {
        console.log(`User ${index + 1}:`);
        console.log(`Nama: ${user.nama}`);
        console.log(`Umur: ${user.umur}`);
        console.log(`Alamat: ${user.alamat}`);
        console.log(`Email: ${user.email}`);
        console.log('-------------------');
        return user;
    });
    return userList;
}

const store = (newUser) => { 
    // Tambahkan data 
    users.push(
        {
            nama: 'Kurniawan Adi',
            umur: 30,
            alamat: 'Jl. Patimura No. 15, Bogor',
            email: 'kurniawan.adi@workmail.com'
        },
        {
            nama: 'Lia Damayanti',
            umur: 29,
            alamat: 'Jl. Sultan Agung No. 22, Bekasi',
            email: 'lia.damayanti@personal.id'
        }
    );
    console.log('Data berhasil ditambahkan!');
    return users;
}

const destroy = () => {
    // Hapus data (misalnya hapus data terakhir)
    const removedUser = users.pop();
    console.log('Data terakhir berhasil dihapus:');
    console.log(removedUser);
    return users;
}

export { index, store, destroy };