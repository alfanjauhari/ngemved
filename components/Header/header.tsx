import { Button } from '@comps/Button';
import { forwardRef, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

export type HeaderProps = HTMLAttributes<HTMLElement>;

export const StyledHeader = styled.header`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const StyledHeaderBrand = styled('div')<HeaderProps>`
  display: flex;
  align-items: center;
  width: auto;
  & .svg-box {
    padding: 0.5rem;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 0.25rem;
    & svg {
      width: 2rem;
      height: 2rem;
    }
    margin-right: 1rem;
  }
  & .title-tagline {
    & h1 {
      font-size: 1.15rem;
      font-weight: 600;
      color: #f2f2f2;
    }
    & p {
      font-size: 0.75rem;
      color: #e1e1e1;
      margin-top: 0.2rem;
    }
  }
`;

export type MenuState = {
  isMenuOpen?: boolean;
};

export const StyledHeaderList = styled(motion.ul)<HeaderProps>`
  align-items: center;
  margin: 0;
  display: none;

  & li {
    color: #f2f2f2;
    padding: 0 0.85rem;
    font-size: 0.85rem;
  }

  & button {
    margin-left: 0.85rem;
    font-size: 0.85rem;
  }

  @media (min-width: 768px) {
    margin: 0 -0.85rem;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const StyledHeaderMobileList = styled(motion.ul)<HeaderProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: white;
  z-index: 30;
  & li,
  button {
    color: ${({ theme }) => theme.colors.primary} !important;
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }
  & button {
    margin-left: 0 !important;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledHeaderMenuToggler = styled(Button)<MenuState>`
  color: ${({ theme, isMenuOpen }) =>
    isMenuOpen ? theme.colors.primary : '#f2f2f2'};
  z-index: 50;
  position: ${({ isMenuOpen }) => (isMenuOpen ? 'fixed' : 'static')};
  right: 2rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ children, ...props }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function showMenu() {
      setIsMenuOpen((prevState) => !prevState);
    }

    return (
      <StyledHeader ref={ref} {...props}>
        <StyledHeaderContainer>
          <StyledHeaderBrand>
            <div className="svg-box">
              <svg
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.903 10.31h-30.5a1.906 1.906 0 00-1.907 1.905V35.09c0 1.053.854 1.907 1.907 1.907h30.5a1.906 1.906 0 001.906-1.907V12.215a1.906 1.906 0 00-1.906-1.906z"
                  stroke="#F2F2F2"
                  strokeWidth={3.813}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.465 17.934H22.7a2.859 2.859 0 00-2.86 2.86v0a2.86 2.86 0 002.86 2.859h1.906a2.86 2.86 0 012.86 2.86v0a2.859 2.859 0 01-2.86 2.859H19.84M23.653 16.028v1.906M23.653 29.372v1.906"
                  stroke="#F2F2F2"
                  strokeWidth={3.813}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="title-tagline">
              <h1>Ngemved ID</h1>
              <p>Save Money With ngemved.id</p>
            </div>
          </StyledHeaderBrand>
          <StyledHeaderMenuToggler
            variant="outline"
            onClick={showMenu}
            isMenuOpen={isMenuOpen}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </StyledHeaderMenuToggler>
          <StyledHeaderList>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/teams">Our Team</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <Button variant="outline">Sign UP</Button>
          </StyledHeaderList>
          <StyledHeaderMobileList
            variants={{
              enter: {
                x: '0%',
                transition: {
                  ease: 'easeInOut',
                  duration: 0.5
                }
              },
              close: {
                x: '100%',
                transition: {
                  ease: 'easeInOut',
                  duration: 0.5
                }
              }
            }}
            animate={isMenuOpen ? 'enter' : 'close'}
            initial="close"
            exit="close"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/teams">Our Team</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <Button variant="outline">Sign Up</Button>
          </StyledHeaderMobileList>
        </StyledHeaderContainer>
        {children}
      </StyledHeader>
    );
  }
);
