import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';
import useMediaQuery from '@mui/material/useMediaQuery';



const media = window.matchMedia('(max-width: 1024px)').matches;


export function Evento() {
  const { slug } = useParams<{ slug: string }>();
  const [isOpen, setIsOpen] = React.useState(false)
  const [mobile, setMobile] = React.useState(false)
  
  const matches = useMediaQuery('(max-width: 1024px)');

  

  return (
    <div className="flex flex-col relative">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex flex-1 min-h-screen">
        {slug ? <Video lessonSlug={slug} /> 
        : 
        <div className="flex-1 flex lg:items-center justify-center flex-col">
        
            <h2 className=' text-2xl lg:text-[2rem] text-center max-w-[400px] lg:max-w-full mx-auto '>{!matches ? `Selecione uma aula clicando no menu à direita, =) `
            :
            `Selecione uma aula clicando em "aulas" no menu superior, =) `}
            </h2>
              
          </div>}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}  />
    
      </main>
    </div>
  );
}
