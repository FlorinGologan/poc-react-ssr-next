import { withRouter } from 'next/router';
import Head from 'next/head';
import Error from './_error';
import Layout from '../components/Layout';
import Link from 'next/link';
import axios from 'axios';

class Product extends React.Component {
  static async getInitialProps ({query}) {

    let products = [];
    try {
      const res = await axios.get('http://localhost:3001/api/products.json');
      products = res.data;
    } catch (e) {
      console.log(e.message);
    }

    const product = products.find(el => el.id == query.sku);

    return {
      product
    };
  }

  render () {
    const {product} = this.props;

    if (!product) {
      return <Error statusCode={ 404 }/>;
    }

    return (<Layout>
        <Head>
          <title>SSR - Product Page</title>
        </Head>
        <h1>Product Page</h1>
        <p>Name: { product.name }</p>
        <p>Sku: { product.id }</p>

        <Link href="/products">
          <a>Back to Products list</a>
        </Link>
      </Layout>
    );
  }
}

export default withRouter(Product);