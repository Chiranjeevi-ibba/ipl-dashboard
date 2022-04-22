import { Link } from "react-router-dom";
import "./index.css";

const TeamCard = (props) => {
  const { eachTeam } = props;
  const {id, name, teamImageUrl } = eachTeam;

  return (
    <Link to={`/${id}`} className="link">
      <div className="each-team-card">
        <img width={50} src={teamImageUrl} alt={name} />
        <h3 className="team-name">{name}</h3>
      </div>
    </Link>
  );
};

export default TeamCard;
