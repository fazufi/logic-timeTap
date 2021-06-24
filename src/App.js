import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    // day: [],
    time1: [
      { hour: 23, minute: 0 },
      { hour: null, minute: null },
      { hour: null, minute: null },
    ],
    time2: [
      { hour: null, minute: null },
      { hour: null, minute: null },
      { hour: null, minute: null },
    ],
  };

  tambah = (e) => {
    e.preventDefault();
    const { time1, time2 } = this.state;
    const i = time1.findIndex((f) => f.hour == null);
    const i2 = time2.findIndex((f) => f.hour == null);
    if (time1[2].hour === null) {
      let lastMinute1 = i && time1[i - 1].minute;
      time1[i] = { hour: time1[0].hour, minute: lastMinute1 + 10 };
      this.setState({ time1 });
    } else {
      let lastMinute2 = null;
      time2[0].hour === null
        ? (lastMinute2 = time1[2].minute)
        : (lastMinute2 = time2[i2-1].minute);

      time2[i2] = { hour: time1[0].hour, minute: lastMinute2 + 10 };
      this.setState({ time2 });

    }
 
    if (time2[2].hour !== null) {
      const lastHour = time1[0].hour;
      this.setState({
        time1: [
          { hour: lastHour + 1, minute: 0 },
          { hour: null, minute: null },
          { hour: null, minute: null },
        ], time2:  [
          { hour: null, minute: null },
          { hour: null, minute: null },
          { hour: null, minute: null },
        ]
      });
    
    }
console.log(time2[2].hour);
    // let lastHour = 0;
    // time1[].hour === null
    //   ? (lastHour = time1[i - 1].hour)
    //   : (lastHour = time1[0].hour);
    // let lastMinute = 0;
    // time2[2].hour === null
    //   ? (lastMinute = time1[i - 1].minute)
    //   : (lastMinute = 0);
    // if (time2[2].hour === null) {
    //   time1[i] = { hour: lastHour, minute: lastMinute + 10 };
    //   this.setState({ time1 });
    //   console.log("IIFFFFFFF");
    // } else {
    //   this.setState({
    //     time1: [
    //       { hour: lastHour + 1, minute: 0 },
    //       { hour: null, minute: null },
    //       { hour: null, minute: null },
    //       { hour: null, minute: null },
    //       { hour: null, minute: null },
    //       { hour: null, minute: null },
    //     ],
    //   });
    //   console.log("ELSEEEE");
    // }
    // console.log(lastHour + 1);

    // console.log(time2[2].hour === null);
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {this.state.time1.map((t, i) => (
                <p>
                  {i + 1}. {t.hour} {t.hour !== null && ": "}
                  {t.minute}
                </p>
              ))}
            </Col>

            <Col>
              {this.state.time2.map((t, i) => (
                <p>
                  {i + 4}. {t.hour} {t.hour !== null && ": "}
                  {t.minute}
                </p>
              ))}
            </Col>
          </Row>
        </Container>
        <button onClick={this.tambah}>tambah</button>
      </div>
    );
  }
}
