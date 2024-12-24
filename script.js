// Initialize Telegram Web App
const tg = window.Telegram.WebApp;

// Handling click on the 'Join Airdrop' button
document.getElementById('startAirdrop').addEventListener('click', () => {
    // Send data to Telegram bot (could be used for backend processing)
    tg.sendData("airdrop_joined");

    // Close Web App and return to Telegram
    tg.close();
});
