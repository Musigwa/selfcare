import { ConnectedRouter } from 'connected-react-router'
import Layout from 'layouts'
import React, { lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const routes = [
  {
    path: '/products-catalog',
    Component: lazy(() => import('pages/app/catalog')),
    exact: true,
  },
  {
    path: '/product-details',
    Component: lazy(() => import('pages/app/details')),
    exact: true,
  },
  // AUTH PAGES
  {
    path: '/auth/login',
    Component: lazy(() => import('pages/auth/login')),
    exact: true,
  },
  {
    path: '/auth/register',
    Component: lazy(() => import('pages/auth/register')),
    exact: true,
  },
  {
    path: '/auth/404',
    Component: lazy(() => import('pages/auth/404')),
    exact: true,
  },
]

const mapStateToProps = ({ settings }) => ({
  routerAnimation: settings.routerAnimation,
})

const Router = ({ history, routerAnimation }) => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Route
          render={state => {
            const { location } = state
            return (
              <SwitchTransition>
                <CSSTransition
                  key={location.pathname}
                  appear
                  classNames={routerAnimation}
                  timeout={routerAnimation === 'none' ? 0 : 300}
                >
                  <Switch location={location}>
                    <Route exact path='/' render={() => <Redirect to='/products-catalog' />} />
                    {routes.map(({ path, Component, exact }) => (
                      <Route
                        path={path}
                        key={path}
                        exact={exact}
                        render={() => {
                          return (
                            <div className={routerAnimation}>
                              <Suspense fallback={null}>
                                <Component />
                              </Suspense>
                            </div>
                          )
                        }}
                      />
                    ))}
                    <Redirect to='/auth/404' />
                  </Switch>
                </CSSTransition>
              </SwitchTransition>
            )
          }}
        />
      </Layout>
    </ConnectedRouter>
  )
}

export default connect(mapStateToProps)(Router)
