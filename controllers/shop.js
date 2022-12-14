const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

exports.getIndex = ( req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
}

exports.getOrder = (req, res, next) => {
  res.render('shop/order', {
    path: '/order',
    pageTitle: 'Your Order'
  });
}

exports.getCheckout = (req, res, next) => {
  res.redner('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  })
}