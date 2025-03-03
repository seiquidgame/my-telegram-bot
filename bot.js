const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text.toLowerCase();

    const responses = [
        { keywords: ["airdrop"], response: "Our Airdrop Phase I is for our NFT holders, here to own our NFT: https://magiceden.io/mint-terminal/sei/0x75873dd4a039691110a88ab7eec107e645ba9ab5. For Airdrop Phase II, you can join for free at airdrop.seiquid.xyz. Be sure not to abuse the form to avoid disqualification. Follow policy to be qualified." },
        { keywords: ["lp", "liquidity", "price"], response: "Our token grand launch is on Quarter 4. Patience is a virtue! But you can always use it thru our sqmrktplace.seiquid.xyz to buy other NFTs, or at bet.seiquid.xyz to enjoy our casino app and multiply your token." },
        { keywords: ["whitepaper", "roadmap", "info"], response: "Visit our official website https://seiquid.xyz and go to Whitepaper. It also includes our roadmap." },
        { keywords: ["x", "twitter"], response: "Our X account is https://x.com/SeiquidGame" },
        { keywords: ["telegram"], response: "You are in our official TG: https://t.me/+LcIL0smlWs02NTE9" },
        { keywords: ["discord"], response: "Here: https://discord.gg/a8Eq4tUbVY" },
        { keywords: ["referral"], response: "On airdrop.seiquid.xyz, there is Check Submission button, enter your Wallet Address to see how many referrals you have, and other infos." },
        { keywords: ["bot", "robot", "machine"], response: "The only bot here is your mom." },
        { keywords: ["win", "join"], response: "You can join and win thru airdrop.seiquid.xyz, you will get your referral code once you submit the form. Use your referral code to invite more people in. You can check the number of referrals thru the Check Submission page located on the same website I gave you. Don't abuse in submitting form using your referral code as our system will auto-detect abuse, plus we manually check it as well for 2nd verification. Top referrals will be ranked and prizes are on the list of the same page I gave you." }
    ];

    // Check if the user's message contains any keyword
    let foundResponse = null;
    for (const item of responses) {
        if (item.keywords.some(keyword => text.includes(keyword))) {
            foundResponse = item.response;
            break;
        }
    }

    // Send the matched response or a default message
    bot.sendMessage(chatId, foundResponse || "Hello! Please bare a few minutes. Hold on...");
});

console.log("Bot is running...");
