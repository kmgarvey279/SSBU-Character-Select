import React from "react";
import Character from "./Character";
import PropTypes from 'prop-types';

function CharacterList(props){
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
          {props.characterList.map((character) =>
          <div id="inner">
            <Character name={character.name}
              series={character.series}
              number={character.number}
              first={character.first}
              image={character.image}
              symbol={character.symbol}
              bio={character.bio}
              ///mii only
              type={character.type}
              headgear={character.headgear}
              outfit={character.outfit}
              key={character.id}/>
          </div>
          )}
    </div>
  );
}

CharacterList.propTypes = {
  characterList: PropTypes.array
};

export default CharacterList;
