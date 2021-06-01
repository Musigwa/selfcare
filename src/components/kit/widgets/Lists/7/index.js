import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import style from './style.module.scss'

const { SubMenu } = Menu

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

// eslint-disable-next-line consistent-return
const List7 = ({ tabKey }) => {
  const [openKeys, setOpenKeys] = React.useState(['sub1'])

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  if (tabKey === 1)
    return (
      <div className='row'>
        <div className='card-body col-md-6'>
          <ul className={`${style.list} list-unstyled`}>
            <li className={style.item}>
              <a className={style.itemLink}>
                <div className={style.itemMeta}>
                  <div className={`${style.donut} ${style.gray2} ${style.md}`} />
                </div>
                <div className='mr-3'>
                  <div>Network</div>
                  <div className='text-muted'>GSM 850/900/1800/1900 | HSDPA 850/900/1900/2100.</div>
                </div>
                <div className={style.itemAction}>2G bands | 3G bands</div>
              </a>
            </li>
            <li className={style.item}>
              <a className={style.itemLink}>
                <div className={style.itemMeta}>
                  <div className={`${style.donut} ${style.success} ${style.md}`} />
                </div>
                <div className='mr-3'>
                  <div>RAM</div>
                  <div className='text-muted'>Dynamic Memory</div>
                </div>
                <div className={style.itemAction}>2 GB</div>
              </a>
            </li>
            <li className={style.item}>
              <a className={style.itemLink}>
                <div className={style.itemMeta}>
                  <div className={`${style.donut} ${style.danger} ${style.md}`} />
                </div>
                <div className='mr-3'>
                  <div>ROM</div>
                  <div className='text-muted'>Non-volatile: eMMC 5.0</div>
                </div>
                <div className={style.itemAction}>64GB</div>
              </a>
            </li>
            <li className={style.item}>
              <a className={style.itemLink}>
                <div className={style.itemMeta}>
                  <div className={`${style.donut} ${style.gray2} ${style.md}`} />
                </div>
                <div className='mr-3'>
                  <div>SIM</div>
                  <div className='text-muted'>Unlocked to any global provider</div>
                </div>
                <div className={style.itemAction}>SIM Free</div>
              </a>
            </li>
            <li className={style.item}>
              <a className={style.itemLink}>
                <div className={style.itemMeta}>
                  <div className={`${style.donut} ${style.info} ${style.md}`} />
                </div>
                <div className='mr-3'>
                  <div>Screen Size</div>
                  <div className='text-muted'>Super AMOLED</div>
                </div>
                <div className={style.itemAction}>5.0&#8221;, @1080x1920 pixels, ~441ppi</div>
              </a>
            </li>
          </ul>
        </div>
        <div className='card-body col-md-6'>
          <ul className={`${style.list} list-unstyled`}>
            <li className={style.item}>
              <a className={style.itemLink}>
                <div className={style.itemMeta}>
                  <div className={`${style.donut} ${style.gray2} ${style.md}`} />
                </div>
                <div className='mr-3'>
                  <div>Rear Camera</div>
                  <div className='text-muted'>LED flash, HDR 1080p@30fps</div>
                </div>
                <div className={style.itemAction}>32 MP</div>
              </a>
            </li>
            <li className={style.item}>
              <a className={style.itemLink}>
                <div className={style.itemMeta}>
                  <div className={`${style.donut} ${style.success} ${style.md}`} />
                </div>
                <div className='mr-3'>
                  <div>Secondary Camera</div>
                  <div className='text-muted'>The front camera resolution.</div>
                </div>
                <div className={style.itemAction}>12 MP</div>
              </a>
            </li>
            <li className={style.item}>
              <a className={style.itemLink}>
                <div className={style.itemMeta}>
                  <div className={`${style.donut} ${style.danger} ${style.md}`} />
                </div>
                <div className='mr-3'>
                  <div>OS</div>
                  <div className='text-muted'>The operating system.</div>
                </div>
                <div className={style.itemAction}>Android 4.2.2 (Jelly Bean)</div>
              </a>
            </li>
            <li className={style.item}>
              <a className={style.itemLink}>
                <div className={style.itemMeta}>
                  <div className={`${style.donut} ${style.gray2} ${style.md}`} />
                </div>
                <div className='mr-3'>
                  <div>CPU</div>
                  <div className='text-muted'>Architecture</div>
                </div>
                <div className={style.itemAction}>Octa-core (4x1.6 GHz Cortex-A15)</div>
              </a>
            </li>
            <li className={style.item}>
              <a className={style.itemLink}>
                <div className={style.itemMeta}>
                  <div className={`${style.donut} ${style.info} ${style.md}`} />
                </div>
                <div className='mr-3'>
                  <div>Battery</div>
                  <div className='text-muted'>Li-Ion 2600 mAh, removable</div>
                </div>
                <div className={style.itemAction}>Up to 370 h (3G)</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  if (tabKey === 2)
    return (
      <Menu mode='inline' openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
        <SubMenu key='sub1' title='Navigation One'>
          <Menu.Item key='1'>Option 1</Menu.Item>
          <Menu.Item key='2'>Option 2</Menu.Item>
          <Menu.Item key='3'>Option 3</Menu.Item>
          <Menu.Item key='4'>Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Navigation Two'>
          <Menu.Item key='5'>Option 5</Menu.Item>
          <Menu.Item key='6'>Option 6</Menu.Item>
          <SubMenu key='sub3' title='Submenu'>
            <Menu.Item key='7'>Option 7</Menu.Item>
            <Menu.Item key='8'>Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key='sub4' icon={<SettingOutlined />} title='Navigation Three'>
          <Menu.Item key='9'>Option 9</Menu.Item>
          <Menu.Item key='10'>Option 10</Menu.Item>
          <Menu.Item key='11'>Option 11</Menu.Item>
          <Menu.Item key='12'>Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    )
}

export default List7
