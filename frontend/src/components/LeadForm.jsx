import React, { useState, useEffect } from 'react';
import api from '../services/api';

const LeadForm = () => {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' });
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');
  const [showPolitica, setShowPolitica] = useState(false);
  const [showTermos, setShowTermos] = useState(false);
  const [validation, setValidation] = useState({
    email: { isValid: true, message: '' },
    telefone: { isValid: true, message: '' }
  });
  const [tipoMensagem, setTipoMensagem] = useState(""); // "sucesso" ou "erro"

  useEffect(() => {
    let timer;
    if (mensagem) {
      timer = setTimeout(() => {
        setMensagem('');
      }, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [mensagem]);

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      if (numbers.length <= 2) {
        return numbers;
      } else if (numbers.length <= 6) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      } else if (numbers.length <= 10) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
      } else {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
      }
    }
    return value;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const numbers = phone.replace(/\D/g, '');
    return numbers.length === 11;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'telefone') {
      newValue = formatPhoneNumber(value);
      setValidation(prev => ({
        ...prev,
        telefone: {
          isValid: validatePhone(newValue),
          message: validatePhone(newValue) ? '' : 'Digite um telefone válido'
        }
      }));
    }

    if (name === 'email') {
      setValidation(prev => ({
        ...prev,
        email: {
          isValid: validateEmail(value),
          message: validateEmail(value) ? '' : 'Digite um e-mail válido'
        }
      }));
    }

    setForm(prev => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');
    setErro('');

    if (!validateEmail(form.email)) {
      setErro('Por favor, insira um e-mail válido');
      return;
    }

    if (!validatePhone(form.telefone)) {
      setErro('Por favor, insira um telefone válido');
      return;
    }

    try {
      const response = await api.post('/api/leads', form);
      setMensagem('Registro realizado com sucesso!');
      setTipoMensagem("sucesso");
      setForm({ nome: '', email: '', telefone: '' });
      setValidation({
        email: { isValid: true, message: '' },
        telefone: { isValid: true, message: '' }
      });
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setMensagem("E-mail já cadastrado!");
        setTipoMensagem("erro");
      } else {
        setMensagem("Erro ao enviar. Tente novamente.");
        setTipoMensagem("erro");
      }
      setTimeout(() => setMensagem(""), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-2 w-full max-w-md mt-2">
      <div className="relative mb-3">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          className="p-2 text-lg rounded bg-marrom text-amareloClaro placeholder-amareloClaro focus:outline-none border-1 focus:border-dourado shadow w-full"
          required
        />
      </div>

      <div className="relative mb-3">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          className={`p-2 text-lg rounded bg-marrom text-amareloClaro placeholder-amareloClaro focus:outline-none border-1 focus:border-dourado ${validation.email.isValid ? 'border-amareloClaro focus:border-dourado' : 'border-red-300'
            } shadow w-full`}
          required
        />
        {!validation.email.isValid && form.email && (
          <span className="text-red-300 text-sm absolute -bottom-5 left-0">{validation.email.message}</span>
        )}
      </div>

      <div className="relative mb-3">
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
          className={`p-2 text-lg rounded bg-marrom text-amareloClaro placeholder-amareloClaro focus:outline-none border-1 focus:border-dourado ${validation.telefone.isValid ? 'border-amareloClaro focus:border-dourado' : 'border-red-300'
            } shadow w-full`}
          required
        />
        {!validation.telefone.isValid && form.telefone && (
          <span className="text-red-300 text-sm absolute -bottom-5 left-0">{validation.telefone.message}</span>
        )}
      </div>

      <small className="text-xs text-center">
        Ao se inscrever, você concorda com nossa{' '}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowPolitica(true);
          }}
          className="text-dourado hover:text-dourado/80 underline"
        >
          Política de Privacidade
        </a>{' '}
        e com os{' '}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowTermos(true);
          }}
          className="text-dourado hover:text-dourado/80 underline"
        >
          Termos de Uso
        </a>
      </small>

      <button
        type="submit"
        className="bg-dourado text-white hover:bg-dourado/90 font-bold py-4 px-10 text-2xl rounded transition shadow-lg mt-2 mx-auto block disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={!validation.email.isValid || !validation.telefone.isValid}
      >
        Participar
      </button>

      {mensagem && (
        <div className={
          tipoMensagem === "erro"
            ? "text-red-600 bg-red-100 border border-red-400 rounded px-4 py-2 mt-2"
            : "text-green-600 bg-green-100 border border-green-400 rounded px-4 py-2 mt-2"
        }>
          {mensagem}
        </div>
      )}
      {erro && (
        <div className="text-red-300 text-center font-semibold mt-2 bg-red-100 bg-opacity-20 rounded p-2 border border-red-400">
          {erro}
        </div>
      )}

      {/* Modal Política de Privacidade */}
      {showPolitica && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999] p-4">
          <div className="bg-marrom rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
            <h2 className="text-2xl font-bold text-amareloClaro mb-4">Política de Privacidade</h2>
            <div className="text-white space-y-4">
              <p>1. Coleta de Dados</p>
              <p>Coletamos informações que você nos fornece diretamente, incluindo nome, e-mail e telefone.</p>

              <p>2. Uso das Informações</p>
              <p>Utilizamos suas informações para:</p>
              <ul className="list-disc pl-6">
                <li>Enviar informações sobre as aulas</li>
                <li>Comunicar atualizações importantes</li>
                <li>Melhorar nossos serviços</li>
              </ul>

              <p>3. Proteção de Dados</p>
              <p>Seus dados são armazenados de forma segura e não serão compartilhados com terceiros sem seu consentimento.</p>
            </div>
            <button
              onClick={() => setShowPolitica(false)}
              className="mt-6 bg-dourado hover:bg-dourado/90 text-white font-bold py-2 px-6 rounded transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Modal Termos de Uso */}
      {showTermos && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999] p-4">
          <div className="bg-marrom rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
            <h2 className="text-2xl font-bold text-amareloClaro mb-4">Termos de Uso</h2>
            <div className="text-white space-y-4">
              <p>1. Aceitação dos Termos</p>
              <p>Ao se inscrever, você concorda com todos os termos e condições aqui estabelecidos.</p>

              <p>2. Responsabilidades</p>
              <p>Você é responsável por:</p>
              <ul className="list-disc pl-6">
                <li>Fornecer informações verdadeiras e precisas</li>
                <li>Manter suas informações atualizadas</li>
                <li>Não compartilhar seu acesso com terceiros</li>
              </ul>

              <p>3. Limitações</p>
              <p>O conteúdo das aulas é para uso pessoal e não pode ser reproduzido ou distribuído sem autorização.</p>
            </div>
            <button
              onClick={() => setShowTermos(false)}
              className="mt-6 bg-dourado hover:bg-dourado/90 text-white font-bold py-2 px-6 rounded transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default LeadForm; 