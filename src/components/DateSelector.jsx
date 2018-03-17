import React from 'react'

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

    return(
      <div>
        { Object.keys(obj).map(function(key) {
          return <li>{ [Date(key), obj[key]] }</li>
        }) }
      </div>
    )
  }
}

export default DateSelector
