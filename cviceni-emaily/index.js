import { Email } from './Email/index.js';

const unreadElm = document.getElementById('unread');
const readElm = document.getElementById('read');

const renderSection = (emails, element) => {
    element.innerHTML = emails.map((email) => {
        return Email({
            senderName: email.sender.name, subject: email.subject,
            time: email.time, unread: email.unread
        })
    })
        .join('');
};

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
    .then((response) => response.json())
    .then((data) => renderSection(data.emails, unreadElm));

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
    .then((response) => response.json())
    .then((data) => renderSection(data.emails, readElm));