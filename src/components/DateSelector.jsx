import React from 'react'
import { LineChart } from 'react-easy-chart';

class DateSelector extends React.Component {
  constructor(props) {
    super(props)

    // Very small amount of state just to track it's own internals
    this.state = {
      selectedIndex: undefined
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const selectedIndex = event.target.value
    this.setState({ selectedIndex: selectedIndex })
    const selectedDate = this.props.dates[selectedIndex]
    this.props.setFocusDate(selectedDate)
  }

  render() {
    var obj = this.props.dates
    console.log(obj);

    return(
      <div>
        <LineChart
          axes
          width={400}
          height={250}
          data={[
            [
              { x: 1, y: 20 },
              { x: 2, y: 10 },
              { x: 3, y: 25 }
            ]
          ]}
        />

        <ul>
          {Object.keys(obj).map(function(key) {
              return <li>Date: {key}, Value: {obj[key]}</li>;
          })}
        </ul>
      </div>

      // <div>
      //   {obj.map(function(key, value) {
      //     return <li>{ [obj[key]] }</li>
      //   })}
      // </div>

      // <div>
      //   { Object.keys(obj).map(function(key) {
      //     return <li>{ [obj[key]] }</li>
      //   }) }
      // </div>
    )
  }
}

export default DateSelector
