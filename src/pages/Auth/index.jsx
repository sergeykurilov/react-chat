import React, { Component } from 'react'

import { LoginForm } from "modules";

import "./Auth.scss";



const Auth = () => {
        return (
          <section className="auth">
          <div className="auth__top">

               <LoginForm />
                </div>
              </section>
            );
    };
export default Auth;