import React from 'react'
import { Form, Input, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Button , Block} from 'components'
const success  = false;
const RegisterForm = props => {
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
          <h2>Регистрация</h2>
          <p>Для входа в чат, вам необходимо зарегистрироваться</p>
          </div>
          <Block>
         {!success ?  <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item validateStatus={
            !touched.email ? '' : errors.email ? 'error' : 'success' 
            }
            help = {!touched.email ? '' : errors.email}
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
          <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
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
          <Form.Item>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Повторите пароль"
              />
        
          </Form.Item>
          <Form.Item >
          {isSubmittig && !isValid && <span>Error</span>} 
            <Button onClick={handleSubmit} type="primary" size="large">
              Зарегистрироваться
            </Button>
          </Form.Item>
    
            <Link className="auth__register-link" to="/login">
              Войти в аккаунт
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
      };
export default RegisterForm;