import './App.css'
import { EmailService } from './service/EmailService';

function App() {
  const email = new EmailService();
  email.enviar('lucas@exemplo.com', 'Boas-vindas', 'Olá, Lucas!');

  return <p>E-mail enviado com sucesso!</p>;
}

export default App