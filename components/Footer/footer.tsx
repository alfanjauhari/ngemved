import Link from 'next/link';
import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

export type FooterProps = HTMLAttributes<HTMLElement>;

export const StyledFooter = styled.footer<FooterProps>`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2a0948;

  & > .info {
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  & > .menu {
    display: flex;
    justify-content: space-between;
    margin: 0 -1rem;

    @media (min-width: 768px) {
      margin: 0 -2rem;
    }

    & div {
      margin: 0 1rem;

      @media (min-width: 768px) {
        margin: 0 2rem;
      }

      & > p {
        font-size: 1rem;
        font-weight: 500;
        color: #ffffff;
      }

      & > ul > li {
        margin-top: 0.4rem;

        & > a {
          color: #f2f2f2;
          font-size: 0.7rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 4rem;
    flex-direction: row;
    margin-top: 0;
  }
`;

export const StyledFooterBrand = styled('div')<FooterProps>`
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

export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ ...props }, ref) => {
    return (
      <StyledFooter ref={ref} {...props}>
        <div className="info">
          <StyledFooterBrand>
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
          </StyledFooterBrand>
        </div>
        <div className="menu">
          <div>
            <p>Products</p>
            <ul>
              <li>
                <Link href="/features">Features</Link>
              </li>
              <li>
                <Link href="/personal-license">Personal License</Link>
              </li>
              <li>
                <Link href="/business-license">Business License</Link>
              </li>
              <li>
                <Link href="/pricing-options">Pricing Options</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>Company</p>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>Support</p>
            <ul>
              <li>
                <Link href="/support-center">Support Center</Link>
              </li>
              <li>
                <Link href="/help-desk">Help Desk</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </StyledFooter>
    );
  }
);
