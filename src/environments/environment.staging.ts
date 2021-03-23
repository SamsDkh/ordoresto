export const environment = {
    production: false,
  };

export const servicesUrl = {
    productService : {
        baseUrl : 'https://productstaging.eu-west-3.elasticbeanstalk.com/Product',
        getProductsById : 'GetById/',
        getProductsByEstablishmentId : 'GetByEstablishmentId/',
        addProduct: 'Add/',
        removeProductsById : 'Delete/',
    }
};
  