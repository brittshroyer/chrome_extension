import React, { Component } from 'react';

class Ethereum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceUSD: null,
      priceBTC: null,
      marketCapUSD: null,
      percentChange1H: null,
      percentChange24H: null,
      percentChange7D: null,
      volume24H: null,
      lastUpdated: null
    };
  }

  // *TODO set interval to get updates every few minutes

  componentWillMount() {
    const baseURL = "https://api.coinmarketcap.com/v1/ticker/";
    const fetchURL = baseURL + 'ethereum/';

    fetch(fetchURL, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => {
        let info = json[0];
        this.setState({
          priceUSD: info.price_usd,
          priceBTC: info.price_btc,
          marketCapUSD: info.market_cap_usd,
          percentChange1H: info.percent_change_1h,
          percentChange24H: info.percent_change_24h,
          percentChange7D: info.percent_change_7d,
          volume24H: info['24h_volume_usd'],
          lastUpdated: info.last_updated
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Response here</h1>
        <h2>{this.state.volume24H}</h2>

      </div>
    );
  }
}

export default Ethereum;
