import { useNavigate } from "react-router-dom"

export const CharacterItem = ({image, name, id}) => {

  const navigate = useNavigate();

  const onViewDetails = (id) => {
    navigate(`/details/${id}`)
  }

  return (
    <div className="card" onClick={() => onViewDetails(id)}>
      <div className="card-content">
        <div className="card-img">
          <img src={image} alt="img-help"/>
        </div>
        <div className="card-title">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  )
}
