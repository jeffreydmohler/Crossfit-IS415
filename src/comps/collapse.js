import React from 'react'
import * as bs from 'react-bootstrap'
export default function Collapse(props) {
    const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);
  
    const style = {
      collapsed: {
        display: 'none'
      },
      expanded: {
        display: 'block'
      },
      buttonStyle: {
        display: 'block',
        width: '100%'
      }
    };
  
    return (
      <div>
        <bs.Button style={style.buttonStyle} onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? 'Click to View GoFundMe Page' : 'Click to Hide GoFundMe Page'}
        </bs.Button>
        <div
          className="collapse-content"
          style={isCollapsed ? style.collapsed : style.expanded}
          aria-expanded={isCollapsed}
        >
          {props.children}
        </div>
      </div>
    );
  }