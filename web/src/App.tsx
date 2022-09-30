import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import { GamerBaner } from './components/GamerBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { CreateAdModal } from './components/CreateAdModal';

export interface GameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  // function handleButtonClick() {
  //   SetHasUserClickedOnButton(!hasUserClickedOnButton);
  //   // quando vc nega a variavel vc cria um toggle facil na propria função - dica showwww
  // }

  // useEffect(() => {
  //   console.log(hasUserClickedOnButton);
  // }, [hasUserClickedOnButton]);
  // se o array de dependica ficar vazio o cod, so vai ser executado uma unica vez, independente de quantas vezes redenrizar
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo" />
      <h2 className="text-4xl text-white mt-5 font-black">Rafa</h2>
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{' '}
        está aqui.
      </h1>
      {/* <button onClick={handleButtonClick}>Clique aqui</button>
      {hasUserClickedOnButton ? 'usuario clicou' : ''} */}
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GamerBaner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
