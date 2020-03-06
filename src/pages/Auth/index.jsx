import React from 'react';
import { Route} from 'react-router-dom';


import { LoginForm } from "modules";

import "./Auth.scss";



const Auth = () => {
        return (
          <section className="auth">
          <div className="auth__top">

              <Route exact path="/"  component={LoginForm} />
              <Route path="/:(/register"  render={() =>  <h1>Hello</h1> }/>
                </div>
              </section>
            );
    };
export default Auth;