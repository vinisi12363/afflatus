import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import {
 
  FaMoneyBill,
  FaSearch,
  FaRegCalendarAlt,
  FaUserPlus
} from 'react-icons/fa';

import NavigationButton from './NavigationButton';

export default function NavigationBar() {
  const location = useLocation();

  function isActive(buttonPath) {
    return location.pathname === buttonPath;
  }

  return (
    <Container>
       
        <NavigationButton active={isActive('/dashboard/client')}>
          <FaRegCalendarAlt />
          <span>Agendamentos</span>
        </NavigationButton>
      

      <Link to="/dashboard/register">
        <NavigationButton active={isActive('/dashboard/register')}>
          <FaUserPlus />
          <span>Inscrição</span>
        </NavigationButton>
      </Link>
      <Link to="/dashboard/search">
        <NavigationButton active={isActive('/dashboard/search')}>
          <FaSearch />
          <span>Buscar</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/client">
        <NavigationButton active={isActive('/dashboard/client')}>
          <FaMoneyBill />
          <span>Pagamento</span>
        </NavigationButton>
      </Link>

     

      
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  box-shadow: 2px 0 10px 0 rgba(0,0,0,0.1);
  width: 100px;
  flex-shrink: 0;
  justify-content: flex-start;

  > a {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
  }
`;
