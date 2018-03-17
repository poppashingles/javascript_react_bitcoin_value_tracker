import React from 'react'
import LineChart from 'react-linechart';

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
    let obj = this.props.dates

    const data = [
        {
            color: "steelblue",
            points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}]
        }
    ];

    return(
      <div>
        <LineChart
            width={600}
            height={400}
            data={data}
        />

        <ul>
          {Object.keys(obj).map(function(key) {
              return <li>Date: {key}, Value: {obj[key]}</li>;
          })}
        </ul>
      </div>
    )
  }
}

export default DateSelector
