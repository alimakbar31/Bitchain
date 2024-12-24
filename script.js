// Pilih tombol Connect Wallet
const connectWalletButton = document.getElementById('connectWallet');

// Pilih span dengan id tonAddress
const tonAddressElement = document.getElementById('tonAddress');

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
            // Ambil alamat wallet yang terhubung dari hasil connectWallet
            const walletAddress = connectedWallet.account.address;

            // Ganti teks di elemen dengan id tonAddress dengan alamat wallet
            tonAddressElement.textContent = walletAddress;  // Ganti teks span dengan wallet address

            // Sembunyikan ikon setelah terhubung
            const iconElement = connectWalletButton.querySelector('i');
            iconElement.style.display = 'none';  // Sembunyikan icon jika wallet sudah terhubung

            // Opsional: Menyimpan alamat wallet ke localStorage atau sessionStorage untuk penggunaan selanjutnya
            localStorage.setItem('walletAddress', walletAddress); // Menyimpan alamat wallet di browser
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
