import { Component } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Layout from '../components/Layout';
import Error from 'next/error';
import Link from 'next/link';

export default class Products extends Component {
  static async getInitialProps () {
    let products;
    try {
      const res = await axios.get('http://localhost:3001/api/products.json');
      products = res.data;
    } catch (e) {
      console.log(e.message);
    }

    return {products};
  }

  renderProducts () {
    const {products = []} = this.props;

    return products.map(product => (
        <li key={ product.id }>
          <Link as={ `/product/${ product.id }` } href={ `/product?sku=${ product.id }` }>
          {/*<Link href={ `/product?sku=${ product.id }` }>*/}
            <a>{ product.name }</a>
          </Link>
        </li>
      )
    );
  }

  render () {
    const {products} = this.props;
    if (!products) {
      return (
        <Layout>
          <Error title="There was a problem fetching the products" statusCode="503"/>
        </Layout>
      );
    }
    return (
      <Layout>
        <Head>
          <title>SSR - Products Page</title>
        </Head>
        <h1>Products Page</h1>
        <ul>
          { this.renderProducts() }
        </ul>
      </Layout>
    );
  }
}