import { useState } from 'react';
import './App.css';
import { EmailService } from './services/EmailService';

function App() {
  const [destinatario, setDestinatario] = useState('');
  const [assunto, setAssunto] = useState('');
  const [corpo, setCorpo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [statusEnvio, setStatusEnvio] = useState<'idle' | 'enviando' | 'sucesso'>('idle');

  const validarEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const enviarEmail = () => {
    if (!destinatario || !assunto || !corpo) {
      setMensagem('⚠️ Preencha todos os campos.');
      return;
    }

    if (!validarEmail(destinatario)) {
      setMensagem('⚠️ Endereço de e-mail inválido.');
      return;
    }

    setStatusEnvio('enviando');
    setMensagem('📤 Enviando e-mail...');

    setTimeout(() => {
      const email = new EmailService();
      email.enviar(destinatario, assunto, corpo);

      setStatusEnvio('sucesso');
      setMensagem('✅ E-mail enviado com sucesso!');

      setDestinatario('');
      setAssunto('');
      setCorpo('');
    }, 2000);
  };

  return (
    <div className="email-container">
      {/* Cabeçalho do Email */}
      <header className="email-header">
        <img src="/logo-email.png" alt="Logo" className="email-logo" />
      </header>

      {/* Caixa de E-mail */}
      <div className="email-card">
        <label>Para:</label>
        <input
          type="email"
          placeholder="destinatario@exemplo.com"
          value={destinatario}
          onChange={(e) => setDestinatario(e.target.value)}
        />

        <label>Assunto:</label>
        <input
          type="text"
          placeholder="Digite o assunto"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
        />

        <label>Mensagem:</label>
        <textarea
          placeholder="Escreva sua mensagem..."
          value={corpo}
          onChange={(e) => setCorpo(e.target.value)}
        />

        <button onClick={enviarEmail} disabled={statusEnvio === 'enviando'}>
          {statusEnvio === 'enviando' ? 'Enviando...' : 'Enviar'}
        </button>

        {mensagem && (
          <p className={`mensagem ${statusEnvio}`}>
            {mensagem}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
