import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CountryState from './Country'
// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import {Link, useParams} from 'react-router-dom'
import AppContext from '../context'

const axios = require('axios')



const patty = (x) => {
    if(x > 65) return "Excellent"
    else if(x > 55) return "Good"
    else if(x > 45) return "Average"
    else if(x > 35) return "Fair"
    else if(x > 0) return "Poor"
    else return "Predict"
 }

let score = 0;
let bill = patty(score)

let e
let country
let es
let state

const campaign = []

let emailBody = ""
let hrefText = "mailto:?body=Please make modifications and predict a success score before sending to client."

export default function Create(props) {
    const context = React.useContext(AppContext)
    let { cid } = useParams()
    const camp = Object.values(context.campaigns).find(p => p.id === parseInt(cid))

    if (!camp) {
        return (<div><h2 className="m-4 text-center">Campaign still loading...</h2><p className="m-4 text-center">A long wait time may mean your campaign may not exist.</p></div>)
    }
    return (
        <CreateController />
    )
}
const CreateController = props => {
    const context = React.useContext(AppContext)
    let { cid } = useParams()
    const camp = Object.values(context.campaigns).find(p => p.id === parseInt(cid))


    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <Formik
            initialValues={{
                title: camp.title,
                description: camp.description,
                location_country: camp.location_country,
                location_state: camp.location_state,
                has_beneficiary: camp.has_beneficiary.toLowerCase(),
                is_charity: camp.is_charity.toLowerCase(),
                goal_lnplus: parseInt(camp.goal_USD),
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                console.log('validating', values)
                if (!values.title) {
                    errors.title = '*Required'
                }
                if (values.title.length > 200) {
                    errors.title = 'Shorter Title'
                }
                if (!values.description) {
                    errors.description = '*Required'
                }
                if (values.has_beneficiary === "") {
                    errors.description = 'Beneficiary is Required'
                }
                if (values.is_charity === "") {
                    errors.description = 'Organzier Type is Required'
                }

                return errors
            }}
            onSubmit={handleSubmit, async (values, actions) => {
                e = document.getElementById("cntry")
                country = e.options[e.selectedIndex].value
                values.location_country = country

                es = document.getElementById("state")
                state = es.options[es.selectedIndex].value
                values.location_state = state

                console.log('submit', values)
                const resp = await axios.post('/api/predict/', {
                    values
                    // enter in all the values
                })
                score = resp.data
                bill = patty(score)

                document.documentElement.scrollTop = 0;

                campaign.push(values.title, values.description, values.location_country, values.location_state, values.has_beneficiary, values.is_charity, values.goal_lnplus)
                emailBody = "Hello from your GoFundMe family! %0d%0a %0d%0aWe noticed that you have recently started a COVID-19 related campaign on GoFundMe. We have a temporary service available that can help you make some tweaks to your campaign to make it more successful.We've run your campaign through our algorithm, and based on the results, we recommend the following for your campaign (keep in mind, some features are the same as you originally wrote them):%0d%0a %0d%0aYour New Success Score:%0d%0a" + parseFloat(score).toFixed(2) + " %0d%0a %0d%0aTitle: %0d%0a" + campaign[0] + "%0d%0a %0d%0aDescription: %0d%0a" + campaign[1] + "%0d%0a %0d%0aLocation: %0d%0a" + campaign[2] + ", " + campaign[3] + "%0d%0a %0d%0aHas Beneficiary: %0d%0a" + campaign[4] + "%0d%0a %0d%0aIs Charity: %0d%0a" + campaign[5] + "%0d%0a %0d%0aDonation Goal: %0d%0a" + campaign[6] + "%0d%0a %0d%0aYou can edit this in your current campaign by selecting the green edit button in your campaign page. %0d%0a %0d%0aIf you would like to play with our algorithm yourself, you can visit this website: %0d%0a %0d%0a https://checkcharitable.herokuapp.com/ %0d%0a %0d%0aWe wish you the best in your campaigning endeavors! %0d%0a %0d%0aGoFundMe"
                hrefText = "mailto:?subject=Give your campaign a boost!&body=" + emailBody

                if (hrefText.length > 1000) {
                    hrefText = "mailto:?subject=Give your campaign a boost!&body=Hello from your GoFundMe family! %0d%0a %0d%0a Our analysts have been looking at your Covid-19 related campaign and have found ways to improve the success of your campaign and reach your goal. Our success predictor is available for a limited time. %0d%0a %0d%0a Check it out at https://checkcharitable.herokuapp.com/ %0d%0a %0d%0a We wish you the best in your campaigning endeavors! %0d%0a %0d%0a GoFundMe"
                }

                await new Promise(resolve => {
                    setTimeout(() => {
                        resolve()

                        actions.setSubmitting(false)
                    }, 2000)
                })
            }}
        >{form => (
            <CreateForm form={form} camp={camp}/>)}</Formik>
    )
}

