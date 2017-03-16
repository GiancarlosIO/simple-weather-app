import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onInputSearchChange = (e) => {
    let term = e.target.value;
    this.setState({ term });
  }

  onFormSearchSubmit = (e) => {
    e.preventDefault();
    let {term} = this.state;
    // fecth weather data
    this.props.dispatch(fetchWeather(term));
    this.setState({term: ''});
  }

  render() {
    let {term} = this.state;
    return (
      <div>
        <form
          onSubmit={this.onFormSearchSubmit}
          className="input-group">
          <input
            value={term}
            onChange={this.onInputSearchChange}
            placeholder="Get five-day forecast in your favorite cities"
            type="text"
            className="form-control"/>
          <span className="input-group-btn">
            <button
              className="btn btn-secondary"
              type="submit">
              Search
            </button>
          </span>
        </form>
      </div>
    )
  }
}

// put the actions to props in the component
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
// only use the callback for bindActionCreators to pass the actions to child components away redux
// export default connect (null, mapDispatchToProps(dispatch));

export default connect()(SearchBar);