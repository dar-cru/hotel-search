import { FC } from 'react';
import logo from '../../images/qantas-logo.png';

const Header: FC = () => {
  return (
    <header style={{ padding: '20px 0' }}>
      <img src={logo} alt="Qantas logo" width="200px" />
    </header>
  );
};

export default Header;
