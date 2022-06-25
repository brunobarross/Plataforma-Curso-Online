import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Evento() {
  const { slug } = useParams<{ slug: string }>();
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex flex-col relative">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex flex-1 min-h-screen">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}  />
    
      </main>
    </div>
  );
}
