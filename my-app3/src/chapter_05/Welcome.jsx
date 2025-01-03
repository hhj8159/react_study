// function Welcome(props) {
//   return <h1>안녕, {props.name}</h1>
// }

import { Component } from "react"

class Welcome extends Component {
  render() {
    return <h1>안녕, {this.props.name}</h1>
  }
}


// 반출해야 자동완성가능
export default Welcome
