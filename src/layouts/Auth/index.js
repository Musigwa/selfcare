import { Layout } from 'antd'
import classNames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import style from './style.module.scss'

const AuthLayout = ({ children }) => {
  const {
    router: { location },
    settings: { logo, isGrayTopbar, isCardShadow, isSquaredBorders, isBorderless, authPagesColor },
  } = useSelector(({ router, settings }) => ({ router, settings }))

  return (
    <Layout>
      <Layout.Content>
        <div
          className={classNames(`${style.container}`, {
            cui__layout__squaredBorders: isSquaredBorders,
            cui__layout__cardsShadow: isCardShadow,
            cui__layout__borderless: isBorderless,
            [style.white]: authPagesColor === 'white',
            [style.gray]: authPagesColor === 'gray',
          })}
          style={{
            backgroundImage:
              authPagesColor === 'image' ? 'url(resources/content/photos/7.jpg)' : '',
          }}
        >
          <div
            className={classNames(`${style.topbar}`, {
              [style.topbarGray]: isGrayTopbar,
            })}
          >
            <div className={style.logoContainer}>
              <div className={style.logo}>
                <img src='resources/images/logo.svg' className='mr-2' alt='Selfcare' />
                <div className={style.name}>{logo}</div>
              </div>
            </div>
            {location.pathname === '/auth/login' ? (
              <div className='d-none d-sm-block'>
                <span className='mr-2'>Don&#39;t have an account?</span>
                <Link to='/auth/register' className='font-size-16 kit__utils__link'>
                  Sign up
                </Link>
              </div>
            ) : (
              <div className='d-none d-sm-block'>
                <span className='mr-2'>Already have an account?</span>
                <Link to='/auth/login' className='font-size-16 kit__utils__link'>
                  Sign in
                </Link>
              </div>
            )}
          </div>
          <div className={style.containerInner}>{children}</div>
          <div className='mt-auto pb-5 pt-5'>
            <ul
              className={`${style.footerNav} list-unstyled d-flex mb-0 flex-wrap justify-content-center`}
            >
              <li>
                Copyright © {new Date().getFullYear()}&#8194;
                <a
                  href='https://www.mediatec.org/privacy'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <strong>MTN Rwanda</strong>
                </a>
              </li>
              <li>
                <a href='#' onClick={e => e.preventDefault()}>
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href='https://www.mediatec.org/privacy'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' onClick={e => e.preventDefault()}>
                  Compliance
                </a>
              </li>
              <li>
                <a href='#' onClick={e => e.preventDefault()}>
                  Support
                </a>
              </li>
              <li>
                <a href='#' onClick={e => e.preventDefault()}>
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default withRouter(AuthLayout)
