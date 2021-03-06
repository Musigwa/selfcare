import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import Search from './Search'
import style from './style.module.scss'
import UserMenu from './UserMenu'

const TopBar = () => {
  return (
    <div className={style.topbar}>
      <div className='mr-auto'>
        <Search />
      </div>
      <div className='mr-4 d-none d-sm-block'>
        <LanguageSwitcher />
      </div>
      <div className=''>
        <UserMenu />
      </div>
    </div>
  )
}

export default TopBar
