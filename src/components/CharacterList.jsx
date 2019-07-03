import React from "react";
import Character from "./Character";
import mario from '../assets/images/characters/Mario.png';
import link from '../assets/images/characters/Link.png';
import kirby from '../assets/images/characters/Kirby.png';
import pikachu from '../assets/images/characters/Pikachu.png';
import samus from '../assets/images/characters/Samus.png';
import dk from '../assets/images/characters/DK.png';
import fox from '../assets/images/characters/Fox.png';
import yoshi from '../assets/images/characters/Yoshi.png';
import marioseries from '../assets/images/symbols/MarioSeries.png';
import zeldaseries from '../assets/images/symbols/ZeldaSymbol.png';
import kirbyseries from '../assets/images/symbols/KirbySymbol.svg';
import pokemonseries from '../assets/images/symbols/PokemonSymbol.svg';
import metroidseries from '../assets/images/symbols/MetroidSymbol.svg';
import sfseries from '../assets/images/symbols/StarFoxSymbol.svg';
import dkseries from '../assets/images/symbols/DKSymbol.svg';
import yoshiseries from '../assets/images/symbols/YoshiSymbol.svg';


var masterCharacterList = [
  {
    name: 'Mario',
    series: 'Super Mario',
    number: '01',
    symbol: <img src={marioseries} weight="100" height="100"/>,
    image: <img src={mario}/>,
    bio: 'Mario is an all-around fighter who uses his wide variety of techniques to respond to any situation. In Super Smash Bros. Ultimate, he shows up in his Wedding tux and his Builder outfit, and Cappy even makes an appearance!'
  },
  {
    name: 'Link',
    series: 'The Legend of Zelda',
    number: '03',
    symbol: <img src={zeldaseries} weight="100" height="100"/>,
    image: <img src={link}/>,
    bio: 'Link has been redesigned to match his appearance in The Legend of Zelda: Breath of the Wild. He can now pick up arrows he\'s fired, and his bombs have been upgraded to remote bombs, so you can set them off when the timing is just right!'
  },
  {
    name: 'Kirby',
    series: 'Kirby\'s Dreamland',
    number: '06',
    symbol: <img src={kirbyseries} weight="100" height="100"/>,
    image: <img src={kirby}/>,
    bio: 'Kirby\'s ability to copy other fighters is totally unique! While he is light and can be launched easily, he can also jump up to five times in the air, so he has great recovery. Look for his new Stone transformation, too.'
  },
  {
    name: 'Pikachu',
    series: 'Pokemon',
    symbol: <img src={pokemonseries} weight="100" height="100"/>,
    image: <img src={pikachu}/>,
    bio: 'This fierce fighter uses electric moves like Thunder Jolt and Thunder. Pikachu Libre is one of the alternate costumes and you can tell she\'s female by the shape of her tail.'
  },
  {
    name: 'Samus',
    series: 'Metroid',
    symbol: <img src={metroidseries} weight="100" height="100"/>,
    image: <img src={samus}/>,
    bio: 'With her Charge Shot, Missile, and Bomb, Samus has three different projectiles to keep her opponents in check from a distance. When fully charged up, her Charge Shot is quite powerful. For her Final Smash, she launches a wide laser beam that can be moved up and down!'
  },
  {
    name: 'Donkey Kong',
    series: 'Donkey Kong',
    symbol: <img src={dkseries} weight="100" height="100"/>,
    image: <img src={dk}/>,
    bio: 'His charged punch is one of the strongest attacks in the game! In Super Smash Bros. Ultimate, his Final Smash has been updated from Konga Beat to a flurry of punches!'
  },
  {
    name: 'Fox',
    series: 'Star Fox',
    symbol: <img src={sfseries} weight="100" height="100"/>,
    image: <img src={fox}/>,
    bio: 'He made his first appearance in Star Fox, released in 1993. Fox is the leader of the mercenary group Star Fox. He cares about his team and has a strong sense of justice. Fun fact: Star Fox was the first game for the Super Nintendo Entertainment System™ that featured 3D graphics.'
  },
  {
    name: 'Yoshi',
    series: 'Yoshi\'s Island',
    symbol: <img src={yoshiseries} weight="100" height="100"/>,
    image: <img src={yoshi}/>,
    bio: 'Yoshi is all about egg-related moves, like throwing eggs, swallowing opponents and turning them into eggs, or turning into an egg and charging toward an opponent. With a high jump, recovery is a piece of cake for Yoshi! And for his Final Smash, a Yoshi army stampedes through the stage.'
  }
];

function CharacterList(){
  return (
    <div>
      <style jsx>{`

      `}</style>
      <hr/>
          {masterCharacterList.map((character, index) =>
            <Character name={character.name}
              series={character.series}
              number={character.number}
              image={character.image}
              symbol={character.symbol}
              bio={character.bio}
              key={index}/>
          )}
    </div>
  );
}

export default CharacterList;
