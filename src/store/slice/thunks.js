import { characterApi } from '../../api/characterApi';
import { setCharacters, setError, startLoading } from './charactersSlice';
import { characterError, characterLoading, setCharacter } from './characterSlice';

export const getCharacters = (characterToSearch = '', page = 1) => {

  return async(dispatch, getState) => {

    dispatch(startLoading(characterToSearch));

    try{
      
      const {data} = await characterApi.get(`/character?name=${characterToSearch}&page=${page}`);
      const {info, results} = data;

      const payload = {
        count: info.count,
        currentPage: page,
        totalPages: info.pages,
        nextPage: page >= info.pages ? null : page + 1,
        prevPage: page <= info.pages ? null : page -1,
        characters: results
      };

      dispatch(setCharacters(payload));

    }catch (error) {
      dispatch(setError());
    }
  }

}

export const getCharacterById = (id) =>{

  return async(dispatch) => {

    dispatch(characterLoading());
    
    try {

      const {data} = await characterApi.get(`/character/${id}`);
      
      dispatch(setCharacter(data))

    } catch (error) {
      dispatch(characterError()) 
    }
  }

}