import { Component } from "react";
import { TailSpin } from "react-loader-spinner";
import TeamCard from "../TeamCard";
import './index.css'

class Home extends Component {

    state = {
        teamsData: [],
        isLoading: true
    }

    componentDidMount() {
        this.getTeamsData()
    }

    getTeamsData = async () => {
        const url = 'https://apis.ccbp.in/ipl'
        const response = await fetch(url)
        const data = await response.json()
        /* console.log(data); */
        const updatedData = data.teams.map(each => ({
            id: each.id,
            name: each.name,
            teamImageUrl: each.team_image_url
        }))
        this.setState({teamsData: updatedData, isLoading: false})
    }

    render() {
        const {teamsData, isLoading} = this.state

        return (
            <div className="home-container">
                <div className="ipl-heading-container">
                    <img width={25} src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png " alt="Logo" />
                    <h1 className="ipl-text">IPL Dashboard</h1>
                </div>
                <div className="teams-container">
                {
                    isLoading ? <TailSpin height={50} width={50} color="#ffffff" /> : (
                        teamsData.map(each => (
                            <TeamCard eachTeam={each} key={each.id} />
                        ))
                    )
                }
                </div>
            </div>
        )
    }
}

export default Home