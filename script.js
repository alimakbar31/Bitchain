// Initialize Telegram Web App
// const tg = window.Telegram.WebApp;

// // Handling click on the 'Join Airdrop' button
// document.getElementById('startAirdrop').addEventListener('click', () => {
//     // Send data to Telegram bot (could be used for backend processing)
//     tg.sendData("airdrop_joined");

//     // Close Web App and return to Telegram
//     tg.close();
// });

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
