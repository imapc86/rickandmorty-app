import {useState, useEffect} from 'react';
import { getCharacter } from '../helpers/getCharacter';

export const useFetchCharacter = (character) => {

  const [state, setstate] = useState({
    info: {}, 
    characters: [], 
    loading: false
  });

  const setResponse = async() => {
    const {info, characters} = await getCharacter(character);
    setTimeout(() => {
      setstate({info, characters, loading: false});
    }, 2000);
  }
  
  useEffect(() => { 

    setstate({info: {}, characters: [], loading: true});
    character && setResponse();
  }, [character]);

  return state;
}