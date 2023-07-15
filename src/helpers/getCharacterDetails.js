
export const getCharacterDetails = async(idCharacter) => {

  const base_url = `https://rickandmortyapi.com/api/character/${idCharacter}`;
  const character = {};

  try {

    const resp = await fetch(base_url);
    const character = await resp.json();
    return character;
    
  } catch (error) {

    return { info: { error: true }, character:character }
    
  }

}