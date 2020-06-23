import { withRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

class Product extends React.Component {
  static getInitialProps ({query}) {
    return {
      product: {
        sku: query.sku
      }
    };
  }

  render () {
    const {product} = this.props;
    return (<Layout>
        <Head>
          <title>SSR - Product Page</title>
        </Head>
        <h1>Product Page { product.sku }</h1>

        <Link href="/products">
          <a>Back to Products list</a>
        </Link>
      </Layout>
    );
  }
}

export default withRouter(Product);