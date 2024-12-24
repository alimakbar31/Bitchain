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

// Seleksi tombol Connect Wallet
const connectWalletButton = document.getElementById('connectWallet');

// Fungsi untuk menghubungkan wallet
async function connectWallet() {
    try {
        // Inisialisasi TON Client
        const client = new TonClient({
            network: {
                server_address: "https://main.ton.dev"
            }
        });

        // Periksa apakah wallet sudah terhubung
        const wallet = await client.wallets.get("ton_connect");

        // Menyambungkan ke wallet pengguna
        const result = await wallet.connect();

        if (result.success) {
            alert("Wallet berhasil terhubung!");
            console.log("Wallet Address:", result.walletAddress);
            // Anda bisa menyimpan address atau melakukan hal lain setelah wallet terhubung
        } else {
            alert("Gagal terhubung ke wallet.");
        }

        client.close();
    } catch (error) {
        console.error("Error connecting wallet:", error);
        alert("Terjadi kesalahan saat mencoba menghubungkan wallet.");
    }
}

// Event listener untuk tombol Connect Wallet
connectWalletButton.addEventListener('click', (e) => {
    e.preventDefault();
    connectWallet();
});

