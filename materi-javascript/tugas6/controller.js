// controller.js
import users from "./data.js";

const index = () => {
    // Tampilkan data menggunakan map() dalam format asli
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

const store = () => { 
    // Tambahkan data dengan detail spesifik
    const newUsers = [
        { 
            nama: 'Muhammad Rizky', 
            umur: 30, 
            alamat: 'Jl. Kenangan No. 12, Jakarta', 
            email: 'muhammad.rizky@example.com' 
        },
        { 
            nama: 'Siti Rahayu', 
            umur: 28, 
            alamat: 'Jl. Merdeka No. 45, Bandung', 
            email: 'siti.rahayu@example.com' 
        }
    ];

    // Tampilkan data yang akan ditambahkan DALAM FORMAT OBJEK
    console.log('Data yang akan ditambahkan:');
    newUsers.forEach((user) => {
        console.log(user);
    });

    // Push data baru ke array users
    users.push(...newUsers);
    
    console.log('\nData berhasil ditambahkan!');
    return users;
}

const destroy = () => {
    // Hapus data terakhir
    const removedUser = users.pop();
    
    console.log('Data terakhir yang dihapus:');
    console.log(removedUser);
    
    return users;
}

export { index, store, destroy };