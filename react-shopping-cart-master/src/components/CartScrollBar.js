import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import ReactFancyBox from "react-fancybox";
import "react-fancybox/lib/fancybox.css";

class CartScrollBar extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.getoffers = this.getoffers.bind(this);
    this.state = {
      Offer1: "",
      Offer2: "",
      Offer3: ""
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    const positions = this.refs.scrollbars.getValues();
    //When the bottom is reached and we're scrolling down, prevent scrolling of the window
    if (positions.top >= 1) {
      console.log("Reached scroll end!");
      event.stopPropagation();
    }
  }
  getoffers() {
    fetch(
      "https://res.cloudinary.com/jatinbhambhani/raw/upload/v1557703552/wegpjxcbpkfnvvrnqkf8.json"
    )
      .then(response => response.json())
      .then(jsonData => {
        // alert(jsonData[0]);
        const offer1 =
          "Name:" +
          jsonData[0].name +
          " product:" +
          jsonData[0].product +
          " price:" +
          jsonData[0].price +
          " end date:" +
          jsonData[0].end_date;

        const offer2 =
          "Name:" +
          jsonData[1].name +
          " product:" +
          jsonData[1].product +
          " price:" +
          jsonData[1].price +
          " end date:" +
          jsonData[1].end_date;

        const offer3 =
          "Name:" +
          jsonData[2].name +
          " product:" +
          jsonData[2].product +
          " price:" +
          jsonData[2].price +
          " end date:" +
          jsonData[2].end_date;

        this.setState({ Offer1: offer1 });
        this.setState({ Offer2: offer2 });
        this.setState({ Offer3: offer3 });
        // jsonData is parsed json object received from url
        console.log("jsonData");
      })
      .catch(error => {
        // handle your errors here
        console.error(error);
      });
  }
  render() {
    return (
      <Scrollbars style={{ width: 360, height: 320 }} ref="scrollbars">
        {this.props.children}
        <br />
        <button onClick={this.getoffers} style={{ width: 200, height: 20 }}>
          Special Offers
        </button>
        <table>
          <tr>
            <td>
              <a href="#">{this.state.Offer1}</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#">{this.state.Offer2}</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#">{this.state.Offer3}</a>
            </td>
          </tr>
        </table>
        <br />

        <br />
        <br />

        {/* 

        {this.getoffers}

        <ReactFancyBox
          text="dfgdfg"
          thumbnail=""
          image=""
        /> */}
      </Scrollbars>
    );
    return <button text="hello">Hi</button>;
  }
}

export default CartScrollBar;
