import {transporter} from '../../lib/nodemailer.lib';

export async function sendDailyEmail(submissions: any[]) {
    const formattedRows = submissions.map((s, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${s.name}</td>
        <td>${s.email || ""}</td>
        <td>${s.phone || ''}</td>
        <td>${s.company}</td>
        <td>${s.comment}</td>
      </tr>
    `).join('');
  
    const html = `
    <h2>Meet Engineering - Inquires</h2>
      <h2>Daily Contact Form Submissions</h2>
      <table border="1" cellpadding="5" cellspacing="0">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>${formattedRows}</tbody>
      </table>
    `;
  
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Daily Contact Form Summary',
      html,
    });
  }