import React from 'react';
import PropTypes from 'prop-types';

function Character(props) {
  return (
    <div>
    <style jsx>{`
      div {
        background-color: lightblue;
        text-align: center;
      }

      p {
        background-color: lightgreen;
        margin-left: 10px;
        margin-right: 10px;
        border: solid green 1px;
      }

      h4 {
        margin-left: 10px;
      }

      h2 {
        margin-left: 10px
      }

      #symbol {
        background-color: gray;
        height: 100px;
        margin-bottom: 20px;
        text-align: right;
      }

      #symbol h1 {
        position: relative;
        text-align: left;
        bottom: 100px;
        margin-left: 10px;
        text-shadow: 1px 1px 1px darkslategray;
      }

      #charImage {
        text-align: center;
      }

      #firstlogo {
        position: relative;
        margin-top: 5px;
      }

    `}</style>
      <div id="symbol">
        {props.symbol}
        <h1>{props.name}</h1>
      </div>
      <div id="charImage">{props.image}</div>
      <h4>Series: <i>{props.series}</i></h4>
      <h4>Number: <i>{props.number}</i></h4>
      <h4>First Appearance: <i>{props.first}</i></h4>
      <h4>{props.headgear}{props.outfit}</h4>
      <p>{props.bio}</p>
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  series: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  first: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  //mii fighters only
  type: PropTypes.string.isRequired,
  headgear: PropTypes.string,
  outfit: PropTypes.string
};

export default Character;
