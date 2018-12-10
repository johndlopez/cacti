import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/featured">
      <a>featured</a>
    </Link>
    <Link href="/account">
      <a>account</a>
    </Link>
    <Link href="/cart">
      <a>cart</a>
    </Link>
  </NavStyles>
);

export default Nav;
