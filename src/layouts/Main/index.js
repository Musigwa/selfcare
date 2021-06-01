import { Layout } from 'antd'
import classNames from 'classnames'
import Breadcrumbs from 'components/cleanui/layout/Breadcrumbs'
import TopBar from 'components/cleanui/layout/TopBar'
import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

const MainLayout = ({ children }) => {
  const {
    isContentMaxWidth,
    isAppMaxWidth,
    isGrayBackground,
    isSquaredBorders,
    isCardShadow,
    isBorderless,
    isTopbarFixed,
    isGrayTopbar,
  } = useSelector(({ settings }) => settings)
  return (
    <div className={classNames({ cui__layout__grayBackground: isGrayBackground })}>
      <Layout
        className={classNames({
          cui__layout__contentMaxWidth: isContentMaxWidth,
          cui__layout__appMaxWidth: isAppMaxWidth,
          cui__layout__grayBackground: isGrayBackground,
          cui__layout__squaredBorders: isSquaredBorders,
          cui__layout__cardsShadow: isCardShadow,
          cui__layout__borderless: isBorderless,
        })}
      >
        <Layout>
          <Layout.Header
            className={classNames('cui__layout__header', {
              cui__layout__fixedHeader: isTopbarFixed,
              cui__layout__headerGray: isGrayTopbar,
            })}
          >
            <TopBar />
          </Layout.Header>
          <Breadcrumbs />
          <Layout.Content style={{ height: '100%', position: 'relative' }}>
            <div className='cui__utils__content'>{children}</div>
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default withRouter(MainLayout)
