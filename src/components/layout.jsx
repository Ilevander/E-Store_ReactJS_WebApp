import React from "react";
import styled from 'styled-components';

import { Outlet, Link } from "react-router-dom";

import { HomeIcon, CartIcon } from "./icons";
import Search from "./search";

const Layout = ({ categories }) => {
    const renderCategories = () => {
        return categories.data.map((c) => (
            <li key={c.id}>
                <Link to={`/categories/${c.id}`}>{c.title}</Link>
            </li>
        ));
    };

    return (
        <>
            <header>
                <div id="headerHomeIcon">
                    <Link to="/"><HomeIcon width={40} /></Link>
                </div>
                <Search />

                <div id="headerTitle">Ilyass E-Store</div>
                <div id="headerCartIcon">
                    <Link to="/basket"><CartIcon width={40} /></Link>
                </div>
            </header>
            <section>
                <nav>
                    {categories.errorMessage && (
                        <div>Error: {categories.errorMessage}</div>
                    )}

                    <ul>{categories.data && renderCategories()}</ul>
                </nav>
                <main>
                    <Outlet />
                </main>
            </section>

            <StyledFooter>
                    <FooterLinks>
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/basket">Basket</Link>
                    </FooterLinks>
                    <FooterInfo>
                        <p>&copy; 2024 My Store. All rights reserved.</p>
                        <p>Morocco Rabat</p>
                        <p>Email: ilyass.tech97@gmail.com | Phone: +212 638-662909</p>
                    </FooterInfo>
             </StyledFooter>
        </>
    );
};

export default Layout;

const StyledFooter = styled.footer`
  background-color:  #777;
  padding: 20px;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin-bottom: 20px;

  a {
    margin: 0 15px;
    color: #333;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #3498db;
    }
  }
`;

const FooterInfo = styled.div`
  p {
    margin: 5px 0;
    color: #555;
  }
`;