import { useDispatch, useSelector } from 'react-redux';
import { CharacterDetail } from '../components';

import { Link, useParams } from 'react-router-dom';

import { useEffect } from 'react';
import { getCharacterById } from '../store/slice/thunks';

export const CharacterDetailsPage = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const { isLoading, isError, character} = useSelector( state => state.character);

  useEffect(() => {

    dispatch(getCharacterById(id));
   
  }, [id])

  return (
    <div className='container'>
      <img className="title-img" src={process.env.REACT_APP_PUBLIC_URL + '/assets/img/title.png'} alt="title" />
      <h2 className="title-app">App</h2>

      <Link className="return-link" to="/">
        &laquo; Regresar a los resultados
      </Link>

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
        character?.id && <CharacterDetail {...character}/>
      }
    </div>
  );
}
