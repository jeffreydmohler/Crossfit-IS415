import React from 'react'
import * as bs from 'react-bootstrap'
import {Link} from 'react-router-dom'

function CampaignBooster(props) {
    return (
        <div>
            <bs.Row>
                <bs.Col md='1'></bs.Col>
                <bs.Col>
                    <br />
                    <Link to="/create" className="btn btn-primary float-right">Return to Predictor</Link>
                    <br />
                    <h1>How can I increase my probability of success?</h1>
                    <br /><p>Are you trying to get a higher success score? Here are a few tips:</p><br />
                    <h3>Only change one feature at a time</h3><br />
                    <p>
                        If you got a lower score than you wanted the first time, <strong>don't start over completely! </strong> <br /><br />
                        For example, you may have a great title, but your description could use some work and that alone lowers your success score. <br /><br />
                        Rather than starting with a clean slate, change just one part of your campaign and run the calculator again to see if it helped.
                    </p> <br />
                    <h3>Play with some buzz words</h3>
                    <p>Due to the current global condition with COVID-19, certain words and phrases have proven to help influence donations in a campaign.
                    If any of these words relate to your campaign, try incorporating them into your title or description!
                    </p> <br /><br />
                    <table align='Center' width='100%'>
                        <tr align='Center'>
                            <th width='33.33%'>English</th>
                            <th>Spanish</th>
                            <th>Italian</th>
                        </tr>
                        <tr align='Center'>
                            <td>
                                college <br />
                        frontliners safe handmade <br />
                        increase discount <br />
                        love page bar <br />
                        care need owe <br />
                        implementation key initiative end <br />
                        anticipation ongoing impact <br />
                        governor shut <br />
                        coworker artwork donate <br />
                        people need observe hygienic <br />
                        pharmacy drugstore <br />
                        open market devastate <br />
                        frontliners hospital need metro manila < br />
                        platform effectively communicate <br />
                        school district new <br />
                        past let try <br />
                        connection dedication <br />
                        able source appropriate fabric need <br />
                        right you help biggest <br />
                        lunch <br />
                        vulnerable expand spread virus crucial <br />
                        hand wash station dumpster <br />
                        director texaspreparedness.com <br />
                        situation produce inside country <br />
                        necessary tool <br />
                        italy despite fact <br />
                        bed people unite <br />
                        provide campaign purchase <br />
                        currently pay job <br />
                        instance cash bail <br />
                        ppe friend <br />
                        hand sanitizer patient <br />
                        care love <br />
                        transmission people <br />
                        open heart <br />
                        right need <br />
                        fun incentive fence <br />
                        kilo bag USD <br />
                        kid continue <br />
                        Louisiana <br />
                        team include Christina lee <br />
                        healthcare friend <br />
                        cut outgoing period closure <br />
                        pr consultance <br />
                        hate say <br />
                        page your donation <br />
                        teacher tutor personal trainer <br />
                        pay worker <br />
                        #danburystrong #wecandothis <br />
                        modest home <br />
                        risk behalf Italy <br />
                        local hospital <br />
                        cut outgoing period closure <br />
                                <br />
                                <br />
                            </td>
                            <td valign='top'>
                                los hospitales <br />
                        todo tu corazon <br />
                        destinarán <br />
                        final esta campaña todas las <br />
                        estamos viviendo en españa por <br />
                                <br /><br /><br />
                                <strong>Dutch</strong> <br />
                        overmaakt samen staan sterk	<br /><br /><br />
                                <br />
                                <strong>German</strong> <br />
                        meist elektro <br />
                        diese aussehen werden kann <br />
                        der aktuellen situation umzugehen <br />
                        mehrere wochen vorgesehen <br />
                        kreuz graz <br />
                        sich selbst die mitarbeiter <br /><br /><br /><br />
                                <strong>Chinese</strong> <br />
                        持续支援武汉 ， 共同打赢这场战 " 疫 <br />
                            </td>
                            <td valign='top'>
                                nostra città particolare <br />
                        triage tent medical center <br />
                        quello che può <br />
                        centrali avviene seconda delle <br />
                        ben oltre la quota prestabilita <br />
                        fondamentali poter <br />
                        di no sì grande questa	<br />
                        occupano questi reparti che <br />
                        la clinica sant ambrogio <br />
                        oltre alla donazione <br />
                        più fragili rispetto <br />
                        gune come sea <br />
                        volontà <br />
                        utilizzati dall'ente nazionale acquistare <br />
                        degli studi di udine <br />
                        nostro e vostro aiuto <br />
                        fondi possibile quali compreremo <br />
                        stesso sostieni medici infermieri	 <br />
                        da prima <br />
                        assetto politico perché la politica <br />
                        di restituire di essere uniti <br />
                        abbiamo tutto partire <br />
                        italiana loro viene chiesto <br />
                        assetto politico perché la politica <br />
                                <br />
                            </td>
                        </tr>
                    </table>
                </bs.Col>
                <bs.Col md='1'></bs.Col>
            </bs.Row>
        </div>
    )
}
export default CampaignBooster