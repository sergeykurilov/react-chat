import React from 'react'
import { Form, Input, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Button , Block} from 'components'
const success  = false;
const validate = (key ,touched, errors) =>{
  if(touched[key]){
    if(errors[key]){
      return 'error';
    }else {
      return 'success';
    }
  }
}


const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmittig
  } = props
  return (
    <div>
    <div className="auth__content">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
    </div>
          <Block>
         {!success ?  <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item 
          validateStatus={validate('E-mail', touched, errors)}
           
            help = {!touched.email ? "" : errors.email}
             hasFeedback>
              <Input
              id="email"
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                size= "large"
                placeholder="E-Mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
          </Form.Item>
         
    
          <Form.Item
          validateStatus={
            !touched.password ? '' : errors.password ? 'error' : 'success' } 
            help = {!touched.password ? '' : errors.password}
            hasFeedback
          >
              <Input
                  id="password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                size= "large"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
        
          </Form.Item>
        
          <Form.Item >
          {isSubmittig && !isValid && <span>Error</span>} 
            <Button onClick={handleSubmit} type="primary" size="large">
              Войти в аккаунт
            </Button>
          </Form.Item>
    
            <Link className="auth__register-link" to="/register">
            Зарегистрироваться
            </Link>
    
        </Form> : <div className="auth__success-block">
        <div>
        <Icon type="info-circle" style={{ size: '50px' }} theme="twoTone"  />
        </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
        </div>}
        </Block>
    </div>
        ); 
}
export default LoginForm;