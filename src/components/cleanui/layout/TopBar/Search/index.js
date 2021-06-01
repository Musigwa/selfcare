import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { injectIntl } from 'react-intl'
import style from './style.module.scss'

const searchInput = null

const Search = ({ intl: { formatMessage } }) => {
  const [showSearch, setShowSearch] = useState(false)
  const [, setSearchText] = useState('')

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  const onChange = event => {
    console.log('The event==>', event)
  }

  const hideLiveSearch = () => {
    searchInput.blur()
    setShowSearch('')
    setSearchText('')
  }

  const handleKeyDown = event => {
    if (showSearch) {
      const key = event.keyCode.toString()
      if (key === '27') {
        hideLiveSearch()
      }
    }
  }

  return (
    <div className='d-inline-block mr-auto'>
      <Input
        className={style.extInput}
        placeholder={formatMessage({ id: 'topBar.typeToSearch' })}
        prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        style={{ width: 200 }}
        onChange={onChange}
      />
    </div>
  )
}

export default injectIntl(Search)
