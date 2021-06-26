import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App2 extends Component {
  state = {
    time: [],
  };
  add = () => {
    const { time } = this.state;
    if (time.length) {
      const last = time[time.length - 1];
      let hour = last.hour;
      let minute = last.minute;
      if (last.minute === 50) {
        minute = 0;
        hour = hour + 1;
      } else {
        minute = minute + 10;
      }
      time.push({ hour, minute });
    } else {
      time.push({ hour: 1, minute: 0 });
    }
    this.setState({ time });
  };
  render() {
    const { time } = this.state;
    console.log("STATE", time);
    const jumlahpanel = 6;
    let perenam = [];
    let persatu = [];
    for (const [i, t] of time.entries()) {
      t.index = i+1
      if (i % jumlahpanel === 0 && i !== 0) {
        perenam.push(persatu);
        persatu = [];
        persatu.push(t);
      } else {
        persatu.push(t);
      }
    }
    // console.log(persatu.length, persatu);
    return (
      <div className="container">
        <button onClick={(e) => this.add()}>Add</button>
        <div className="row">
          <div className="col-md-6">
            col1
            {persatu.length
              ? persatu.map((d, i) => {
                  return i < 3 ? <div>{JSON.stringify(d)}</div> : null;
                })
              : null}
          </div>
          <div className="col-md-6">
            col2
            {persatu.length
              ? persatu.map((d, i) => {
                  return i >= 3 ? <div>{JSON.stringify(d)}</div> : null;
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}
