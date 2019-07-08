import React from "react";
import Character from "./Character";
//character images
import mario from '../assets/images/characters/Mario.png';
import link from '../assets/images/characters/Link.png';
import kirby from '../assets/images/characters/Kirby.png';
import pikachu from '../assets/images/characters/Pikachu.png';
import samus from '../assets/images/characters/Samus.png';
import darksamus from '../assets/images/characters/DarkSamus.png';
import dk from '../assets/images/characters/DK.png';
import fox from '../assets/images/characters/Fox.png';
import yoshi from '../assets/images/characters/Yoshi.png';
import ness from '../assets/images/characters/Ness.png';
import luigi from '../assets/images/characters/Luigi.png';
import jigglypuff from '../assets/images/characters/Jigglypuff.png';
import falcon from '../assets/images/characters/Falcon.png';
import peach from '../assets/images/characters/Peach.png';
import daisy from '../assets/images/characters/Daisy.png';

//series logos
import marioseries from '../assets/images/symbols/MarioSeries.png';
import zeldaseries from '../assets/images/symbols/ZeldaSymbol.png';
import kirbyseries from '../assets/images/symbols/KirbySymbol.svg';
import pokemonseries from '../assets/images/symbols/PokemonSymbol.svg';
import metroidseries from '../assets/images/symbols/MetroidSymbol.svg';
import sfseries from '../assets/images/symbols/StarFoxSymbol.svg';
import dkseries from '../assets/images/symbols/DKSymbol.svg';
import yoshiseries from '../assets/images/symbols/YoshiSymbol.svg';
import fzeroseries from '../assets/images/symbols/FZeroSymbol.svg';
import motherseries from '../assets/images/symbols/EarthboundSymbol.svg';
//series images
import yoshigame from '../assets/images/games/yoshifirst.jpg';
import dkgame from '../assets/images/games/dkfirst.jpg';
import foxgame from '../assets/images/games/foxfirst.jpg';
import mariogame from '../assets/images/games/mariofirst.jpg';
import linkgame from '../assets/images/games/linkfirst.jpg';
import samusgame from '../assets/images/games/samusfirst.png';
import kirbygame from '../assets/images/games/kirbyfirst.jpg';
import pikachugame from '../assets/images/games/pikachu.jpg';

