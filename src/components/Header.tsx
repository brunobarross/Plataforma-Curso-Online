
import { Hamburger } from 'phosphor-react';
import { Logo } from './Logo';

interface Props {
  isOpen: Boolean,
  setIsOpen: Function,
}

export function Header(props: Props) {
  
  return (
    <header className="w-full py-5 px-6 flex items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600 h-16 lg:h-auto">
      <Logo />
      <h1 class="block lg:hidden" onClick={()=> props.setIsOpen(!props.isOpen)}>Aulas
      </h1>
    </header>
  );
}

//tailwind trabalha com multiplo de 4 ou seja py-1 = py = 4
