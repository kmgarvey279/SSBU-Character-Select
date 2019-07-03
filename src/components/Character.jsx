import React from 'react';
import PropTypes from 'prop-types';

function Character(props) {
  return (
    <div>
    <style jsx>{`
      div {
        background-color: lightblue;
      }

      p {
        background-color: lightgreen;
        margin-left: 10px;
        margin-right: 10px;
      }

      h4 {
        margin-left: 10px;
      }

      h2 {
        margin-left: 10px
      }

      #symbol {
        background-color: gray;
      }



    `}</style>
      <div id="symbol">{props.symbol}</div>
      <h2>{props.name}</h2>
      <div id="charImage">{props.image}</div>
      <h4>Series: <i>{props.series}</i></h4>
      <h4>Number: <i>{props.number}</i></h4>
      <p>{props.bio}</p>
      <hr/>
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  series: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};

export default Character;
