export const environment = {
  production: false,
  emailjs: {
    serviceId: 'service_EJTOUR',
    templateId: 'template_frsbm1l',
    // Chave pública do EmailJS. É esperado que fique visível no bundle do
    // cliente (é assim que o EmailJS funciona), mas o domínio de origem
    // deve ser restringido no painel do EmailJS (Account > Security)
    // para que ninguém use esta chave a partir de outro site.
    publicKey: 'yoAuQHMVbz_a_Y1pO',
  },
  whatsappNumber: '5545999492697',
};