const CreateForm = props => (
    <Form>
        <bs.Container>
            <bs.Card.Header as="h5">Predict a Campaign for Analysts</bs.Card.Header>
            
            {/* <bs.Row> &nbsp;</bs.Row> */}
            <bs.Row>
                <bs.Col md="10">
                    <bs.Card.Body>
                        <Input title="Title:" name="title" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Description:" name="description" type="text" as="textarea" />
                        <span className="form-label">Location:</span> <br />
                        <CountryState country={props.camp.location_country} state={props.camp.location_state}  disable={props.form.isSubmitting}/><br/>
                        <span className="form-label">Has a specific beneficiary been declared?</span> <br/>
                        <Radio name="has_beneficiary" type="radio" label="Yes" value="TRUE" />
                        <Radio name="has_beneficiary" type="radio" label="No" value="FALSE" />

                        <br/><br/>
                        <span className="form-label">Campaign organizer type:</span><br/>
                        <Radio name="is_charity" type="radio" label="Charitable Organization" value="TRUE" />
                        <Radio name="is_charity" type="radio" label="Individual" value="FALSE" /><br/><br/>

                        <Input title="Fundraising Goal (USD)" name="goal_lnplus" type="number" disabled={props.form.isSubmitting} width="25%" />
                        

                        <Link to='/boost-camp' className="ml-1" style={{fontSize:"13px", color: "blue"}}>How can I boost my success score?</Link>

                    </bs.Card.Body>
                    <bs.Button type="submit" disabled={props.form.isSubmitting} className="mb-4 ml-3" style={{width:"48%"}}>
                        <bs.Spinner animation="border" variant="success" size="sm" style={{ visibility: props.form.isSubmitting ? 'visible' : 'hidden' }} />
                        &nbsp;  &nbsp; Predict
                    </bs.Button> 
                    {/* <bs.Button type="submit" disabled={props.form.isSubmitting} className="mb-4 ml-3" style={{width:"48%"}}> */}
                
                    <a href={hrefText} disabled={props.form.isSubmitting} className="mb-4 ml-3 btn btn-primary" style={{width:"48%"}}>Send Results to Campaign Organizer</a>
                    {/* </bs.Button>  */}
                </bs.Col>
                <br/><br/>
                <bs.Col md="2">
                <br/>
                    <AnimatedProgressProvider valueStart={0} valueEnd={score} duration={1.4} easingFunction={easeQuadInOut}>
                        {value => {
                            return (
                                <CircularProgressbarWithChildren value={value} /*   text={`${roundedValue}%`} */ styles={buildStyles({ pathTransition: "none" })}>
                                    <div style={{
                                        color: "#3e98c7", // dominantBaseline: "left",
                                        fontSize: "20px", // textAnchor: "left"
                                    }}>{bill} </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider><br/>
                    <span className="text-center form-label"> Success Score: {parseFloat(score).toFixed(2)}</span>
                    <br/><Link to="/success-score" style={{fontSize:"13px", color: "blue"}}>What determines success?</Link>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    </Form>
)
const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control
                type={props.type}
                placeholder={props.placeholder}
                {...rProps.field}
                disabled={props.disabled}
                as={props.as}
                style={{ display: "block", width: props.width, }}                
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)


const Radio = (props) => (
    <Field name={props.name}>{rProps => (
            <bs.Form.Check
                inline
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                {...rProps.field}
                disabled={props.disabled}
                label={props.label}
                value={props.value}
            />
    )}</Field>
)
