const accountSid = process.env.TWILIO_ACCOUNT_SID; // Now loaded from .env
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Now loaded from .env

const client = require('twilio')(accountSid, authToken, {
    lazyLoading: true
});

// Function to send message to whatsapp
// const sendMessage = async (message, senderID) => {

//     try{
//         await client.messages.create({
//             to: senderID,
//             body: message,
//             from: "whatsapp:+14155238886"
//         })
//     }catch(error)
// }