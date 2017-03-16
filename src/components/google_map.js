import React, {Component} from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    let {lat, lon} = this.props;
    new google.maps.Map(this.map, {
      zoom: 12,
      center: {
        lat,
        lng: lon
      }
    });
  }

  render() {
    return <div ref={ el => this.map = el } />
  }
}

export default GoogleMap;