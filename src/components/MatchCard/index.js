import './index.css'

const MatchCard = props => {
    const {eachMatch} = props

    const {competingTeam, competingTeamLogo, result, matchStatus} = eachMatch

    const statusColor = matchStatus === 'Won' ? 'won' : 'lost'
    console.log(matchStatus);
    return (
        <div className='each-matchces-container'>
           <img src={competingTeamLogo} width={100} />
           <h2>{competingTeam}</h2>
           <h3>{result}</h3>
           <h3 className={statusColor}>{matchStatus}</h3>
        </div>
    )
}

export default MatchCard