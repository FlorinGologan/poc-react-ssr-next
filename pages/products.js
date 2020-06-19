import { Component } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Layout from '../components/Layout';

export default class Products extends Component {
  static async getInitialProps () {
    const res = await axios.get('http://localhost:3000/api/products.json');

    return {products: res.data};
  }

  renderProducts () {
    const {products = []} = this.props;

    return products.map(product => (
        <li key={ product.id }>{ product.name }</li>
      )
    );
  }

  render () {
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