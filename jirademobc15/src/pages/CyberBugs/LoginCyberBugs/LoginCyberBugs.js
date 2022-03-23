import React from 'react'
import { Button, Input } from 'antd'
import { LockOutlined, UserOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons'
import {withFormik} from 'formik'
import * as Yup from 'yup';
function LoginCyberBugs(props) {

  const  {
    
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit} className="container" style={{ height: window.innerHeight }}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight }}
      >
        <h3 className="text-center" style={{fontWeight:300, fontSize:35}}>{props.displayName}</h3>
        <div className="d-flex mt-3">
          <Input 
          onChange={handleChange}
            name="email"
            style={{ width: '100%', minWidth: 300 }}
            size="large"
            placeholder="email"
            prefix={<UserOutlined />}
          />
        </div>
        <div className='text-danger'>{errors.email}</div>
        <div className="d-flex mt-3">
          <Input
          onChange={handleChange}
            type="password"
            name="password"
            style={{ width: '100%', minWidth: 300 }}
            size="large"
            placeholder="password"
            prefix={<LockOutlined />}
          />
        </div>
        <div className='text-danger'>{errors.password}</div>

        <Button
          size="large"
          style={{
            width: '100%',
            backgroundColor: 'rgb(102,117,223',
            color: '#fff',
          }}
        >
          Login
        </Button>
        <div className="social mt-3 d-flex ">
          <Button
          htmlType='submit'
            style={{backgroundColor:'rgb(59,89,152)'}}
            shape="circle"
            
            size={"large"}
          >
            <span className='font-weight-bold' color='#fff' >F</span>
          </Button>
          <Button type='primary ml-3' shape='circle' icon={<TwitterOutlined/>}>  </Button>
        </div>
      </div>
    </form>
  )
}
const LoginCyberBugsWithFormik = withFormik({
  mapPropsToValues: () => ({ 
    name: '',
    password:''
}),

  // Custom sync validation
 validationSchema: Yup.object().shape({
    email:Yup.string().required('Email is required!').email('email is invalid!'),
    password:Yup.string().min(6, 'password must have min 6 characters').max(32, 'password have max 32 characters')
 }), 
 

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'Login CyberBugs',
})(LoginCyberBugs);

export default LoginCyberBugsWithFormik;