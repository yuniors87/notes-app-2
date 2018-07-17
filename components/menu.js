import { colors } from '../components/theme';
import Link from 'next/link';

export default props => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/notes">
      <a>Notes</a>
    </Link>
    <style jsx>{`
      nav {
        background: ${colors.headerBackground};
        width: 100%;
        height: 3rem;
        display: flex;
      }
      a {
        color: #fff;
        text-decoration: none;
        margin: 1rem;
      }
    `}</style>
  </nav>
);
