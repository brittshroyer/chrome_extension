import React, { Component } from 'react';
import '../css/act.css';
import moment from 'moment';
// import axios from 'axios';

class Act extends Component {

  render(){
    const date = moment(this.props.date).format('MMM Do'),
          url = this.props.imageURL || 'http://wrs8a3ki8zth7aut28u4yi107g.wpengine.netdna-cdn.com/wikiblog/wp-content/uploads/sites/2/2013/10/events-heavenly-header.jpg',
          style = { backgroundImage: `url(${url})`};

    return (
      <div className="act-container" style={style}>
        <p className="act-data act-date">{ date }</p>
        <p className="act-data act-title">{ this.props.title }</p>
      </div>
    )
  }
}

export default Act;
