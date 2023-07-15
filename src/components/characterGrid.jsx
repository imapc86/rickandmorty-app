import { CharacterItem } from '../components/characterItem';
import { Paginator } from './paginator';

export const CharacterGrid = ({characters}) => {

  return (
    <>
      <div className="grid-cards">     
        { 
          characters.map(character => (
            <CharacterItem key={character.id} {...character}/>
          ))  
        }
      </div>
      {/* Pagination */}
      <Paginator/>
    </>
  )
}