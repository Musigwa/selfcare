import { Pagination } from 'antd'
import General16 from 'components/kit/widgets/General/16'
import React from 'react'
import { Helmet } from 'react-helmet'
import productsData from './data.json'

const ProductCatalog = () => {
  return (
    <div>
      <Helmet title='Device Catalog' />
      <div className='mb-4'>
        <Pagination defaultCurrent={6} total={500} showSizeChanger />
      </div>
      <div className='row'>
        {productsData.map((product, index) => {
          const { isNew, isFavorite, image, name, price, oldPrice } = product
          return (
            <div className='col-xl-4 col-lg-6' key={Number(index)}>
              <General16
                isNew={isNew}
                isFavorite={isFavorite}
                image={image}
                name={name}
                price={price}
                oldPrice={oldPrice}
              />
            </div>
          )
        })}
      </div>
      <Pagination defaultCurrent={6} total={500} showSizeChanger />
    </div>
  )
}

export default ProductCatalog
