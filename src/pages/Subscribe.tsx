import { gql, useMutation } from '@apollo/client';
import { useState, FormEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import mockupImg from '../assets/code-mockup.png';
import { useCreateSubscriberMutation } from '../graphql/generated';

export function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
    //mando pra pagina do evento
    navigate('/event');
  }

  return (
    <div className="lg:min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row lg:items-center justify-between mt-20 mx-auto">
        <div className="lg:max-w-[640px] pb-8 px-6 lg:pb-0 lg:px-0">
          <div className="mx-auto flex justify-center lg:justify-start lg:mx-0">
            <Logo />
          </div>

          <h1 className="mt-6 lg:mt-8  text-[2rem] lg:text-[2.5rem] leading-tight text-center lg:text-left">
            Construa uma
            <strong className="text-blue-500"> aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-6 lg:mt-4 text-center lg:text-left text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 w-full lg:w-auto lg:w bg-gray-700 border border-gray-500 rounded">
          <strong className="text-lg lg:text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            action=""
            className="flex  flex-col gap-2 w-full"
            onSubmit={handleSubscribe}
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />

            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite aqui sem email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <div className="mt-4 lg:mt-10">
        <img src={mockupImg} alt="" />
      </div>
    </div>
  );
}
