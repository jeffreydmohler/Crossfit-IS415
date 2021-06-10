import React, { Component } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown } from 'react-country-region-selector';


class CountryState extends Component {
  constructor (props) {
    super(props);
    this.state = { country: props.country };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }


  render () {
    const { country } = this.state;
    return (
      <div>
            <CountryDropdown
              name="Country"
              id="cntry"
              value={country}
              valueType="short"
              onChange={(val) => this.selectCountry(val)}
              priorityOptions={["US", "CA", "GB"]}
              disabled={this.props.disable}
              required={true} />
      </div>
      
    );
  }
}

export default CountryState