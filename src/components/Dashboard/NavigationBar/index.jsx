import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import {
  
  FaBaby,
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
        <Link to="/dashboard/client">
          <NavigationButton active={isActive('/dashboard/client')}>
            <FaRegCalendarAlt />
            <p>Eventos</p>
          </NavigationButton>
        </Link>

      <Link to="/dashboard/register">
        <NavigationButton active={isActive('/dashboard/register')}>
          <FaUserPlus />
          <p>cadastrar mamãe/papai</p>
        </NavigationButton>
      </Link>
      
      <Link to="/dashboard/child">
        <NavigationButton active={isActive('/dashboard/child')}>
          <FaBaby />
          <p>cadastrar bebê</p>
        </NavigationButton>
      </Link>
      <Link to="/dashboard/search">
        <NavigationButton active={isActive('/dashboard/search')}>
          <FaSearch />
          <p>Buscar</p>
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
  width: 15%;
  flex-shrink: 0;
  justify-content: flex-start;
  p {
    font-family: 'Roboto', sans-serif;  
    font-weight:bold;
    font-style:italic;
  }
  > a {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
  }
`;
