import { Logo } from './Logo';

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  );
}

//tailwind trabalha com multiplo de 4 ou seja py-1 = py = 4
