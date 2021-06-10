import React from 'react';
import * as bs from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './index.scss';
import Header from './comps/header'
//import Table from './comps/search'
import Front from './comps/welcome'
//import Campaign from './comps/camp-details'
import Create from './comps/create'
import Create2 from './comps/create2'
import Add from './comps/add'
import Footer from './comps/footer'
//import CampaignBooster from './comps/campaignBooster'
//import SuccessScore from './comps/successScore'
import Fraud from './comps/fraud'
//import Modify from './comps/createAnalysts'

function App() {
  return (
    <Router>
      <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column">
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 border-bottom shadow-sm" bg="secondary">
          <bs.Col >
            {/*className="px-3 py-2"*/}
            <Header />
          </bs.Col>
        </bs.Row>
        <bs.Row noGutters className="flex-grow-1">
          {/* <bs.Col md="1" className="px-3 py-4 border-right">
        <LeftCol />
      </bs.Col> */}
          <bs.Col >
            <Switch>
              <Route exact path="/">
                <Front />
              </Route>
              {/* <Route path="/search">
                <Table />
              </Route>
              <Route path={`/camp/:cid`}>
                <Campaign />
              </Route> */}
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/create2">
                <Create2 />
              </Route>
              {/* <Route path="/add">
                <Add />
              </Route> */}
              {/* <Route path={`/modify/:cid`}>
                <Modify />
              </Route>
              <Route path="/boost-camp">
                <CampaignBooster />
              </Route>
              <Route path="/success-score" >
                <SuccessScore />
              </Route> */}
              <Route path="/fraud-detection">
                <Fraud />
              </Route>
            </Switch>
          </bs.Col>
          {/* <bs.Col md="1" className="px-3 py-4 border-right">
        <LeftCol />
      </bs.Col> */}
        </bs.Row>
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0">
          <bs.Col style={{ backgroundColor: "#CEECEF", }} className="px-3 py-2">
            <Footer style={{ position: "fixed", left: 0, bottom: 0 }} />
          </bs.Col>

        </bs.Row>
      </bs.Container>

    </Router>
  );
}

export default App;