var masterCharacterList = [
  {
    name: 'Mario',
    series: 'Super Mario',
    number: '01',
    first: 'Super Smash Bros.',
    symbol: <img src={marioseries} weight="100" height="100"/>,
    image: <img src={mario} weight="200" height="200"/>,
    gameimage: <img src={mariogame} weight="150" height="150"/>,
    bio: 'Mario is an all-around fighter who uses his wide variety of techniques to respond to any situation. In Super Smash Bros. Ultimate, he shows up in his Wedding tux and his Builder outfit, and Cappy even makes an appearance!'
  },
  {
    name: 'Donkey Kong',
    series: 'Donkey Kong',
    number: '02',
    symbol: <img src={dkseries} weight="100" height="100"/>,
    image: <img src={dk} weight="200" height="200"/>,
    gameimage: <img src={dkgame} weight="100" height="100"/>,
    bio: 'His charged punch is one of the strongest attacks in the game! In Super Smash Bros. Ultimate, his Final Smash has been updated from Konga Beat to a flurry of punches!'
  },
  {
    name: 'Link',
    series: 'The Legend of Zelda',
    number: '03',
    symbol: <img src={zeldaseries} weight="100" height="100"/>,
    image: <img src={link} weight="200" height="200"/>,
    gameimage: <img src={linkgame} weight="100" height="100"/>,
    bio: 'Link has been redesigned to match his appearance in The Legend of Zelda: Breath of the Wild. He can now pick up arrows he\'s fired, and his bombs have been upgraded to remote bombs, so you can set them off when the timing is just right!'
  },
  {
    name: 'Samus',
    series: 'Metroid',
    number: '04',
    symbol: <img src={metroidseries} weight="100" height="100"/>,
    image: <img src={samus} weight="200" height="200"/>,
    gameimage: <img src={samusgame} weight="100" height="100"/>,
    bio: 'With her Charge Shot, Missile, and Bomb, Samus has three different projectiles to keep her opponents in check from a distance. When fully charged up, her Charge Shot is quite powerful. For her Final Smash, she launches a wide laser beam that can be moved up and down!'
  },
  {
    name: "Dark Samus",
    series: 'Metroid',
    number: '04e',
    symbol: <img src={metroidseries} weight="100" height="100"/>,
    image: <img src={darksamus} weight="200" height="200"/>,
    bio: 'Dark Samus joins the battle as Samus\'s echo fighter. With floatier movement, she\'s a little different from Samus--and she doesn\'t roll when dodging or jumping. If you look closely, you can see that her bombs and missiles look a little different, too.'  
  },
  {
    name: 'Yoshi',
    series: 'Yoshi\'s Island',
    number: '05',
    symbol: <img src={yoshiseries} weight="100" height="100"/>,
    image: <img src={yoshi} weight="200" height="200"/>,
    gameimage: <img src={yoshigame} weight="100" height="100"/>,
    bio: 'Yoshi is all about egg-related moves, like throwing eggs, swallowing opponents and turning them into eggs, or turning into an egg and charging toward an opponent. With a high jump, recovery is a piece of cake for Yoshi! And for his Final Smash, a Yoshi army stampedes through the stage.'
  },
  {
    name: 'Kirby',
    series: 'Kirby\'s Dreamland',
    number: '06',
    symbol: <img src={kirbyseries} weight="100" height="100"/>,
    image: <img src={kirby} weight="200" height="200"/>,
    gameimage: <img src={kirbygame} weight="100" height="100"/>,
    bio: 'Kirby\'s ability to copy other fighters is totally unique! While he is light and can be launched easily, he can also jump up to five times in the air, so he has great recovery. Look for his new Stone transformation, too.'
  },
  {
    name: 'Fox',
    series: 'Star Fox',
    number: '07',
    symbol: <img src={sfseries} weight="100" height="100"/>,
    image: <img src={fox} weight="200" height="200"/>,
    gameimage: <img src={foxgame} weight="100" height="100"/>,
    bio: 'He made his first appearance in Star Fox, released in 1993. Fox is the leader of the mercenary group Star Fox. He cares about his team and has a strong sense of justice. Fun fact: Star Fox was the first game for the Super Nintendo Entertainment System™ that featured 3D graphics.'
  },
  {
    name: 'Pikachu',
    series: 'Pokemon',
    number: '08',
    symbol: <img src={pokemonseries} weight="100" height="100"/>,
    image: <img src={pikachu} weight="200" height="200"/>,
    gameimage: <img src={pikachugame} weight="100" height="100"/>,
    bio: 'This fierce fighter uses electric moves like Thunder Jolt and Thunder. Pikachu Libre is one of the alternate costumes and you can tell she\'s female by the shape of her tail.'
  },
  {
    name: 'Luigi',
    series: 'Super Mario',
    number: '09',
    symbol: <img src={marioseries} weight="100" height="100"/>,
    image: <img src={luigi} weight="200" height="200"/>,
    gameimage: <img src={yoshigame} weight="100" height="100"/>,
    bio: 'He can jump higher than his brother, Mario. His Up Special, Super Jump Punch, will gain maximum damage and launching power when hitting the opponent right at the start. It truly is a "Special" move. He also uses his new Poltergust for his throw!'
  },
  {
    name: 'Ness',
    series: 'Earthbound',
    number: '10',
    symbol: <img src={motherseries} weight="100" height="100"/>,
    image: <img src={ness} weight="200" height="200"/>,
    gameimage: <img src={yoshigame} weight="100" height="100"/>,
    bio: 'Ness has a variety of moves, from long-range attacks using psychic powers known as "PSI," to short-range attacks with his bat and yo-yo.  Ness can also unleash PK Thunder, a guided attack that can launch him like a rocket or help him recover!'
  },
  {
    name: 'Captain Falcon',
    series: 'F-Zero',
    number: '11',
    symbol: <img src={fzeroseries} weight="100" height="100"/>,
    image: <img src={falcon} weight="200" height="200"/>,
    gameimage: <img src={yoshigame} weight="100" height="100"/>,
    bio: 'A fighter that possesses both speed and power! But in exchange, he is frequently left open. Being able to successfully land his neutral special, Falcon Punch, can greatly influence the battle in multiplayer matches.'
  },
  {
    name: 'Jigglypuff',
    series: 'Pokemon',
    number: '12',
    symbol: <img src={pokemonseries} weight="100" height="100"/>,
    image: <img src={jigglypuff} weight="200" height="200"/>,
    gameimage: <img src={yoshigame} weight="100" height="100"/>,
    bio: 'Jigglypuff can jump 5 times in the air and can move faster in the air than on the ground. Use Jigglypuff\'s great aerial ability to overwhelm your opponent! If you manage to land the down special Rest, you can powerfully launch your opponent.'
  },
  {
    name: 'Peach',
    series: 'Super Mario',
    number: '13',
    first: 'SSB Melee',
    symbol: <img src={marioseries} weight="100" height="100"/>,
    image: <img src={peach} weight="200" height="200"/>,
    gameimage: <img src={yoshigame} weight="100" height="100"/>,
    bio: 'THE super princess. Watch out for her powerful kicks while she\'s airborne. Using her down special, she picks vegetables and throws them at her opponents. Sometimes she even gets items...like a Bob-omb!'
  },
  {
    name: 'Daisy',
    series: 'Super Mario',
    number: '13e',
    first: 'SSB Ultimate',
    symbol: <img src={marioseries} weight="100" height="100"/>,
    image: <img src={daisy} weight="200" height="200"/>,
    gameimage: <img src={yoshigame} weight="100" height="100"/>,
    bio: 'Her basic move set is the same as Peach\'s, but this princess has her own unique personality. She\'s known for being upbeat, energetic, and a bit of a tomboy.'
  }
];

function CharacterList(){
  return (
    <div id="outer">
      <style jsx>{`
        div#outer {
          columns: 3 auto;
          min-width: 800px;
          column-gap: 10px;
          column-rule: 1px solid lightblue;
          margin-top: 5px;
        }
        
        div#inner {
          break-inside: avoid-column;
          border: solid black 4px;
          height:600px;
          background-color: lightblue;
          margin-bottom: 5px;
        }
        

      `}</style>
          {masterCharacterList.map((character, index) =>
      <div id="inner">
            <Character name={character.name}
              series={character.series}
              number={character.number}
              first={character.first}  
              image={character.image}
              gameimage={character.gameimage}
              symbol={character.symbol}
              bio={character.bio}
              key={index}/>
      </div>        
          )} 
    </div>
  );
}

export default CharacterList;
