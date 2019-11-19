import React from "react";
import {
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { onlyNumbers } from "../../utils/validators";

import "./style.scss";

function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

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
    name: "",
    username: "",
    birthDay: "",
    email: "",
    password: ""
  });

  const [error, setErrors] = React.useState({
    name: null,
    username: null,
    birthDay: null,
    email: null,
    password: null
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
    setErrors({
      ...error,
      [event.target.name]: onlyNumbers(event.target.name).message
    });
  };

  const handleSubmitRegister = event => {
    // Llamado al API
    // props.register(state);
    event.preventDefault();
    console.log(state);
  };

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
                value={state.name}
                name="name"
              />
              {error.name && <span>{error.name}</span>}
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Username"
                onChange={handleChange}
                value={state.username}
                name="username"
              />
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Birth day"
                onChange={handleChange}
                value={state.birthDay}
                name="birthDay"
              />
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Email"
                onChange={handleChange}
                value={state.email}
                name="email"
              />
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Password"
                onChange={handleChange}
                value={state.password}
                name="password"
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
                  Register
                </Button>
              </section>
            </form>
          </section>
        </div>
      </div>
    </Grid>
  );
};

const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch => {
  // return { register: (user) => dispatch(register(user))}
};

export default Register;
