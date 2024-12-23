// Initialize Telegram Web App
const tg = window.Telegram.WebApp;

// Handle when the web app is loaded
tg.ready();

// Get user data
const user = tg.initDataUnsafe; // Retrieve user data from Telegram Web App

const username = user?.user?.username || "No Username";
const userId = user?.user?.id || "No ID";
const firstName = user?.user?.first_name || "No Name";

// Handling click on the 'Join Airdrop' button
document.getElementById('startAirdrop').addEventListener('click', () => {
    // Send data to your backend to track the user's action
    fetch('/track-join', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            userId: userId,
            firstName: firstName,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Join tracked successfully");

        // Show user info on the page
        document.getElementById('userInfo').style.display = 'block'; // Show the user info div
        document.getElementById('username').textContent = `Username: ${username}`;
        document.getElementById('userId').textContent = `User ID: ${userId}`;
        document.getElementById('firstName').textContent = `First Name: ${firstName}`;
    });

    // Send data to Telegram bot (could be used for backend processing)
    tg.sendData("airdrop_joined");

    // Close Web App and return to Telegram
    tg.close();
});
