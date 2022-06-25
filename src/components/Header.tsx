import { List, X } from 'phosphor-react';
import { Logo } from './Logo';

interface Props {
  isOpen: Boolean;
  setIsOpen: Function;
}

export function Header(props: Props) {
  return (
    <header className="w-full py-5 px-6 flex items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600 h-16 lg:h-auto">
      <Logo />
      <button
        className="flex items-center lg:hidden text-sm"
        onClick={() => props.setIsOpen(!props.isOpen)}
      >
        Aulas
        {!props.isOpen ? (
          <List className="ml-2 text-blue-500" size={32} />
        ) : (
          <X color="#81D8F7" className="ml-2" size={32} />
        )}
      </button>
    </header>
  );
}

//tailwind trabalha com multiplo de 4 ou seja py-1 = py = 4
