import { Button, Form, Input } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

const Login = () => {
  const dispatch = useDispatch()
  const { user, settings } = useSelector(state => state)

  const onFinish = values => {
    dispatch({ type: 'user/LOGIN', payload: values })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <Helmet title='Login' />
      <div className='text-center mb-5'>
        <h1 className='mb-5 px-3'>
          <strong>Welcome to {settings.logo}</strong>
        </h1>
        <p>
          Get your dream phone even when you can&apos;t afford it at the moment. Sign into our&nbsp;
          <strong>Device financing program</strong>
          to get your Device and pay later.
        </p>
      </div>
      <div className={`card ${style.container}`}>
        <div className='text-dark font-size-24 mb-3'>
          <strong>Sign in to your account</strong>
        </div>
        <Form
          layout='vertical'
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className='mb-4'
          initialValues={{ email: 'demo@sellpixels.com', password: 'demo123' }}
        >
          <Form.Item
            name='email'
            rules={[{ required: true, message: 'Please input your e-mail address' }]}
          >
            <Input size='large' placeholder='Email' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input size='large' type='password' placeholder='Password' />
          </Form.Item>
          <Button
            type='primary'
            size='large'
            className='text-center w-100'
            htmlType='submit'
            loading={user.loading}
          >
            <strong>Sign in</strong>
          </Button>
        </Form>
      </div>
      <div className='text-center pt-2 mb-auto'>
        <span className='mr-2'>Don&#39;t have an account?</span>
        <Link to='/auth/register' className='kit__utils__link font-size-16'>
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default Login
