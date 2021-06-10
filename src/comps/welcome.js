import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import vid from "../media/FootageOfSunsetView.mp4"
import classes from './front.module.css'

function Front(props) {
    return (
        <div>
            <video autoPlay="autoplay" loop="loop" muted width="auto" className={classes.Video}>
                <source src={vid} type="video/mp4" />
        Your browser does not support this video type
        </video>

            <div className={classes.Content}>
                <div >
                    <bs.Row >
                        <h1>Welcome to the Crossfit Predictor</h1>
                    </bs.Row>
                    <bs.Row>&nbsp;</bs.Row>
                    <bs.Row > 
                        <bs.Col >
                        <Link to="/create2">
                            <bs.Button variant="outline-success" size="lg">Run Women's Prediction</bs.Button>
                            </Link>
                        </bs.Col>
                        {/* <bs.Col>
                        &nbsp;
                    </bs.Col> */}
                        <bs.Col>
                            <Link to="/create">
                                <bs.Button variant="outline-success" size="lg">Run Men's Prediction</bs.Button>
                            </Link>
                        </bs.Col>
                    </bs.Row>
                </div>
            </div>
        </div>

    )
}
export default Front
