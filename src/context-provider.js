import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'


export default class AppProvider extends React.Component {
    constructor(props) {
        super(props)
        this.actions = {}
        this.state = {
            campaigns: {},
        }
    }

    render() {
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}} >
                <App />
            </AppContext.Provider>
        )
    }

    async componentDidMount() {
        const camp_resp = await axios.get('/api/campaign/')
            const campaigns = {}
            for (const camp of camp_resp.data){
                campaigns[camp.id] = camp
                campaigns[camp.id].percent_of_goal = campaigns[camp.id].percent_of_goal * 100
            }

            this.setState({
                campaigns: campaigns,
            })
    }
}