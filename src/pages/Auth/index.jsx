import React, { Children } from 'react'
import { Form, Input, Icon, Checkbox } from 'antd';
import { Block , Button} from '../../components'
import "./Auth.scss";

 
class Auth extends React.Component{
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
   
      const { getFieldDecorator } = this.props.form ; 
      return (
        <section className="auth">
        <div className="auth__top">
        <div className="auth__content">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
          </div>
                <Block>
                <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item validateStatus="success" hasFeedback>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item > 
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
                  </Block>
              </div>
            </section>
          );
      };
  }




const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Auth);

export default WrappedNormalLoginForm;