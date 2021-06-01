export default async function getMenuData() {
  return [
    {
      key: 'catalog',
      icon: 'fe fe-shopping-cart',
      children: [
        {
          title: 'Device Catalog',
          key: 'ProductCatalog',
          url: '/products-catalog',
        },
        {
          title: 'Device Details',
          key: 'ProductDetails',
          url: '/product-details',
        },
      ],
    },
  ]
}
