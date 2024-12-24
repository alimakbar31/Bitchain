// Select all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Add click event to each menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all menu items
        menuItems.forEach(menu => menu.classList.remove('active'));

        // Add active class to clicked menu item
        item.classList.add('active');
    });
});

// Pilih tombol Connect Wallet
const connectWalletButton = document.getElementById('connectWallet');

// Fungsi untuk menghubungkan wallet menggunakan TON Connect
async function connectWallet() {
    try {
        // Inisialisasi TON Connect Client
        const tonConnect = new TonConnect();

        // Mulai koneksi dan buka pilihan wallet
        const connection = await tonConnect.connect();

        // Jika koneksi berhasil, tampilkan wallet address
        if (connection) {
            const { walletAddress } = connection;  // Ambil wallet address dari connection

            // Ubah teks tombol menjadi alamat wallet
            const walletElement = connectWalletButton.querySelector('span');
            walletElement.textContent = walletAddress;  // Ganti teks span dengan wallet address

            // Anda juga bisa menyembunyikan icon atau menambahkan styling jika diperlukan
            const iconElement = connectWalletButton.querySelector('i');
            iconElement.style.display = 'none';  // Sembunyikan icon jika sudah terhubung

            // Opsional: Menambahkan log atau lainnya
            console.log("Wallet Address:", walletAddress);
        }
    } catch (error) {
        console.error("Gagal terhubung ke wallet:", error);
        alert("Terjadi kesalahan saat menghubungkan wallet.");
    }
}

// Event listener untuk tombol Connect Wallet
connectWalletButton.addEventListener('click', (e) => {
    e.preventDefault();
    connectWallet();
});

