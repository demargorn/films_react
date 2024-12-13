import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Films from './components/Films';
import './styles.css';

const films = [
   {
      id: 'film-01',
      poster: './superman.jpg',
      title: 'Супермен',
      stars: 4,
      price: 1299,
      type: 'Экшн',
      color: 'orange',
      isFavorite: true,
   },
   {
      id: 'film-02',
      poster: './alone-runner.jpg',
      title: 'Одинокий странник',
      stars: 3,
      price: 899,
      type: 'Вестерн',
      color: 'brown',
      isFavorite: false,
   },
   {
      id: 'film-03',
      poster: './batman.jpg',
      title: 'Бэтмэн',
      stars: 5,
      price: 1499,
      type: 'Экшн',
      color: 'orange',
      isFavorite: false,
   },
];

ReactDOM.createRoot(document.getElementById('root')).render(
   <StrictMode>
      <Films list={films} />,
   </StrictMode>
);
