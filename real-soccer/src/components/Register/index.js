import React from 'react';

import './style.scss'

const Register = () => (
    <div className="register-container">
        <div className="basic-info">
            <section className="logo">
                <img src="" alt=""/>
                <button className="btn">Upload</button>
            </section>
            <section className="info">
                <form action="">
                    <input type="text" className="form-control mb-1" placeholder="Name"/>
                    <input type="text" className="form-control mb-1" placeholder="Username"/>
                    <input type="text" className="form-control mb-1" placeholder="Birth day"/>
                    {/* <textarea name="" className="form-control" placeholder="Username"/> */}
                </form>
            </section>
        </div>
        <div className="user-info">
            <section className="info">
                <form action="">
                    <input type="text" className="form-control mb-1" placeholder="Email"/>
                    <input type="text" className="form-control mb-1" placeholder="Confirm Email"/>
                    <input type="text" className="form-control mb-1" placeholder="Password"/>
                    <input type="text" className="form-control mb-1" placeholder="Confirm Password"/>
                    <section className="check-info"> 
                        <input type="checkbox" id="cbox2" value="second_checkbox"/> <label for="cbox2">I want to receive information from Real Soccer App</label>
                    </section>
                    <section className="btn-info"> 
                        <button className="btn">Register</button>
                    </section>
                </form>
            </section>
        </div>
    </div>
);

export default Register;
