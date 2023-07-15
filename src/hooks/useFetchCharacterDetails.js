import {useState, useEffect} from 'react';
import { getCharacterDetails } from '../helpers/getCharacterDetails';

export const useFetchCharacterDetails = (idCharacter) => {

  const [state, setstate] = useState({});

  const setResponse = async() => {
    const character = await getCharacterDetails(idCharacter);
    setTimeout(() => {
      setstate(character);
    }, 1000);
  }
  
  useEffect(() => { 
    setstate({});
    idCharacter && setResponse();
  }, [idCharacter]);

  return state;
}