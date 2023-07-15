

export const CharacterDetail = ({name, image, status, species, gender, type}) => {

  return (
    <div className="card full">
      <div className="card-content">
        <div className="card-img">
          <img src={image} alt="img-character"/>
        </div>
        <div className="card-body">
          <h3>{name}</h3>
          <div className="card-info">
          <dl>
            <dt>Gender:</dt>
            <dd>{gender}</dd>
            <dt>Status:</dt>
            <dd>{status}</dd>
            <dt>Species:</dt>
            <dd>{species}</dd>
            <dt>Type:</dt>
            <dd>{type}</dd>
          </dl>
          </div>
        </div>
      </div>
    </div> 
  )
}
