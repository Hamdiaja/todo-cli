// Import module readline dari Node.js untuk membaca input dari terminal
const readline = require('readline');

// Konfigurasi readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array untuk menyimpan daftar task
let tasks = [];

// Fungsi untuk menampilkan menu utama
function showMenu() {
    console.log('\n=== To-Do List CLI ===');
    console.log('1. Lihat Daftar Task');
    console.log('2. Tambah Task');
    console.log('3. Hapus Task');
    console.log('4. Keluar');
    rl.question('Pilih opsi (1-4): ', handleOption);
}

// Fungsi untuk menangani pilihan user
function handleOption(answer) {
    switch(answer) {
        case '1':
            viewTasks();
            break;
        case '2':
            addTask();
            break;
        case '3':
            deleteTask();
            break;
        case '4':
            console.log('Keluar dari aplikasi. Terima kasih!');
            rl.close();
            break;
        default:
            console.log('Opsi tidak valid.');
            showMenu();
    }
}

// Fungsi untuk melihat daftar task
function viewTasks() {
    if(tasks.length === 0) {
        console.log('Tidak ada task.');
    } else {
        console.log('\nDaftar Task:');
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
    showMenu();
}

// Fungsi untuk menambah task
function addTask() {
    rl.question('Masukkan task baru: ', (task) => {
        tasks.push(task);
        console.log('Task berhasil ditambahkan.');
        showMenu();
    });
}

// Fungsi untuk menghapus task
function deleteTask() {
    viewTasks();
    rl.question('Masukkan nomor task yang ingin dihapus: ', (num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            console.log('Task berhasil dihapus.');
        } else {
            console.log('Nomor task tidak valid.');
        }
        showMenu();
    });
}

// Mulai program
showMenu();