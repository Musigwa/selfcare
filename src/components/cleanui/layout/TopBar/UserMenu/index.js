import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge, Dropdown, Menu } from 'antd'
import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import styles from './style.module.scss'

const mapStateToProps = ({ user }) => ({ user })

const ProfileMenu = ({ dispatch, user }) => {
  const [count, setCount] = useState(7)

  const logout = e => {
    e.preventDefault()
    dispatch({
      type: 'user/LOGOUT',
    })
  }

  const addCount = () => {
    setCount(count + 1)
  }

  const menu = (
    <Menu selectable={false}>
      <Menu.Item>
        <strong>
          <FormattedMessage id='topBar.profileMenu.hello' />, {user.name || 'Anonymous'}
        </strong>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a href='#' onClick={logout}>
          <i className='fe fe-log-out mr-2' />
          <FormattedMessage id='topBar.profileMenu.logout' />
        </a>
      </Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={['click']} onVisibleChange={addCount}>
      <div className={styles.dropdown}>
        <Badge count={count}>
          <Avatar className={styles.avatar} shape='square' size='large' icon={<UserOutlined />} />
        </Badge>
      </div>
    </Dropdown>
  )
}

export default connect(mapStateToProps)(ProfileMenu)
