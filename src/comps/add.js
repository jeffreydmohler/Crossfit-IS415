import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
//import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
//import CountryState from './Country'
// Animation
//import { easeQuadInOut } from "d3-ease";
//import AnimatedProgressProvider from "./AnimatedProgressProvider";
import {Link} from 'react-router-dom'


const axios = require('axios')

export default function Create(props) {
    return (
        <CreateController />
    )
}
const CreateController = props => {

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <Formik
            initialValues={{
                Country: "US",
                Age: "2",
                Height: "54",
                BodyWeight: "120",
                GamesQualify: "TRUE",
                BackSquat: "150",
                CleanAndJerk: "120",
                Snatch: "130",
                Deadlift: "150",
                FightGoneBad: "170",
                MaxPullUps: "18",
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                console.log('validating', values)

                return errors
            }}
            onSubmit={handleSubmit, async (values, actions) => {

                console.log('submit', values)
                const resp = await axios.post('/api/men/', {
                    Country: values.Country,
                    Age: values.Age,
                    Height: values.Height,
                    BodyWeight: values.BodyWeight,
                    GamesQualify: values.GamesQualify,
                    BackSquat: values.BackSquat,
                    CleanAndJerk: values.CleanAndJerk,
                    Snatch: values.Snatch,
                    Deadlift: values.Deadlift,
                    FightGoneBad: values.FightGoneBad,
                    MaxPullUps: values.MaxPullUps,
                    // enter in all the values
                })
                console.log(resp)
                document.documentElement.scrollTop = 0;

                await new Promise(resolve => {
                    setTimeout(() => {
                        resolve()

                        actions.setSubmitting(false)
                    }, 2000)
                })
            }}
        >{form => (
            <CreateForm form={form}/>)}</Formik>
    )
}

const CreateForm = props => (
    <Form>
        <bs.Container>
            <bs.Card.Header as="h5">Predict Men's Crossfit -- Will you make it into the games?</bs.Card.Header>
            
            {/* <bs.Row> &nbsp;</bs.Row> */}
            <bs.Row>
                <bs.Col md="10">
                    <bs.Card.Body>
                        <Input title="Country:" name="Country" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Age:" name="Age" type="text" />
                        <Input title="Height:" name="Height" type="text" disabled={props.form.isSubmitting} />
                        <Input title="BodyWeight:" name="BodyWeight" type="text" disabled={props.form.isSubmitting} />
                        <Input title="GamesQualify:" name="GamesQualify" type="text" disabled={props.form.isSubmitting} />
                        <Input title="BackSquat:" name="BackSquat" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Snatch:" name="Snatch" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Deadlift:" name="Deadlift" type="text" disabled={props.form.isSubmitting} />
                        <Input title="FightGoneBad:" name="FightGoneBad" type="text" disabled={props.form.isSubmitting} />
                        <Input title="MaxPullUps:" name="MaxPullUps" type="text" disabled={props.form.isSubmitting} />
                        <Input title="CleanAndJerk:" name="CleanAndJerk" type="text" disabled={props.form.isSubmitting} />

                        {/* <span className="form-label">Location:</span> <br />
                         {<Field names={['location_country','location_state']} component={CountryState}/>} 
                         <CountryDropdown
                            name="location_country"
                            value={props.values.location_country}
                            valueType="short"
                            onChange={(_, e) => props.handleChange(e)} onBlur={props.handleBlur}
                            priorityOptions={["US", "CA", "GB"]}
                            disabled={props.form.isSubmitting} /> 
                        <CountryState disable={props.form.isSubmitting}/><br/>
                        <span className="form-label">Has a specific beneficiary been declared?</span> <br/>
                        <Radio name="has_beneficiary" type="radio" label="Yes" value="TRUE" />
                        <Radio name="has_beneficiary" type="radio" label="No" value="FALSE" />

                        <br/><br/>
                        <span className="form-label">Campaign organizer type:</span><br/>
                        <Radio name="is_charity" type="radio" label="Charitable Organization" value="TRUE" />
                        <Radio name="is_charity" type="radio" label="Individual" value="FALSE" /><br/><br/>

                        <Input title="Fundraising Goal (USD)" name="goal_lnplus" type="number" disabled={props.form.isSubmitting} width="25%" />
                         */}

                        <Link to='/fraud-detection' className="ml-1" style={{fontSize:"13px", color: "blue"}}>Workout Descriptions</Link>

                    </bs.Card.Body>
                    <bs.Button type="submit" disabled={props.form.isSubmitting} className="mb-4 w-100 ml-3">
                        <bs.Spinner animation="border" variant="success" size="sm" style={{ visibility: props.form.isSubmitting ? 'visible' : 'hidden' }} />
                        &nbsp;  &nbsp; Predict
                    </bs.Button> 
                    
                </bs.Col>
                <br/><br/>
                <bs.Col md="2">
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
                maxLength={400}
                
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)


// const Radio = (props) => (
//     <Field name={props.name}>{rProps => (
//             <bs.Form.Check
//                 inline
//                 name={props.name}
//                 type={props.type}
//                 placeholder={props.placeholder}
//                 {...rProps.field}
//                 disabled={props.disabled}
//                 label={props.label}
//                 value={props.value}
//             />
//     )}</Field>
// )
