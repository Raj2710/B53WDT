import sgMail from '@sendgrid/mail'

const sendEmail = async(to,subject,html)=>{
    const msg = {
        to: to, // Change to your recipient
        from: 'nagarajansai2727@gmail.com', // Change to your verified sender
        subject: subject,
        text: html,
        html: html,
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        throw error
    })
}

const sendWelcomeEmail = async (name,type,title)=>{
    try {
        let html = `<div>
        <h3>Welcome Mr. ${name},</h3>
        <p>Greetings for the day! We have recevied your request. We will be notifying you the further updates
            via email. You can also check the status <a href="">here</a>
        </p>
        <div>
            <table>
                <tr>
                    <td>Type</td>
                    <td>${type}</td>
                </tr>
                <tr>
                    <td>Title</td>
                    <td>${title}</td>
                </tr>
            </table>
        </div>
        <div>
            --<br>
            Thanks,<br>
            Zen Desk Team
            
        </div>
    </div>`
    await sendEmail('nagarajan2727@outlook.com','Test Email',html)
    } catch (error) {
        throw error
    }
}

export default {
    sendWelcomeEmail
}