import twilio from 'twilio'

const accountSid = 'AC13922568e9f0699b91cbc8c7ac8b861a';
const authToken = '9864c93663c6543b0febcd72f4a9304d';
const client = twilio(accountSid, authToken);
client.messages
    .create({
        body: 'Yoww',
        from: '+14783128681',
        to: '+91 9100865491'
    })
    .then(message => console.log(message.sid));