import React from 'react'
import * as bs from 'react-bootstrap'
import {Link} from 'react-router-dom'

function SuccessScore(props) {

    return (
        <div margin='50px'>
            <bs.Row>
                <bs.Col md='1'></bs.Col>
                <bs.Col md='10'>
                    <br />
                    <Link to="/create" className="btn btn-primary float-right">Return to Predictor</Link>
                    <h1>Success Score</h1>
                    <p>This site uses a success score to predict how well your GoFundMe campaign will do based on campaign content.</p>
                    <h3>Success Score Components</h3>
                    <p>
                        The success score is calculated based on two projected values:
                        <ul>
                            <li>Percent of goal reached in donations</li>
                            <li>Average donation amount received per donor</li>
                        </ul>
                        These two projected metrics are scaled and put into an average to deliver the final success score shown in the campaign prediction page.
                    </p>
                    <h3>Success Score Range</h3>
                    <p>
                        The success score ranges from 0 - 100 with an average score of 50. The scores are ranked as follows:
                    </p>
                    <bs.Table>
                        <bs.Row>
                            <bs.Col md='1'><strong>Success Score</strong></bs.Col>
                            <bs.Col md='.1'></bs.Col>
                            <bs.Col><strong>Ranking</strong></bs.Col>
                        </bs.Row>
                        <bs.Row>
                            <bs.Col md='1'>0-34</bs.Col>
                            <bs.Col md='.1'></bs.Col>
                            <bs.Col>Poor</bs.Col>
                        </bs.Row>
                        <bs.Row>
                            <bs.Col md='1'>35-44</bs.Col>
                            <bs.Col md='.1'></bs.Col>
                            <bs.Col>Fair</bs.Col>
                        </bs.Row>
                        <bs.Row>
                            <bs.Col md='1'>45-54</bs.Col>
                            <bs.Col md='.1'></bs.Col>
                            <bs.Col>Average</bs.Col>
                        </bs.Row>
                        <bs.Row>
                            <bs.Col md='1'>55-64</bs.Col>
                            <bs.Col md='.1'></bs.Col>
                            <bs.Col>Good</bs.Col>
                        </bs.Row>
                        <bs.Row>
                            <bs.Col md='1'>65-100</bs.Col>
                            <bs.Col md='.1'></bs.Col>
                            <bs.Col>Excellent</bs.Col>
                        </bs.Row>
                    </bs.Table>
                    <br />
                    <p>
                        As you evalate your success score, keep in mind that very few scores will ever reach below 20 or above 80.
                    </p>
                    <br />
                </bs.Col>
                <bs.Col md='1'></bs.Col>
            </bs.Row>
            <bs.Row>
                <bs.Col md='2'></bs.Col>
                <bs.Col md='8' className='bg-secondary' border-style='solid'>
                    <br />
                    <table>
                        <tr>
                            <td width='3%'></td>
                            <td><div>
                                <h3>
                                    Our Methodology
                                </h3>
                                <p>
                                    To deliver our metrics, our analyst team ran exploratory data analyses within python. The predictive model was created and deployed through Microsoft Azure Machine Learning Studio.

                                    This model uses text analytics and a boosted decision tree regression.
                                </p>
                            </div><br /></td>
                            <td width='3%'></td>
                        </tr>
                    </table>
                </bs.Col>
                <bs.Col md='2'></bs.Col>
            </bs.Row>
        </div>
    )
}
export default SuccessScore