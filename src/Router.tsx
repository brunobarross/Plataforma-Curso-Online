import { Route, Routes } from 'react-router-dom';
import Page404 from './components/Page404';
import { Evento } from './pages/Evento';
import { Subscribe } from './pages/Subscribe';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Evento />} />
      <Route path="/event/lesson/:slug" element={<Evento />} />
      <Route path="*" element={<Page404  />} />
    </Routes>
  );
}
