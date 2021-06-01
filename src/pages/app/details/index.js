import { Button, Select, Tabs } from 'antd'
import General16 from 'components/kit/widgets/General/16'
import List7 from 'components/kit/widgets/Lists/7'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import data from './data.json'
import style from './style.module.scss'

const { Option } = Select
const { TabPane } = Tabs

const ProductDetails = () => {
  const [loading, setLoading] = useState(false)
  const [activeImgIndex, setActiveImgIndex] = useState(0)
  const [isFavourite, setIsFavourite] = useState(false)
  const [tabKey, setTabKey] = useState(1)
  const setFavourite = e => {
    e.preventDefault()
    setIsFavourite(!isFavourite)
  }

  const setActiveImg = (e, index) => {
    e.preventDefault()
    setActiveImgIndex(index)
  }

  return (
    <div>
      <Helmet title='Device Details' />
      <div className='cui__utils__heading'>
        <strong>Device Details</strong>
      </div>
      <div className='card overflow-hidden'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-lg-4'>
              <a
                className={`${style.favourite} ${isFavourite ? 'text-dark' : 'text-gray-3'}`}
                href='#'
                onClick={setFavourite}
              >
                <i className='fe fe-heart font-size-21' />
              </a>
              <div className={`${style.image} height-250 mb-3`}>
                <img className='img-fluid' src={data.descr.images[activeImgIndex]} alt='Product' />
              </div>
              <div className='d-flex flex-wrap mb-3'>
                {data.descr.images.map((image, index) => (
                  <a
                    href='#'
                    className={`${index === activeImgIndex ? 'border-primary' : ''} ${
                      style.thumb
                    } width-100 height-100 border m-2`}
                    onClick={e => {
                      setActiveImg(e, index)
                    }}
                    key={image}
                  >
                    <img className='img-fluid' src={image} alt='Product' />
                  </a>
                ))}
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='font-size-24 font-weight-bold text-dark mb-2'>
                $199.28 <del className='align-text-top font-size-14'>$299.28</del>
              </div>
              <div className='pb-3 mb-4 border-bottom'>
                <a href='/products-catalog' className='text-blue font-size-18'>
                  TP-Link AC1750 Smart WiFi Router - Dual
                  <br />
                  Band Gigabit Wireless Internet Routers for
                  <br />
                  Home
                </a>
              </div>
              <div className='mb-4 width-300'>
                <Select defaultValue='Red' style={{ width: 300 }}>
                  <Option value='red'>Red</Option>
                  <Option value='black'>Black</Option>
                  <Option value='cyan'>Cyan</Option>
                  <Option value='blue'>Blue</Option>
                </Select>
              </div>

              <Tabs
                defaultActiveKey='1'
                onChange={activeKey => setTabKey(Number(activeKey))}
                className='kit-tabs-bordered'
              >
                <TabPane tab='Specifications' key='1' />
                <TabPane tab='Installment plans' key='2' />
              </Tabs>
              <List7 tabKey={tabKey} />
              <Button onClick={() => setLoading(true)} loading={loading} type='primary'>
                {(loading && `Requesting...`) || 'Apply for this phone'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='cui__utils__heading'>Related Products</div>
      <div className='row'>
        {data.products.map(product => {
          const { isNew, isFav, image, name, price, oldPrice } = product
          return (
            <div className='col-lg-4' key={Math.random()}>
              <General16
                isNew={isNew}
                isFavourite={isFav}
                image={image}
                name={name}
                price={price}
                oldPrice={oldPrice}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductDetails
