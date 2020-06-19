import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({children}) => (
  <div>
    <Head>
      <title>SSR - Layout</title>
    </Head>
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/products"><a className="nav-link">Products List</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/test"><a className="nav-link">Test Page</a></Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className="container-fluid">
      { children }
    </div>
  </div>
)