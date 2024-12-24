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

// Inisialisasi TON Connect UI
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://alimakbar31.github.io/Bitchain/tonconnect-manifest.json'
});

// Fungsi untuk menghubungkan wallet menggunakan TON Connect
async function connectWallet() {
    try {
        const connectedWallet = await tonConnectUI.connectWallet();  // Menghubungkan wallet
        console.log("Wallet connected:", connectedWallet);

        if (connectedWallet) {
            // Ambil alamat wallet yang terhubung
            const walletAddress = connectedWallet.walletAddress;

            // Ubah teks tombol menjadi alamat wallet
            const walletElement = connectWalletButton.querySelector('span');
            walletElement.textContent = walletAddress;  // Ganti teks span dengan wallet address

            // Sembunyikan ikon setelah terhubung
            const iconElement = connectWalletButton.querySelector('i');
            iconElement.style.display = 'none';  // Sembunyikan icon jika sudah terhubung
        }

    } catch (error) {
        console.error("Gagal terhubung ke wallet:", error);
        alert("Terjadi kesalahan saat menghubungkan wallet.");
    }
}

// Event listener untuk tombol Connect Wallet
connectWalletButton.addEventListener('click', (e) => {
    e.preventDefault();  // Mencegah aksi default
    connectWallet();  // Menjalankan fungsi connectWallet
});
