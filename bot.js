const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables from .env file
dotenv.config();

// Initialize bot
const bot = new TelegramBot(process.env.TELEGRAM_API_TOKEN, { polling: true });

// Initialize Express app
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS files) from the root of the directory
app.use(express.static(__dirname));

// Handle "/start" command in Telegram
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    
    const options = {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "Join Airdrop",
                    web_app: { url: "https://alimakbar31.github.io/Bitchain/" }
                }]
            ]
        }
    };

    // Send the welcome message
    bot.sendMessage(chatId, "Welcome to Bitchain Airdrop! Click below to join:", options);

    // Get user information for further processing
    const userId = msg.from.id;
    const username = msg.from.username;
    const firstName = msg.from.first_name;

    // Check if the user is a Telegram Premium member
    bot.getChatMember(chatId, userId).then((chatMember) => {
        const isPremium = chatMember.user.is_premium; // Check if the user has a premium account
        console.log(`User ${firstName} (@${username}) is ${isPremium ? 'Premium' : 'Not Premium'}`);

        // Here you can send further data to the user or backend if needed
    }).catch((err) => {
        console.error('Error while checking user status:', err);
    });
});

// Endpoint to track when a user joins the airdrop
app.post('/track-join', (req, res) => {
    const { username, userId, firstName } = req.body;

    console.log(`User joined the airdrop: ${firstName} (@${username}), UserID: ${userId}`);

    // You can now process this data as needed, e.g., store in database, send to Telegram, etc.
    // Respond to the frontend
    res.json({ message: 'Join tracked successfully!' });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
