import Layout from '../components/Layout';

export default ({statusCode}) => (
  <Layout>
    { statusCode
      ? `Could not load your user data: Status Code ${ statusCode }`
      : `Couldn't get that page, sorry!` }
  </Layout>
);
