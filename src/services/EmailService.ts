export class EmailService {
  #servidor: string = 'smtp.exemplo.com';
  #remetente: string = 'naoresponda@site.com';

  enviar(destinatario: string, assunto: string, corpo: string) {
    console.log(`Conectando ao servidor: ${this.#servidor}`);
    console.log(`Remetente: ${this.#remetente}`);
    console.log(`Enviando e-mail para ${destinatario}`);
    console.log(`Assunto: ${assunto}`);
    console.log(`Corpo: ${corpo}`);
  }
}
