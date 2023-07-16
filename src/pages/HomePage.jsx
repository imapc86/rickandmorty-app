import { useDispatch, useSelector } from 'react-redux';

import { CharacterSearch, CharacterGrid } from '../components';
import { getCharacters } from '../store/slice/thunks';

export const HomePage = () => {

  const dispatch = useDispatch();
  const { isLoading, isError, characters = [] } = useSelector(state => state.characters);

  const onSubmitSearch = (characterToSearch) => {
    dispatch(getCharacters(characterToSearch))
  }
   
  return (
    <div className='container'>
      {/* Title */}
      <img className="title-img" src={process.env.REACT_APP_PUBLIC_URL + '/assets/img/title.png'} alt="title" />
      <h2 className="title-app">App</h2>

      {/* Search component */}
      <CharacterSearch  onCharacterSearch={ onSubmitSearch } />

      {
        /* Loading Component */
        isLoading && (
          <div className="img-help">
            <img className="img-home" src={process.env.REACT_APP_PUBLIC_URL + '/assets/img/spiral.png'} alt="img-help" />
            <p>Loading...</p>
          </div>
        )
      }
      {
        isError && (
          <div className="img-help">
            <img className="img-home" src={process.env.REACT_APP_PUBLIC_URL + '/assets/img/error.png'} alt="img-help" />
            <p>Not found results, try again</p>
          </div>
        )
      }
      {
        /* Grid Component */
        characters.length > 0 && <CharacterGrid characters={characters}/>
      }
    </div>
  );
}
