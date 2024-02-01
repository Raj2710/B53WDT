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

const sendWelcomeEmail = async (email,name,type,title,id)=>{
    try {
        let html = `<div>
        <h3>Welcome Mr. ${name},</h3>
        <p>Greetings for the day! We have recevied your request. We will be notifying you the further updates
            via email. You can also check the status <a href='${process.env.WEB_URL}/request/${id}'>here</a>
        </p>
        <div>
            <table>
                <tr>
                    <td>Type:</td>
                    <td>${type}</td>
                </tr>
                <tr>
                    <td>Title:</td>
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
    await sendEmail(email,'We have received your request',html)
    } catch (error) {
        throw error
    }
}

const sendAssignedEmail = async (email,name,type,title,user,id)=>{
    try {
        let html = `<div>
        <h3>Welcome Mr. ${name},</h3>
        <p>Greetings for the day! Your request has been assigned to our associate. He/She will be in touch with you and ensure smooth closure. You can also check the status <a href='${process.env.WEB_URL}/request/${id}'>here</a>
        </p>
        <div>
            <table>
                <tr>
                    <td>Title:</td>
                    <td>${title}</td>
                </tr>
                <tr>
                    <td>Type:</td>
                    <td>${type}</td>
                </tr>
                <tr>
                <td>Assigned To:</td>
                <td>${user}</td>
            </tr>
            </table>
        </div>
        <div>
            --<br>
            Thanks,<br>
            Zen Desk Team
            
        </div>
    </div>`
    await sendEmail(email,'Request Assigned',html)
    } catch (error) {
        throw error
    }
}

const sendClosureEmail = async (email,name,title,resolution,id)=>{
    try {
        let html = `<div>
        <h3>Welcome Mr. ${name},</h3>
        <p>Greetings for the day! The request is resolved. You can also check the status <a href=''${process.env.WEB_URL}/request/${id}''>here</a>
        </p>
        <div>
            <table>
                <tr>
                    <td>Title:</td>
                    <td>${title}</td>
                </tr>
                <tr>
                    <td>Resolution:</td>
                    <td>${resolution}</td>
                </tr>
            </table>
        </div>
        <div>
            --<br>
            Thanks,<br>
            Zen Desk Team
            
        </div>
    </div>`
    await sendEmail(email,'Request Closed',html)
    } catch (error) {
        throw error
    }
}

export default {
    sendWelcomeEmail,
    sendAssignedEmail,
    sendClosureEmail
}