import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class TitleLine extends Component {

  componentDidMount(){
    console.log("mounted!!");
  }

  render() {
    return (
      <div>
        <p>Title Bar</p>
        </div>
      )
    }
  }

  TitleLine.propTypes = {
  }
