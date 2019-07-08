import React from 'react';
import PropTypes from 'prop-types';
import{ v4 } from 'uuid';

import miiBrawler from '../assets/images/characters/MiiBrawler.png';
import miiSwordfighter from '../assets/images/characters/MiiSwordfighter.png';
import miiGunner from '../assets/images/characters/MiiGunner.png';
import smashseries from '../assets/images/symbols/SmashBrosSymbol.svg';

function NewMiiForm(props){
  let _name = null;
  let _type = null;
  let _headgear = null;
  let _outfit = null;
  // let _number = null;
  // let _image = null;

  function handleNewMiiFormSubmission(event) {
    event.preventDefault();
    let miiNumber = '';
    let miiImage = '';
    if(_type.value == 'brawler'){
      miiImage = <img src={miiBrawler} weight="200" height="200"/>;
      miiNumber = '51';
    } else if (_type.value == 'swordfighter'){
      miiImage = <img src={miiSwordfighter} weight="200" height="200"/>;
      miiNumber = '52';
    } else if (_type.value == 'gunner'){
      miiImage =  <img src={miiGunner} weight="200" height="200"/>;
      miiNumber = '53';
    }
    props.onNewMiiCreation({name: _name.value, series: 'Super Smash Bros', number: miiNumber, first: 'SSB4', symbol: <img src={smashseries} weight="100" height="100"/>,  image: miiImage, bio: 'You can choose from the three types of Mii Fighter and select from a set of three specials for each type. You can also choose one of 12 voice options!', type: _type.value, headgear: _headgear.value + ' / ', outfit: _outfit.value, id: v4()});
    _name.value = '';
    _type.value ='';
    _headgear.value='';
    _outfit.value='';
  }

  return (
    <div>
      <form onSubmit={handleNewMiiFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Mii Fighter'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='type'
          placeholder='brawler'
          ref={(input) => {_type = input;}}/>
        <input
          type='text'
          id='headgear'
          placeholder='None'
          ref={(input) => {_headgear = input;}}/>
        <input
          type='text'
          id='outfit'
          placeholder='None'
          ref={(input) => {_outfit = input;}}/>

        <button type='submit'>Create Mii</button>
      </form>
    </div>
  );
}

NewMiiForm.propTypes = {
  onNewMiiCreation: PropTypes.func
};

export default NewMiiForm;
