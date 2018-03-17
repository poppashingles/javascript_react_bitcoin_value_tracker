import React from 'react'
import DateSelector from '../components/DateSelector'
import PriceDetail from '../components/PriceDetail'

class PriceIndexContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dates: [],
      focusDate: null
    };
    this.setFocusDate = this.setFocusDate.bind(this)
  }

  setFocusDate(date) {
    this.setState({ focusDate: date })
  }

  componentDidMount() {
    const url = 'https://api.coindesk.com/v1/bpi/historical/close.json'

    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const dates = JSON.parse(jsonString)
      this.setState({ dates: dates.bpi })
      console.log(dates.bpi);
    })
  }

  render() {
    return(
      <div>
        <h2>Last 30 days Bitcoin value</h2>
        <DateSelector dates={this.state.dates}/>
        <PriceDetail />
      </div>
    )
  }
}

export default PriceIndexContainer
