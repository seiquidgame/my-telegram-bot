const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Use your Telegram bot token from BotFather
const token = process.env.TELEGRAM_BOT_TOKEN;

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text.toLowerCase();

    if (text === "airdrop") {
        bot.sendMessage(chatId, "Our Airdrop Phase I is for our NFT holders, here to own our NFT: https://magiceden.io/mint-terminal/sei/0x75873dd4a039691110a88ab7eec107e645ba9ab5. For Airdrop Phase II, you can join for free at airdrop.seiquid.xyz. Be sure not to abuse the form to avoid disqualification. Follow policy to be qualified.");
    }
    if (text === "LP") {
        bot.sendMessage(chatId, "Our token grand launch is on Quarter 4. Patience is a virtue! But you can always use it thru our sqmrktplace.seiquid.xyz to buy other NFTs, or at bet.seiquid.xyz to enjoy our casino app and multiply your token.");
    }
    if (text === "liquidity") {
        bot.sendMessage(chatId, "Our token grand launch is on Quarter 4. Patience is a virtue! But you can always use it thru our sqmrktplace.seiquid.xyz to buy other NFTs, or at bet.seiquid.xyz to enjoy our casino app and multiply your token.");
    }
    if (text === "price") {
        bot.sendMessage(chatId, "Our token grand launch is on Quarter 4. Patience is a virtue! But you can always use it thru our sqmrktplace.seiquid.xyz to buy other NFTs, or at bet.seiquid.xyz to enjoy our casino app and multiply your token.");
    } 
    if (text === "whitepaper") {
        bot.sendMessage(chatId, "Visit our official website https://seiquid.xyz and go to Whitepaper. It also includes our roadmap.");
    }
    if (text === "roadmap") {
        bot.sendMessage(chatId, "Visit our official website https://seiquid.xyz and go to Whitepaper. It also includes our roadmap.");
    }
    if (text === "X") {
        bot.sendMessage(chatId, "Our X account is https://x.com/SeiquidGame");
    }
    if (text === "Twitter") {
        bot.sendMessage(chatId, "Our X account is https://x.com/SeiquidGame");
    }
    if (text === "Telegram") {
        bot.sendMessage(chatId, "You are in our official TG: https://t.me/+LcIL0smlWs02NTE9");
    }
    if (text === "Discord") {
        bot.sendMessage(chatId, "Here: https://discord.gg/a8Eq4tUbVY");
    }
    if (text === "info") {
        bot.sendMessage(chatId, "Visit our official website https://seiquid.xyz and go to Whitepaper. It also includes our roadmap.");
    }
    if (text === "referral") {
        bot.sendMessage(chatId, "On airdrop.seiquid.xyz, there is Check Submission button, enter your Wallet Address to see how many referrals you have, and other infos.");
    }
    if (text === "are you a bot?") {
        bot.sendMessage(chatId, "The only bot here is your mom.");
    } 
    else {
        bot.sendMessage(chatId, "Hello! Please bare a few minutes. Hold on...");
    }
});

console.log("Bot is running...");
