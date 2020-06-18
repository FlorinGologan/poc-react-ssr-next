import Link from 'next/link';

export default ({children}) => (
  <div>
    <header>
      <Link href="/"><a>Home</a></Link> |
      <Link href="/test"><a>Test</a></Link>
    </header>
    { children }
  </div>
)