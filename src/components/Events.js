import React, { Component } from 'react';
import '../css/events.css';
import Act from './Act';
import axios from 'axios';
import moment from 'moment';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      index: 0,
      forward: false
    }

    this.next = this.translate.bind(this);
  }

  componentDidMount() {
    const clientID = 'MTA2NDM1OTV8MTUxOTE5MjUzMi4yMg',
        zipCode = '78701',
        type = 'concert',
        startDate = moment().format('YYYY-MM-DD'),
        endDate = moment(startDate).add(1, 'M').format('YYYY-MM-DD'),
        score = '0.5';


    axios.get(`https://api.seatgeek.com/2/events?client_id=${clientID}&postal_code=${zipCode}&type=${type}&datetime_utc.gte=${startDate}&datetime_utc.lte=${endDate}&per_page=50&score.gte=${score}`)
    .then(response => {
      let events = response.data.events,
          list = [];

      events.forEach((ev, index) => {
        list.push({
          event: ev,
          number: index
        });
      });

      this.setState({
        events: list
      });
    });
  }

  translate(direction) {
    let index = this.state.index

    if (direction === 'next') {
      index +=3;
    } else if (direction === 'previous') {
      index -=3;
    } else {
      return;
    }

    this.setState({
      index
    });
  }

  render(){
    const index = this.state.index;
    const length = this.state.events.length;
    const lastIndex = index + 3;
    let acts = this.state.events.map(act => {
      return <Act key={ act.event.id } id={ act.event.number } title={ act.event.short_title } imageURL={ act.event.performers[0].image } date={ act.event.datetime_utc }
        link={ act.event.url } venue={ act.event.venue.name } score={ act.event.score } />
    });

    let actsToDisplay = acts.slice(index, lastIndex);

    return(
      <div className="events-container">
        <h2>Upcoming</h2>
        <section className="events-list bounceOutLeft">
          <a onClick={ this.translate.bind(this, 'previous') }><i className="fa fa-chevron-left fa-3x"></i></a>
          { actsToDisplay }

          <a onClick={ this.translate.bind(this, 'next') }><i className="fa fa-chevron-right fa-3x"></i></a>
        </section>
      </div>
    )
  }
}

export default Events;
