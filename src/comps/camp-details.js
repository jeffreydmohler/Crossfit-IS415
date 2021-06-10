import React from 'react';
import { useParams } from 'react-router-dom'
import * as bs from 'react-bootstrap'
import AppContext from '../context'
import Collapse from './collapse'
import { countries } from 'country-data';
import piggyBank from "../media/piggyBank.svg"
import like from "../media/like.svg"
import gift from "../media/gift.svg"
// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import {Link} from 'react-router-dom'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Campaign(props) {
    let { cid } = useParams()
    const context = React.useContext(AppContext)
    //const camps = Object.entries(context.campaigns)
    const camp = Object.values(context.campaigns).find(p => p.id === parseInt(cid))



    if (!camp) {
        return (<div><h2 className="m-4 text-center">Campaign still loading...</h2><p className="m-4 text-center">A long wait time may mean your campaign may not exist.</p></div>)
    }

const score = parseFloat(camp.success_score).toFixed(2)
    return (
        <div>
            <bs.Jumbotron>
                <bs.Row>
                    <h1 >{camp.title}</h1> 
                
                </bs.Row>
                <div style={{float:"left"}}>
                <div>
                    Country of Origin: {countries[`${camp.location_country}`].name}
                </div>
                <div>
                    Launch Date: {`${camp.launch_date}`}
                </div>
                </div>
                <div style={{float: "right"}}>
                    <Link to={`/modify/${camp.id}`} className="btn btn-primary">
                        Modify Success Parameters
                        </Link>&nbsp; &nbsp;  
                    <bs.Button href={`${camp.url}`}>
                        GoFundMe Page
                    </bs.Button>    
                </div>
                <br /><br/><br/><br/>
                <bs.Row align="center">
                    <bs.Col md="1"></bs.Col>
                    <bs.Col md="3"><img alt="piggy bank" src={piggyBank} align="center" width="15%" /></bs.Col>
                    <bs.Col md="4"><img alt= "thumbs up" src={like} align="center" width="10%" /></bs.Col>
                    <bs.Col md="3"><img alt="gift" src={gift} align="center" width="13%" /></bs.Col>
                    <bs.Col md="1"></bs.Col>
                </bs.Row><br />
                <bs.Row font-size="25%">
                    <bs.Col md="1"></bs.Col>
                    <bs.Col md="3">
                        <table align="center">
                            <tr>
                                <td><h5>Currency Type:</h5></td>
                                <td width="25%"></td>
                                <td align="right" md="1"><h6>{`${camp.currencycode}`}</h6></td>
                            </tr>
                            <tr>
                                <td><h5>Current Amount (USD):</h5></td>
                                <td width="25%"></td>
                                <td align="right"><h6>{'$' + parseInt(camp.current_amount_USD).toFixed(2)}</h6></td>
                            </tr>
                        </table>
                    </bs.Col>
                    <bs.Col md="4">
                        <table align="center">
                            <tr>
                                <td width="50%"><h5>Campaign Hearts:</h5></td>
                                <td width="25%"></td>
                                <td><h6>{`${camp.campaign_hearts}`}</h6></td>
                            </tr>
                            <tr>
                                <td><h5>Social Share Total:</h5></td>
                                <td width="25%"></td>
                                <td><h6>{`${camp.social_share_total}`}</h6></td>
                            </tr>
                        </table>
                        {/* <div>
                            Campaign Hearts: {`${camp.campaign_hearts}`}
                        </div>
                        <div>
                            Social Share Total: {`${camp.social_share_total}`}
                        </div> */}
                    </bs.Col>
                    <bs.Col md="3">
                        <table align="center">
                            <tr>
                                <td><h5>Number of Donors:</h5></td>
                                <td width="25%"></td>
                                <td><h6>{`${camp.donators}`}</h6></td>
                            </tr>
                            <tr>
                                <td><h5>Average Donation:</h5></td>
                                <td width="25%"></td>
                                <td><h6>{'$' + parseInt(camp.amount_per_donation).toFixed(2)}</h6></td>
                            </tr>
                        </table>
                        {/* <div>
                            # of Donors: {`${camp.donators}`}
                        </div>
                        <div>
                            Avg Donation: {'$' + parseInt(camp.amount_per_donation).toFixed(2)}
                        </div> */}
                        <br />
                    </bs.Col>
                    <bs.Col md="1"></bs.Col>
                </bs.Row>
                <br></br>
                <bs.Row>
                    <bs.Col md="4"></bs.Col>
                    <bs.Col md="3">
                        <div>
                        <span className=" form-label"> <strong>Success Score:</strong> </span>
                        <br/>
                        {/* <span className="pl-4 mb-2 text-center">{parseFloat(score).toFixed(2)}</span> */}
                        </div>
                    </bs.Col>
                    <bs.Col md="2"><span className="form-label"><strong>Percent of Goal:</strong></span><br/></bs.Col>
                    <bs.Col md="3"></bs.Col>
                </bs.Row>
                        <br/>
                <bs.Row>
                   <bs.Col md="4"></bs.Col>     
                    <bs.Col md="1">
                        
                        <AnimatedProgressProvider valueStart={0} valueEnd={score} duration={1.4} easingFunction={easeQuadInOut}>
                        {value => {
                            return (
                                <CircularProgressbarWithChildren value={value} /*   text={`${roundedValue}%`} */ styles={buildStyles({ pathTransition: "none" })}>
                                    <div style={{
                                        color: "#3e98c7", 
                                        fontSize: "20px", 
                                    }}>{value} </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                    
                    </bs.Col>
                    <bs.Col md="2"></bs.Col>
                    <bs.Col md="1">
                        
                        <AnimatedProgressProvider valueStart={0} valueEnd={camp.percent_of_goal} duration={1.4} easingFunction={easeQuadInOut}>
                        {value => {
                            return (
                                <CircularProgressbarWithChildren value={value} /*   text={`${roundedValue}%`} */ styles={buildStyles({ pathTransition: "none" })}>
                                    <div style={{
                                        color: "#3e98c7", 
                                        fontSize: "20px", 
                                    }}>{camp.percent_of_goal.toFixed(2) + '%'} </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                    </bs.Col>
                    <bs.Col md="4"></bs.Col>
                    <br/>
                </bs.Row>
            </bs.Jumbotron>
            <bs.Container>
                <bs.Row>
                    <bs.Col md="12">
                        <Collapse>
                            <embed height="500px" width="100%" src={`${camp.url}?utm_source=customer&utm_medium=copy_link-tip&utm_campaign=p_cp+share-sheet`} type="text/html"></embed>
                        </Collapse>
                    </bs.Col>
                </bs.Row>
            </bs.Container>
        </div>
    )
}