import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age:'',
      phone:'',
      country:'',
      textA:'',
      //isFriendly: false,
      gender: "",
      favColor: ""
    }
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange=(event)=> {
    // DESTRUCTURING
    const { name, value, type, checked } = event.target
    type === "checkbox"?this.setState({[name]:checked}):this.setState({[name]:value});
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 p-md-3">
            <h1 style={{textAlign:'center',
            background:'green',
            color:'white',
            borderRadius:10
            }}>
            FORM
            </h1>
            <div className="form-group">
              <form onSubmit={this.handleSubmit}/>
              <input
                className="form-control border border-primary "
                type="text"
                value={this.state.firstName}
                name="firstName"
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control border border-primary"
                type="text"
                value={this.state.lastName}
                name="lastName"
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control border border-primary"
                type="number"
                value={this.state.age}
                name="age"
                placeholder="Age"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control border border-primary"
                type="number"
                value={this.state.phone}
                name="phone"
                placeholder="Phone"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control border border-primary"
                type="text"
                value={this.state.country}
                name="country"
                placeholder="Country"
                onChange={this.handleChange}
              />
            </div>

            <textarea name="textA"
            placeholder="About You"
              onChange={this.handleChange}
              className="form-control border border-primary textA"
            /> <br/>
            {/* <label>
            <h4>
              <input
                type="checkbox"
                name="isFriendly"
                checked={this.state.isFriendly}
                onChange={this.handleChange}
              />{' '}
              Is friendly? 
              </h4>
            </label> <br /> */}

            <label>
            <h4>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.handleChange}
                className=""
              />{' '}
             Male</h4> 
            </label> <br/>

            <label>
            <h4>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.handleChange}
              /> {' '}
                Female </h4> 
            </label> <br />
            <label><h4>Favourite Color:</h4></label>
            <select
              value={this.state.favColor}
              name="favColor"
              onChange={this.handleChange}
              className="form-control border border-primary"
            >
              <option value="choose your color">----Choose your color----</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="purple">Purple</option>
              <option value="black">Black</option>
            </select> <br />

            <hr/>
            <label><h1>Entered Info.</h1></label>
            <hr/>
            <h5>Name: {this.state.firstName}{' '}{this.state.lastName}</h5>
            <h5>Age: {this.state.age}</h5>
            <h5>Number: {this.state.phone}</h5>
            <h5>Country: {this.state.country}</h5>
            <h5>About: {this.state.textA}</h5>
            <h5>Gender: {this.state.gender}</h5>
            <h5>My favourite color is: {this.state.favColor}</h5>
         
            <button type="submit" className="btn btn-primary rounded ">Submit</button>
            
            <form />
          </div>
        </div>
      </div>
    );
  }
}
