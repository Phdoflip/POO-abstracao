export class EmailService {
  #servidor: string = 'smtp.exemplo.com';
  #remetente: string = 'naoresponda@site.com';

  enviar(destinatario: string, assunto: string, corpo: string) {
    // Internamente poderia usar nodemailer ou outro serviço de envio de e-mails
    console.log(`Conectando ao servidor: ${this.#servidor}`);
    console.log(`Remetente: ${this.#remetente}`);
    console.log(`Enviando e-mail para ${destinatario}`);
    console.log(`Assunto: ${assunto}`);
    console.log(`Corpo: ${corpo}`);
  }
}