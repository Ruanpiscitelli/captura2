import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not defined');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

type EmailData = {
  name: string;
  email: string;
  phone: string;
};

export async function sendWelcomeEmail({ name, email }: EmailData) {
  const msg = {
    to: email,
    from: 'seu@ruanpiscitelli.com', // Altere para seu email verificado no SendGrid
    subject: 'Bem-vindo à Newsletter de Marketing Digital',
    templateId: 'd-XXXXXXXXXXXXXXXXXXXXXXXX', // Substitua pelo ID do seu template
    dynamicTemplateData: {
      name: name,
    },
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw new Error('Falha ao enviar email de boas-vindas');
  }
}

export async function addToMarketingList({ name, email, phone }: EmailData) {
  // Aqui você pode adicionar a lógica para incluir o contato em sua lista de marketing
  // Por exemplo, usando a API de Contatos do SendGrid
  const data = {
    contacts: [
      {
        email,
        first_name: name.split(' ')[0],
        last_name: name.split(' ').slice(1).join(' '),
        phone_number: phone,
      },
    ],
  };

  try {
    const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Falha ao adicionar contato à lista de marketing');
    }
  } catch (error) {
    console.error('Erro ao adicionar à lista:', error);
    throw new Error('Falha ao adicionar à lista de marketing');
  }
}