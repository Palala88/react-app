import React from "react";

import { withRouter } from "react-router-dom";

class CreateInvoice extends React.Component {
  history;

  constructor(props) {
    super(props);

    this.history = props.history;

    this.state = {
      number: "",
      date_created: "",
      date_supplied: "",
      comment: "",
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeInput(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.state.number.length < 3) {
      alert("Please, type at least 3 symbols.");
      return;
    }

    const request = {
      number: this.state.number,
      date_created: this.state.date_created,
      date_supplied: this.state.date_supplied,
      comment: this.state.comment,
    };
    fetch("http://localhost:3004/invoices/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    })
        .then(() => this.history.push("/"));
  }

  render() {
    return (
      <div>
        <h1>Create Invoice</h1>

        <div className="wrapper">
          <form>
            <div className="input-wrapper">
              <div className="input-row">
                <div className="input-col">
                  <label>Number:</label>
                  <div className="input-icon-wrap">
                    <input
                      className="input-field"
                      type="number"
                      name="number"
                      required
                      placeholder="Enter number"
                      value={this.state.number}
                      onChange={this.onChangeInput}
                    />
                    <i className="fas fa-cog icon"></i>
                  </div>
                </div>
                <div className="input-col">
                  <label>Invoice Date:</label>
                  <div className="input-icon-wrap">
                    <input
                      className="input-field"
                      type="text"
                      onFocus={(e) => (e.currentTarget.type = "date")}
                      onBlur={(e) => (e.currentTarget.type = "text")}
                      name="date_created"
                      required
                      placeholder="Select date"
                      value={this.state.date_created}
                      onChange={this.onChangeInput}
                    />
                    <i className="fas fa-calendar-alt icon"></i>
                  </div>
                </div>
              </div>
              <div className="input-row">
                <div className="input-col">
                  <label>Supply Date:</label>
                  <div className="input-icon-wrap date_supplied-wrap" >
                  <input
                    className="input-field"
                    type="text"
                    name="date_supplied"
                    required
                    onFocus={(e) => (e.currentTarget.type = "date")}
                    onBlur={(e) => (e.currentTarget.type = "text")}
                    placeholder="Select date"
                    value={this.state.date_supplied}
                    onChange={this.onChangeInput}
                  />
                    <i className="fas fa-calendar-alt icon"></i>
                  </div>
                </div>
              </div>
              <div className="comment-block">
                <label>Comment: </label>

                <textarea
                  className="comment"
                  name="comment"
                  maxLength="160"
                  required
                  value={this.state.comment}
                  onChange={this.onChangeInput}
                ></textarea>
              </div>
            </div>

            <div className="save-btn">
              <button type="submit" onClick={this.onSubmit}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateInvoice);
