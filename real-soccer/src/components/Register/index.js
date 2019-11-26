import React from "react";
import {
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl
} from "@material-ui/core";
import { onlyNumbers } from "../../utils/validators";
import { registerStart } from "../../redux/actions/registerActions";

import "./style.scss";

import { connect } from "react-redux";

function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange("checkedA")}
            value="checkedA"
          />
        }
        label="I want to receive information from Real Soccer App"
      />
    </FormGroup>
  );
}

const Register = props => {
  const [state, setState] = React.useState({
    displayName: "",
    username: "",
    birthday: "",
    email: "",
    password: ""
  });

  const [error, setErrors] = React.useState({
    displayName: null,
    username: null,
    birthday: null,
    email: null,
    password: null
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
    setErrors({
      ...error,
      [event.target.name]: onlyNumbers(event.target.name).message
      //onlyNumbers
      //hardPassword
      //basicPassword
      //emailValidator
    });
  };

  const handleSubmitRegister = event => {
    event.preventDefault();
    console.log(state);
    
    props.registerStart(state);
  };

  console.log(props);

  return (
    <Grid
      container
      direction="column"
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <div className="register-container">
        <div className="basic-info">
          <section className="info">
            <h1>Register Form</h1>
          </section>
        </div>
        <div className="user-info">
          <section className="info">
            <form action="" onSubmit={handleSubmitRegister}>
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Name"
                onChange={handleChange}
                value={state.displayName}
                name="displayName"
                autoComplete="off"
              />
              {error.name && <span>{error.name}</span>}
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Username"
                onChange={handleChange}
                value={state.username}
                name="username"
                autoComplete="off"
              />
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Birth day"
                onChange={handleChange}
                value={state.birthday}
                name="birthday"
                autoComplete="off"
              />
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Email"
                onChange={handleChange}
                value={state.email}
                name="email"
                autoComplete="off"
              />
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Password"
                onChange={handleChange}
                value={state.password}
                name="password"
                autoComplete="off"
              />
              <section className="check-info">
                <CheckboxLabels></CheckboxLabels>
              </section>
              <section className="btn-info">
                <Button
                  variant="contained"
                  color="primary"
                  className="btn"
                  type="submit"
                >
                  {props.isLoading ? "Sending .." : "Register"}
                </Button>
                {props.error ? <p>{props.error}</p> : ""}
              </section>
            </form>
          </section>
        </div>
      </div>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    error: state.register.error,
    isLoading: state.register.isLoading,
    registerConfirm: state.register.registerConfirm
  };
};

const mapDispatchToProps = dispatch => {
  return { registerStart: payload => dispatch(registerStart(payload)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
