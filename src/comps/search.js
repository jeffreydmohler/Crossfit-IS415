import React from "react";
import * as bs from 'react-bootstrap';
//import ReactDOM from "react-dom";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom"
import AppContext from '../context'
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.css";

// import "./styles.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { numberFilter, Comparator, textFilter } from 'react-bootstrap-table2-filter'

//https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Dummy%20Column&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel

// function addCamp(x){
//     //do the .mapping ish

//     products.push({
//         id: "0",
//         name: "name"
//     })
// }

const Table = props => {
    const context = React.useContext(AppContext)
    let camps = Object.values(context.campaigns)

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      hidden: true
    },


      {
        dataField: "title",
        text: "Title"
        , formatter: (cell, row) => {
            return(<Link style={{ color: "blue"}}to={`/camp/${row.id}`}>{cell}</Link>)
        }
        ,sort: true
        ,filter: textFilter()
      },
    {
      dataField: "location_state",
      text: "State"
      ,sort: true
      ,filter: textFilter()
    },
    {
      dataField: "location_country",
      text: "Country"
      ,sort: true
      ,filter: textFilter()
    },
    {
      dataField: "goal_USD",
      text: "Total Goal (USD)"
      ,sort: true
      ,filter: numberFilter({defaultValue: { number: 1, comparator: Comparator.GE}}),
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') return a - b;
        else return b - a;
      },
      formatter: (cell, row) => {
        return `$${cell.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
        // return `$${cell}`;
    },},
    {
      dataField: "percent_of_goal",
      text: "% of Goal"
      ,sort: true
      ,filter: numberFilter({
        defaultValue: { number: 100, comparator: Comparator.LE}
      }),
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') return a - b;
        else return b - a;
      },
      formatter: (cell, row) => {
        return(<div>
          <>
          {[`${cell.toFixed(2)}%`].map((placement) => (
            <>
              <bs.OverlayTrigger
                key={placement}
                placement={'top'}
                overlay={
                  <bs.Tooltip id={`tooltip-${placement}`}>
                    <strong>{placement}</strong>.
                  </bs.Tooltip>
                }
              >
                <bs.ProgressBar now={parseFloat(cell).toFixed(2)} label={`${parseFloat(cell).toFixed(2)}%`} />
              </bs.OverlayTrigger>{' '}
            </>
          ))}
        </>
        
        
        
        

          
          {/* <progress value={cell} max="100" 
          
          style={{textAlign: 'center', content: `${attr(value)}%` }}
          />
           
           <div>{cell}%</div> </div> */} </div>

        
   )
      }
    },
    {
      dataField: "amount_per_donation",
      text: " Average Per Donation",
      type: "number",
      sort: true,
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') return a - b;
        else return b - a;
      },
      filter: numberFilter({
        defaultValue: { number: 1, comparator: Comparator.GE}
      }),
      formatter: (cell, row) => {
        return `$${(parseFloat(cell).toFixed()).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
        // return `$${cell}`;

    },
    },
    {
      dataField: "success_score",
      text: "Success Score"
      ,sort: true
      ,filter: numberFilter({
        defaultValue: { number: 1, comparator: Comparator.GT},

        formatter: (cell, row) => {
          return parseFloat(cell).toFixed(2) }
      }),
      
    },
  ];

  const defaultSorted =[{
      dataField: 'id',
      order: 'asc'
  }]

  if (camps.length < 1) {
    return (<div><h2 className="m-4 text-center">Campaigns still loading...</h2></div>)
  }

  return (
    <div style={{ padding: "20px", }}>
      <h1 className="h2" style={{float: "left"}}>Campaigns</h1> <Link to="/success-score" style={{fontSize:"16px", color: "blue", float: "right"}}>What determines success?</Link>
      <BootstrapTable 
        bootstrap4
        keyField="id" 
        data={camps} 
        columns={columns}
        striped
        hover
        condensed
        defaultSorted ={defaultSorted}
        pagination={ paginationFactory() }
        filter={ filterFactory() }
        
        />
    </div>
  );
};

export default Table
  

