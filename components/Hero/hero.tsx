import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Icon } from '@comps/index';
import { Button } from '@comps/Button';
import { motion } from 'framer-motion';

export type HeroProps = HTMLAttributes<HTMLElement>;

export const StyledHero = styled('section')<HeroProps>`
  margin: 4rem 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  & > .hero-left {
    width: 100%;
    margin-right: 1rem;
    & > h1 {
      font-size: 2rem;
      font-weight: 700;
      color: #f2f2f2;
      line-height: 1.2;

      @media (min-width: 1440px) {
        font-size: 3rem;
      }
    }

    & > p {
      font-size: 1rem;
      margin-top: 1rem;
      color: #dadada;
      line-height: 1.6;
      width: 85%;
    }

    & .icon {
      display: flex;
      align-items: center;

      & > svg {
        width: 1.3rem;
        height: 1.3rem;
        margin-top: 1rem;
      }
    }

    & button {
      display: flex;
      align-items: center;
      color: #f2f2f2;
      padding: 0.7rem 1.5rem;
      margin-top: 1rem;
      & > svg {
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
      }
    }

    @media (min-width: 1024px) {
      width: 50%;
      align-items: flex-start;
    }

    @media (min-width: 1440px) {
      width: 55%;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledHeroBox = styled('div')`
  width: 100%;
  display: flex;
  margin-bottom: 4rem;

  & > .box {
    background: radial-gradient(
      100% 220.37% at 100% 38.03%,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    backdrop-filter: blur(40px);
    border-radius: 1rem;
    padding: 1rem;
    margin: 0 1rem;
    width: 100%;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h1 {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      color: #f2f2f2;
    }

    & hr {
      border: 1px solid #f2f2f2;
      opacity: 0.4;
      margin: 1rem 0;
      align-self: stretch;
    }

    & > .info {
      display: flex;
      justify-content: space-between;
      align-self: stretch;

      & > .info-title {
        & h1 {
          font-size: 0.7rem;
          font-weight: 500;
          color: #f2f2f2;
        }

        & p {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 0.4rem;
          color: #f2f2f2;
        }
      }

      & > .query {
        display: flex;
        align-items: center;

        & svg {
          width: 1.7rem;
          height: 1.7rem;
          margin-right: 0.5rem;
        }

        & select {
          cursor: pointer;
          background-color: transparent;
          color: #f2f2f2;
          font-weight: 500;
          font-size: 1.2rem;
          &:focus {
            outline: none;
          }
        }
      }
    }

    & > .from-to-circle {
      padding: 1rem;
      border-radius: 100%;
      background-color: #c4c4c4;
      margin: 2rem 0;
      display: inline-block;

      & > svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    & button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      border-radius: 0.7rem;
      margin-top: 2rem;

      & > span {
        font-size: 1.3rem;
        color: #f2f2f2;
      }

      & svg {
        width: 2rem;
        height: 2rem;
        color: #f2f2f2;
      }
    }
  }

  & > .user-image {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    width: 45%;
  }
`;

export const Hero = forwardRef<HTMLElement, HeroProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledHero ref={ref} {...props}>
        <div className="hero-left">
          <h1>Make smarter decisions for your better finance</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            augue at pulvinar quisque cum iaculis pharetra, elementum vel.
          </p>
          <div className="icon">
            <Icon icon="star" fill="#FF4C0C" />
            <Icon icon="star" fill="#FF4C0C" />
            <Icon icon="star" fill="#FF4C0C" />
            <Icon icon="star" fill="#FF4C0C" />
            <Icon icon="star" stroke="#FF4C0C" fill="none" />
          </div>
          <Button variant="secondary">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Watch is it work!</span>
          </Button>
        </div>
        <StyledHeroBox>
          <div className="user-image">
            <motion.img
              src="/images/image-2.png"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: 'easeIn' }}
            />
            <motion.img
              src="/images/image-5.png"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: 'easeIn' }}
            />
          </div>
          <div className="box">
            <h1>Checkout Our Rates</h1>
            <hr />
            <div className="info">
              <div className="info-title">
                <h1>WHEN YOU SEND</h1>
                <p>230</p>
              </div>
              <div className="query">
                <Icon icon="america" />
                <select name="" id="">
                  <option value="">USD</option>
                </select>
              </div>
            </div>
            <div className="from-to-circle">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
            <div className="info">
              <div className="info-title">
                <h1>THEY WILL RECEIVE</h1>
                <p>230.00</p>
              </div>
              <div className="query">
                <Icon icon="europa" />
                <select name="" id="">
                  <option value="">EUR</option>
                </select>
              </div>
            </div>
            <Button variant="secondary" size="lg">
              <span>Transfer Now</span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
          </div>
          <div className="user-image">
            <motion.img
              src="/images/image-3.png"
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: 'easeIn' }}
            />
            <motion.img
              src="/images/image-4.png"
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: 'easeIn' }}
            />
            <motion.img
              src="/images/image-1.png"
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: 'easeIn' }}
            />
          </div>
        </StyledHeroBox>
      </StyledHero>
    );
  }
);
