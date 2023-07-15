
export const getCharacter = async(characterToSearch) => {

  const base_url = `https://rickandmortyapi.com/api/character/?name=${characterToSearch}&page=1`;
  const characters = [];

  try {

    const resp = await fetch(base_url);
    const {info, results} = await resp.json();
    const characters = results.map( character => ({
      id: character.id,
      name: character.name,
      img: character.image,
      url: character.url
    }));
  
    return { info, characters };
    
  } catch (error) {

    return { info: { error: true }, characters:characters }
    
  }

}