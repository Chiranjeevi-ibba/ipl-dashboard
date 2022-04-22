import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import MatchCard from "../MatchCard";
import "./index.css";

const EachTeamMatches = () => {
  const id = useParams().id;
  console.log(id);

  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { isLoading: true,
      teamBannerUrl: '', 
      latestMatch: [], 
      recentMatches: [],
    }
  );

  useEffect(() => {
    async function fetchData() {
      const url = `https://apis.ccbp.in/ipl/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      /* console.log(data); */
      const updatedLatestMatch = {
          competingTeam: data.latest_match_details.competing_team,
          competingTeamLogo: data.latest_match_details.competing_team_logo,
          date: data.latest_match_details.date,
          firstInnings: data.latest_match_details.first_innings,
          id: data.latest_match_details.id,
          manOfTheMatch: data.latest_match_details.man_of_the_match,
          matchStatus: data.latest_match_details.match_status,
          result: data.latest_match_details.result,
          secondInnings: data.latest_match_details.second_innings,
          umpires: data.latest_match_details.umpires,
          venue: data.latest_match_details.venue,
      }
      const updatedRecentMatches = data.recent_matches.map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        date: each.date,
        firstInnings: each.first_innings,
        id: each.id,
        manOfTheMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        result: each.result,
        second_innings: each.second_innings,
        umpires: each.umpires,
        venue: each.venue,
      }))
      /* console.log(updatedRecentMatches); */
      setState({isLoading: false, 
        teamBannerUrl: data.team_banner_url,
        latestMatch: updatedLatestMatch,
        recentMatches: updatedRecentMatches
      })
    }
    fetchData();
  }, [id]);



  const {competingTeam, competingTeamLogo, date, venue, result, firstInnings, secondInnings, manOfTheMatch, umpires} = state.latestMatch

  return (
    <div className={`Each-team-container ${id}`}>
      <img className="team-banner" src={state.teamBannerUrl} alt={id} />
      <h1>Latest Matches</h1>

      <div className="latest-match-details">
          <div className="inner-latest-match-container">
              <div>
              <h1>{competingTeam}</h1>
              <h4>{date}</h4>
              <h5>{venue}</h5>
              <h5>{result}</h5>
              </div>
              <img className="small-screen-logo" width={100} src={competingTeamLogo} alt={id} />
          </div>
          <hr className="hr-style" />
          <img className="large-screen-logo" width={200} src={competingTeamLogo} alt={id} />
          <div className="innings-container">
              <h3>First Innings</h3>
              <h5>{firstInnings}</h5>
              <h3>Second Innings</h3>
              <h5>{secondInnings}</h5>
              <h3>Man Of The Match</h3>
              <h5>{manOfTheMatch}</h5>
              <h3>Umpires</h3>
              <h5>{umpires}</h5>
          </div>
      </div>

      <div className="recent-matches-container">
         {
             state.recentMatches.map(each => (
                 <MatchCard eachMatch={each} key={each.id} />
             ))
         }
      </div>
    </div>
  );
};

export default EachTeamMatches;
