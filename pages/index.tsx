import styled from 'styled-components';
import { Button, Header, Hero, Icon, Footer } from '@comps/index';
import { motion } from 'framer-motion';

const StyledMain = styled.main`
  flex-grow: 1;
  margin-top: 6rem;
  padding: 0 2rem;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 0 4rem;
  }
`;

const StyledClient = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: -0.7rem;

  & svg {
    width: 5rem;
    height: 2rem;

    margin: 0.7rem;
  }

  @media (min-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 6rem;

  & > .left-container {
    position: relative;
    display: flex;

    & > img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 2rem;

      @media (min-width: 1024px) {
        width: 25rem;
        height: 30rem;
      }
    }

    & > div {
      position: absolute;
      margin: -10% 0 0 80%;
      background-color: #ffffff;
      padding: 1rem;
      box-shadow: rgb(17 17 26 / 10%) 0px 8px 24px,
        rgb(17 17 26 / 10%) 0px 16px 56px, rgb(17 17 26 / 10%) 0px 24px 80px;
      border-radius: 1rem;
      display: none;

      & > h1 {
        font-size: 1.7rem;
        font-weight: 700;

        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }

      & > p {
        color: #828282;
        font-size: 0.8rem;
      }

      @media (min-width: 768px) {
        display: block;
      }
    }
  }

  & > .right-container {
    width: 100%;
    margin-left: 0;
    margin-top: 4rem;

    & > h1 {
      font-size: 1.7rem;
      font-weight: 700;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }

    & > p {
      color: #828282;
      line-height: 1.6;
      margin-top: 1rem;
    }

    & > button {
      margin-top: 1rem;
    }

    @media (min-width: 768px) {
      width: 60%;
      margin: 0 0 0 2rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledFeature = styled.div`
  margin-top: 6rem;

  & > h1 {
    font-size: 1.7rem;
    font-weight: 700;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      margin: 4rem -1rem 0 -1rem;
    }

    & div {
      padding: 0;
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      & svg {
        width: 4rem;
        height: 4rem;
      }

      & h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 1rem 0;
      }

      & p {
        text-align: center;
        line-height: 1.6;
      }

      @media (min-width: 768px) {
        margin-top: 0;
        padding: 0 1rem;
      }
    }
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;

  @media (min-width: 768px) {
    margin-top: 8rem;
  }

  & > .left-container {
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
    }

    & > h1 {
      font-size: 1.7rem;
      font-weight: 700;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }

    & > p {
      margin-top: 1rem;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    & > div {
      display: flex;
      align-items: center;
      margin-top: 1rem;

      & svg {
        color: #27ae60;
        width: 1.5rem;
        height: 1.5rem;
      }

      & p {
        margin-left: 0.5rem;
      }
    }
  }

  & > .right-container {
    margin-left: 0;
    margin-bottom: 4rem;
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
      margin-left: 1rem;
      margin-bottom: 0;
    }

    & > img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledWhy = styled.div`
  margin-top: 6rem;
  @media (min-width: 768px) {
    margin-top: 8rem;
  }

  & > h1 {
    font-size: 1.7rem;
    font-weight: 700;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;

    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 2rem;

      & svg {
        width: 3rem;
        height: 3rem;
        color: #ff4c0c;
        margin-right: 1rem;
      }

      & div {
        & h1 {
          font-weight: 600;
          font-size: 1.2rem;
        }

        & p {
          margin-top: 0.5rem;
        }
      }

      @media (min-width: 768px) {
        width: 50%;
        padding: 0 1.5rem;
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0 -1.5rem;
    }
  }
`;

const StyledDownload = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 6rem -4rem 0 -4rem;
  background-color: #e8cfff;
  padding: 4rem;

  & > .left-container {
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
    }

    & > img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  & > .right-container {
    width: 100%;
    margin-top: 2rem;

    @media (min-width: 768px) {
      width: 50%;
      margin-top: 0;
      margin-left: 2rem;
    }

    & > h1 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 2rem;

      & > i {
        font-style: italic;
      }
    }

    & > div {
      display: flex;
      align-items: center;
    }
  }

  @media (min-width: 768px) {
    margin-top: 8rem;
    flex-direction: row;
    margin: 8rem -4rem 0 -4rem;
  }
`;

export default function Home() {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <StyledMain>
        <StyledClient>
          <Icon icon="yahoo" />
          <Icon icon="amazon" />
          <Icon icon="ovo" />
          <Icon icon="google" />
          <Icon icon="mandiri" />
          <Icon icon="citibank" />
        </StyledClient>
        <StyledAbout>
          <div className="left-container">
            <img src="/images/girl.png" alt="Girl Image" />
            <div>
              <h1>950K++</h1>
              <p>Reguler Customer</p>
            </div>
          </div>
          <div className="right-container">
            <h1>About Ngemved.id</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis nemo natus dolor repellendus accusamus quod cupiditate
              aperiam deleniti error repellat hic ducimus maxime, sequi
              excepturi! Vero error porro eaque aliquid!
            </p>
            <Button size="lg">Learn More</Button>
          </div>
        </StyledAbout>
        <StyledFeature>
          <h1>Our Future And Hope in Ngemved.id</h1>
          <div>
            <div>
              <Icon icon="money" />
              <h1>Pay Bill</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet augue at pulvinar{' '}
              </p>
            </div>
            <div>
              <Icon icon="touch" />
              <h1>Easy to Use</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet augue at pulvinar
              </p>
            </div>
            <div>
              <Icon icon="purse" />
              <h1>Save Your Card</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet augue at pulvinar
              </p>
            </div>
          </div>
        </StyledFeature>
        <StyledInfo>
          <div className="left-container">
            <h1>International Banking in Ngemved.id</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              augue at pulvinar quisque cum iaculis pharetra, elementum vel.
            </p>
            <motion.div animate={{ x: 0 }} initial={{ x: '100vw' }}>
              <Icon icon="check" />
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </motion.div>
            <motion.div animate={{ x: 0 }} initial={{ x: '100vw' }}>
              <Icon icon="check" />
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </motion.div>
            <motion.div animate={{ x: 0 }} initial={{ x: '-100vw' }}>
              <Icon icon="check" />
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </motion.div>
            <motion.div animate={{ x: 0 }} initial={{ x: '100vw' }}>
              <Icon icon="check" />
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </motion.div>
            <motion.div animate={{ x: 0 }} initial={{ x: '-100vw' }}>
              <Icon icon="check" />
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </motion.div>
          </div>
          <div className="right-container">
            <img src="/images/people.png" alt="Working People" />
          </div>
        </StyledInfo>
        <StyledWhy>
          <h1>Why Choose And Use Ngemved.id</h1>
          <div>
            <div>
              <Icon icon="check" />
              <div>
                <h1>We are simple</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet
                </p>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.667 37.333v9.334A2.333 2.333 0 0144.333 49h-35A2.333 2.333 0 017 46.667v-28a2.333 2.333 0 012.333-2.334h35a2.333 2.333 0 012.334 2.334V28"
                  stroke="#FF4C0C"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M46.667 28h-7a2.333 2.333 0 00-2.334 2.333V35a2.333 2.333 0 002.334 2.333h7A2.333 2.333 0 0049 35v-4.667A2.333 2.333 0 0046.667 28zM14 16.333L32.97 7.91a2.333 2.333 0 013.033 1.073l3.664 7.35"
                  stroke="#FF4C0C"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h1>Free debit card</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet
                </p>
              </div>
            </div>
            <div>
              <Icon icon="guard" />
              <div>
                <h1>We are 100% safe</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet
                </p>
              </div>
            </div>
            <div>
              <Icon icon="chart-down" />
              <div>
                <h1>We are low cost</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet
                </p>
              </div>
            </div>
            <div>
              <Icon icon="chart-up" />
              <div>
                <h1>We are super fast</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet
                </p>
              </div>
            </div>
            <div>
              <Icon icon="worldwide" />
              <div>
                <h1>Realtime data</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet
                </p>
              </div>
            </div>
          </div>
        </StyledWhy>
        <StyledDownload>
          <div className="left-container">
            <img
              src="/images/people-with-laptop.png"
              alt="People with Laptop"
            />
          </div>
          <div className="right-container">
            <h1>
              Download our app and make bangking <i>more easy</i>
            </h1>
            <div>
              <svg
                height={41}
                viewBox="0 0 136 41"
                width={136}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M130.97 40.316H5.504a4.74 4.74 0 01-4.73-4.733V5.043A4.733 4.733 0 015.504.315H130.97c2.606 0 4.803 2.12 4.803 4.726v30.541c0 2.605-2.197 4.733-4.803 4.733z"
                    fill="#a6a6a6"
                  />
                  <path
                    d="M134.806 35.584a3.83 3.83 0 01-3.834 3.83H5.502a3.835 3.835 0 01-3.838-3.83V5.041a3.84 3.84 0 013.839-3.835H130.97a3.834 3.834 0 013.834 3.835z"
                    fill="#000"
                  />
                  <g fill="#fff">
                    <path d="M30.902 20.1c-.03-3.223 2.639-4.79 2.76-4.864-1.51-2.203-3.852-2.504-4.675-2.528-1.967-.207-3.875 1.177-4.877 1.177-1.022 0-2.565-1.157-4.228-1.123-2.14.033-4.142 1.272-5.24 3.196-2.266 3.923-.576 9.688 1.595 12.86 1.086 1.552 2.355 3.286 4.016 3.225 1.625-.067 2.232-1.036 4.193-1.036 1.943 0 2.513 1.036 4.207.997 1.744-.028 2.842-1.56 3.89-3.127 1.255-1.78 1.759-3.533 1.779-3.623-.041-.014-3.387-1.29-3.42-5.154zM27.702 10.622c.874-1.093 1.472-2.58 1.306-4.089-1.265.056-2.847.875-3.758 1.944-.806.942-1.526 2.486-1.34 3.938 1.42.106 2.88-.717 3.792-1.793zM54.419 31.82h-2.271l-1.244-3.909H46.58l-1.185 3.91h-2.211l4.284-13.309h2.646zm-3.89-5.549l-1.125-3.475c-.12-.355-.342-1.19-.671-2.507h-.04a96.75 96.75 0 01-.632 2.507l-1.105 3.475zM65.436 26.904c0 1.632-.441 2.922-1.323 3.87-.79.842-1.771 1.263-2.942 1.263-1.264 0-2.172-.454-2.725-1.362h-.04v5.055h-2.132V25.383c0-1.026-.027-2.079-.08-3.159h1.876l.119 1.521h.04c.71-1.146 1.79-1.718 3.238-1.718 1.132 0 2.077.447 2.833 1.342.758.896 1.136 2.074 1.136 3.535zm-2.172.078c0-.934-.21-1.704-.632-2.31-.461-.632-1.08-.948-1.856-.948-.526 0-1.004.176-1.431.523-.428.35-.708.807-.84 1.373-.065.264-.098.48-.098.65v1.6c0 .698.214 1.287.642 1.768s.984.721 1.668.721c.803 0 1.428-.31 1.875-.928.448-.619.672-1.435.672-2.449zM76.473 26.904c0 1.632-.441 2.922-1.324 3.87-.79.842-1.77 1.263-2.941 1.263-1.264 0-2.172-.454-2.724-1.362h-.04v5.055h-2.132V25.383c0-1.026-.027-2.079-.08-3.159h1.876l.119 1.521h.04c.71-1.146 1.789-1.718 3.238-1.718 1.13 0 2.076.447 2.834 1.342.755.896 1.134 2.074 1.134 3.535zm-2.172.078c0-.934-.211-1.704-.633-2.31-.461-.632-1.078-.948-1.855-.948a2.22 2.22 0 00-1.432.523c-.428.35-.707.807-.838 1.373-.065.264-.1.48-.1.65v1.6c0 .698.215 1.287.64 1.768.429.48.985.721 1.67.721.804 0 1.429-.31 1.876-.928.448-.619.672-1.435.672-2.449zM88.813 28.088c0 1.132-.393 2.053-1.182 2.764-.867.777-2.074 1.165-3.625 1.165-1.432 0-2.58-.276-3.45-.829l.495-1.777c.936.566 1.963.85 3.082.85.803 0 1.428-.182 1.877-.544.447-.362.67-.848.67-1.454 0-.54-.184-.995-.553-1.364-.367-.369-.98-.712-1.836-1.029-2.33-.869-3.494-2.142-3.494-3.816 0-1.094.408-1.99 1.225-2.689.814-.699 1.9-1.048 3.258-1.048 1.21 0 2.217.211 3.02.632l-.533 1.738c-.75-.408-1.598-.612-2.547-.612-.75 0-1.336.185-1.756.553a1.58 1.58 0 00-.533 1.205c0 .526.203.961.61 1.303.356.316 1 .658 1.937 1.027 1.145.461 1.986 1 2.527 1.618.539.616.808 1.387.808 2.307zM95.862 23.824h-2.35v4.66c0 1.184.414 1.776 1.244 1.776.38 0 .697-.033.947-.099l.059 1.62c-.42.156-.973.235-1.658.235-.842 0-1.5-.257-1.975-.77-.473-.514-.711-1.376-.711-2.587v-4.837h-1.4v-1.6h1.4v-1.757l2.094-.632v2.39h2.35zM106.465 26.943c0 1.475-.422 2.686-1.264 3.633-.883.975-2.055 1.461-3.516 1.461-1.408 0-2.53-.467-3.365-1.4s-1.254-2.114-1.254-3.535c0-1.487.43-2.705 1.293-3.652.86-.948 2.023-1.422 3.484-1.422 1.408 0 2.54.467 3.396 1.402.818.907 1.226 2.078 1.226 3.513zm-2.212.07c0-.886-.19-1.645-.572-2.278-.447-.766-1.086-1.148-1.914-1.148-.857 0-1.508.383-1.955 1.148-.383.634-.572 1.405-.572 2.317 0 .885.189 1.644.572 2.276.46.766 1.105 1.148 1.936 1.148.814 0 1.453-.39 1.914-1.168.393-.645.59-1.412.59-2.296zM113.395 24.1a3.702 3.702 0 00-.672-.06c-.75 0-1.33.283-1.738.85-.355.5-.533 1.132-.533 1.895v5.035h-2.131l.02-6.574c0-1.106-.027-2.113-.08-3.02h1.857l.078 1.835h.059c.225-.63.58-1.139 1.066-1.52a2.578 2.578 0 011.54-.514c.198 0 .376.014.534.04zM122.93 26.568a5 5 0 01-.078.967h-6.396c.025.948.334 1.673.928 2.173.539.447 1.236.671 2.092.671.947 0 1.81-.15 2.588-.454l.334 1.48c-.908.396-1.98.593-3.217.593-1.488 0-2.656-.438-3.506-1.313-.848-.875-1.273-2.05-1.273-3.524 0-1.447.395-2.652 1.186-3.613.828-1.026 1.947-1.539 3.355-1.539 1.383 0 2.43.513 3.14 1.54.564.814.847 1.822.847 3.02zm-2.033-.553c.014-.632-.125-1.178-.414-1.639-.37-.593-.936-.889-1.7-.889-.696 0-1.263.29-1.696.87-.355.46-.566 1.013-.631 1.657h4.44z" />
                    <g>
                      <path d="M49.824 10.325c0 1.177-.353 2.063-1.058 2.658-.653.55-1.581.824-2.783.824-.596 0-1.106-.026-1.533-.078V7.3c.557-.09 1.157-.137 1.805-.137 1.145 0 2.008.25 2.59.747.652.563.979 1.368.979 2.416zm-1.105.03c0-.764-.202-1.349-.606-1.757-.404-.407-.994-.61-1.771-.61-.33 0-.611.021-.844.067v4.89c.129.02.365.028.708.028.802 0 1.42-.223 1.857-.669s.656-1.096.656-1.95zM55.683 11.353c0 .725-.207 1.32-.621 1.785-.434.48-1.01.718-1.727.718-.692 0-1.243-.229-1.654-.689-.41-.459-.615-1.038-.615-1.736 0-.73.21-1.329.635-1.794s.994-.698 1.712-.698c.692 0 1.248.23 1.669.688.4.446.6 1.022.6 1.726zm-1.087.034c0-.435-.094-.808-.281-1.119-.22-.376-.533-.564-.94-.564-.421 0-.741.188-.961.564-.188.311-.281.69-.281 1.138 0 .435.094.808.28 1.12.228.375.544.563.952.563.4 0 .714-.19.94-.574.194-.317.29-.693.29-1.128zM63.539 9.035l-1.475 4.714h-.96l-.611-2.047a15.32 15.32 0 01-.38-1.523h-.018a11.15 11.15 0 01-.38 1.523l-.648 2.047h-.971l-1.387-4.714h1.077l.533 2.241c.129.53.235 1.035.32 1.513h.019c.078-.394.207-.896.389-1.503l.669-2.25h.854l.64 2.202c.156.537.282 1.054.379 1.552h.029c.07-.485.178-1.002.32-1.552l.572-2.202h1.029zM68.972 13.75h-1.048v-2.7c0-.833-.316-1.249-.95-1.249a.946.946 0 00-.757.343 1.217 1.217 0 00-.291.808v2.796h-1.048v-3.366c0-.414-.013-.863-.038-1.349h.92l.05.737h.029c.122-.229.304-.418.543-.569.284-.176.602-.265.95-.265.44 0 .806.142 1.097.427.362.35.543.87.543 1.562zM71.862 13.75h-1.047V6.871h1.047zM78.032 11.353c0 .725-.207 1.32-.621 1.785-.434.48-1.01.718-1.727.718-.693 0-1.244-.229-1.654-.689-.41-.459-.615-1.038-.615-1.736 0-.73.21-1.329.635-1.794s.994-.698 1.71-.698c.694 0 1.249.23 1.67.688.4.446.602 1.022.602 1.726zm-1.088.034c0-.435-.094-.808-.281-1.119-.22-.376-.533-.564-.94-.564-.421 0-.741.188-.96.564-.188.311-.281.69-.281 1.138 0 .435.094.808.28 1.12.228.375.544.563.952.563.4 0 .713-.19.939-.574.195-.317.29-.693.29-1.128zM83.104 13.75h-.941l-.078-.544h-.03c-.321.433-.78.65-1.376.65-.445 0-.805-.143-1.076-.427a1.339 1.339 0 01-.37-.96c0-.576.24-1.015.724-1.319.482-.304 1.16-.453 2.033-.446v-.088c0-.62-.326-.93-.98-.93-.464 0-.874.116-1.228.348l-.213-.688c.438-.27.979-.407 1.617-.407 1.232 0 1.85.65 1.85 1.95v1.736c0 .471.023.846.068 1.124zm-1.088-1.62v-.728c-1.156-.02-1.734.297-1.734.95 0 .246.066.43.2.553s.308.184.513.184c.23 0 .445-.073.64-.218a.893.893 0 00.38-.742zM89.059 13.75h-.93l-.05-.758h-.028c-.297.576-.803.864-1.514.864-.568 0-1.041-.223-1.416-.669s-.562-1.025-.562-1.736c0-.763.203-1.38.61-1.853.396-.44.88-.66 1.456-.66.633 0 1.076.213 1.328.64h.02V6.872h1.049v5.607c0 .46.012.882.037 1.27zm-1.086-1.989v-.786a1.194 1.194 0 00-.408-.965 1.03 1.03 0 00-.701-.257c-.391 0-.697.155-.922.466-.223.311-.336.708-.336 1.193 0 .466.107.844.322 1.135.227.31.533.465.916.465.344 0 .619-.129.828-.388.202-.239.3-.527.3-.863zM98.022 11.353c0 .725-.207 1.32-.621 1.785-.434.48-1.008.718-1.727.718-.691 0-1.242-.229-1.654-.689-.41-.459-.615-1.038-.615-1.736 0-.73.21-1.329.635-1.794s.994-.698 1.713-.698c.69 0 1.248.23 1.668.688.4.446.6 1.022.6 1.726zm-1.086.034c0-.435-.094-.808-.281-1.119-.221-.376-.533-.564-.941-.564-.42 0-.74.188-.961.564-.188.311-.281.69-.281 1.138 0 .435.094.808.28 1.12.228.375.544.563.952.563.4 0 .715-.19.94-.574.194-.317.292-.693.292-1.128zM103.657 13.75h-1.047v-2.7c0-.833-.316-1.249-.951-1.249-.311 0-.562.114-.756.343s-.291.5-.291.808v2.796h-1.05v-3.366c0-.414-.011-.863-.036-1.349h.92l.049.737h.029a1.53 1.53 0 01.543-.569c.285-.176.602-.265.95-.265.44 0 .806.142 1.097.427.363.35.543.87.543 1.562zM110.71 9.82h-1.154v2.29c0 .582.205.873.61.873.189 0 .345-.016.468-.049l.027.795c-.207.078-.48.117-.814.117-.414 0-.736-.126-.97-.378-.233-.252-.35-.676-.35-1.27V9.82h-.688v-.785h.689v-.864l1.027-.31v1.173h1.154v.786zM116.258 13.75h-1.05v-2.68c0-.846-.315-1.269-.948-1.269-.486 0-.818.245-1 .735a1.317 1.317 0 00-.05.377v2.835h-1.046V6.872h1.047v2.841h.02c.33-.517.803-.775 1.416-.775.434 0 .793.142 1.078.427.355.355.533.883.533 1.581zM121.98 11.17c0 .187-.013.345-.038.474h-3.143c.014.466.164.821.455 1.067.266.22.609.33 1.029.33.465 0 .889-.074 1.27-.223l.165.728c-.447.194-.973.291-1.582.291-.73 0-1.305-.215-1.721-.645-.418-.43-.625-1.007-.625-1.73 0-.712.193-1.304.582-1.776.406-.504.955-.756 1.648-.756.678 0 1.193.252 1.54.756.282.4.42.895.42 1.483zm-1-.272a1.411 1.411 0 00-.202-.805c-.182-.29-.46-.437-.834-.437a.995.995 0 00-.834.427 1.586 1.586 0 00-.311.815z" />
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                height={41}
                viewBox="0 0 136 41"
                width={136}
                xmlns="http://www.w3.org/2000/svg"
              >
                <linearGradient
                  id="prefix__a"
                  x1="91.502%"
                  x2="-38.333%"
                  y1="4.964%"
                  y2="71.903%"
                >
                  <stop offset={0} stopColor="#00a0ff" />
                  <stop offset={0.007} stopColor="#00a1ff" />
                  <stop offset={0.26} stopColor="#00beff" />
                  <stop offset={0.512} stopColor="#00d2ff" />
                  <stop offset={0.76} stopColor="#00dfff" />
                  <stop offset={1} stopColor="#00e3ff" />
                </linearGradient>
                <linearGradient
                  id="prefix__b"
                  x1="107.584%"
                  x2="-130.469%"
                  y1="50%"
                  y2="50%"
                >
                  <stop offset={0} stopColor="#ffe000" />
                  <stop offset={0.409} stopColor="#ffbd00" />
                  <stop offset={0.775} stopColor="orange" />
                  <stop offset={1} stopColor="#ff9c00" />
                </linearGradient>
                <linearGradient
                  id="prefix__c"
                  x1="86.247%"
                  x2="-50.137%"
                  y1="17.846%"
                  y2="194.808%"
                >
                  <stop offset={0} stopColor="#ff3a44" />
                  <stop offset={1} stopColor="#c31162" />
                </linearGradient>
                <linearGradient
                  id="prefix__d"
                  x1="-18.81%"
                  x2="42.095%"
                  y1="-54.157%"
                  y2="24.866%"
                >
                  <stop offset={0} stopColor="#32a071" />
                  <stop offset={0.069} stopColor="#2da771" />
                  <stop offset={0.476} stopColor="#15cf74" />
                  <stop offset={0.801} stopColor="#06e775" />
                  <stop offset={1} stopColor="#00f076" />
                </linearGradient>
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M130.938 40.316h-125c-2.75 0-5-2.25-5-5v-30c0-2.75 2.25-5 5-5h125c2.75 0 5 2.25 5 5v30c0 2.75-2.25 5-5 5z"
                    fill="#000"
                  />
                  <path
                    d="M130.938 1.116c2.316 0 4.2 1.884 4.2 4.2v30c0 2.316-1.884 4.2-4.2 4.2h-125a4.205 4.205 0 01-4.2-4.2v-30c0-2.316 1.884-4.2 4.2-4.2zm0-.8h-125c-2.75 0-5 2.25-5 5v30c0 2.75 2.25 5 5 5h125c2.75 0 5-2.25 5-5v-30c0-2.75-2.25-5-5-5z"
                    fill="#a6a6a6"
                  />
                  <g fill="#fff" stroke="#fff" strokeWidth={0.2}>
                    <path d="M48.356 10.56c0 .837-.248 1.504-.745 2.002-.564.592-1.3.888-2.204.888-.866 0-1.603-.3-2.208-.9-.606-.6-.91-1.345-.91-2.233 0-.889.304-1.633.91-2.233.605-.6 1.342-.9 2.208-.9.43 0 .84.083 1.23.251.392.168.705.391.939.67l-.527.528c-.397-.475-.944-.712-1.643-.712-.632 0-1.178.222-1.64.666s-.69 1.021-.69 1.73.23 1.286.69 1.73 1.008.666 1.64.666c.67 0 1.229-.223 1.676-.67.29-.29.458-.696.503-1.215h-2.18v-.72h2.908c.03.155.043.306.043.451zM52.966 8.053h-2.732v1.902h2.464v.721h-2.464v1.902h2.732v.738h-3.503v-6h3.503zM56.217 13.316h-.771V8.053H53.77v-.737h4.123v.737h-1.676zM60.876 13.316v-6h.77v6zM65.066 13.316h-.771V8.053h-1.676v-.737h4.123v.737h-1.676zM74.547 12.541c-.59.607-1.323.91-2.2.91s-1.61-.304-2.2-.91c-.59-.606-.883-1.348-.883-2.225s.294-1.619.884-2.225c.589-.607 1.322-.91 2.199-.91.872 0 1.604.305 2.196.914s.888 1.35.888 2.221c0 .877-.295 1.62-.884 2.225zm-3.83-.503c.444.45.987.674 1.63.674s1.187-.225 1.63-.674c.444-.45.667-1.024.667-1.722s-.223-1.272-.667-1.722c-.443-.45-.987-.674-1.63-.674s-1.186.225-1.63.674c-.443.45-.666 1.024-.666 1.722s.223 1.272.666 1.722zM76.513 13.316v-6h.938l2.916 4.667h.033l-.033-1.156v-3.51h.77v6h-.804l-3.051-4.895h-.033l.033 1.156v3.738z" />
                  </g>
                  <path
                    d="M69.074 22.068c-2.352 0-4.27 1.788-4.27 4.253 0 2.45 1.918 4.253 4.27 4.253s4.269-1.804 4.269-4.253c0-2.465-1.917-4.253-4.27-4.253zm0 6.83c-1.29 0-2.401-1.063-2.401-2.578 0-1.53 1.112-2.578 2.4-2.578s2.4 1.047 2.4 2.578c0 1.515-1.11 2.578-2.4 2.578zm-9.313-6.83c-2.352 0-4.27 1.788-4.27 4.253 0 2.45 1.918 4.253 4.27 4.253s4.269-1.804 4.269-4.253c0-2.465-1.917-4.253-4.27-4.253zm0 6.83c-1.29 0-2.401-1.063-2.401-2.578 0-1.53 1.112-2.578 2.4-2.578s2.4 1.047 2.4 2.578c0 1.515-1.111 2.578-2.4 2.578zm-11.08-5.525v1.804H53c-.13 1.015-.467 1.756-.983 2.272-.628.628-1.611 1.321-3.335 1.321-2.658 0-4.736-2.143-4.736-4.8s2.078-4.802 4.736-4.802c1.434 0 2.48.564 3.254 1.29l1.273-1.274c-1.08-1.03-2.513-1.82-4.527-1.82-3.641 0-6.702 2.964-6.702 6.605s3.06 6.605 6.702 6.605c1.966 0 3.448-.644 4.608-1.853 1.192-1.192 1.563-2.868 1.563-4.22a5.84 5.84 0 00-.097-1.129zm45.309 1.401c-.354-.95-1.434-2.706-3.641-2.706-2.191 0-4.011 1.724-4.011 4.253 0 2.384 1.804 4.253 4.22 4.253 1.95 0 3.078-1.192 3.545-1.885l-1.45-.967c-.483.71-1.144 1.176-2.094 1.176-.951 0-1.627-.435-2.062-1.289l5.687-2.352zm-5.8 1.418c-.048-1.643 1.273-2.48 2.223-2.48.74 0 1.369.37 1.579.901zm-4.623 4.124h1.869v-12.5h-1.87zm-3.062-7.298h-.064c-.42-.499-1.224-.95-2.24-.95-2.126 0-4.075 1.87-4.075 4.27 0 2.383 1.949 4.236 4.076 4.236 1.015 0 1.82-.45 2.239-.967h.064v.612c0 1.627-.87 2.497-2.272 2.497-1.144 0-1.853-.822-2.143-1.514l-1.627.677c.467 1.128 1.708 2.513 3.77 2.513 2.19 0 4.044-1.289 4.044-4.43v-7.636h-1.772zm-2.142 5.88c-1.29 0-2.368-1.079-2.368-2.562 0-1.498 1.079-2.594 2.368-2.594 1.273 0 2.272 1.095 2.272 2.594-.001 1.483-1 2.562-2.272 2.562zm24.38-11.083h-4.47v12.501h1.866V25.58h2.606c2.068 0 4.1-1.497 4.1-3.882s-2.033-3.883-4.101-3.883zm.049 6.025h-2.654v-4.285h2.654c1.395 0 2.187 1.155 2.187 2.143 0 .968-.792 2.142-2.187 2.142zm11.532-1.795c-1.351 0-2.75.595-3.33 1.914l1.658.692c.354-.692 1.013-.917 1.705-.917.965 0 1.946.58 1.962 1.608v.13c-.338-.194-1.062-.484-1.946-.484-1.785 0-3.603.981-3.603 2.815 0 1.673 1.464 2.75 3.104 2.75 1.255 0 1.946-.563 2.38-1.222h.064v.965h1.8v-4.793c0-2.22-1.655-3.458-3.794-3.458zm-.225 6.851c-.611 0-1.464-.306-1.464-1.062 0-.965 1.062-1.335 1.978-1.335.82 0 1.206.177 1.705.418a2.262 2.262 0 01-2.22 1.98zm10.582-6.578l-2.14 5.42h-.063l-2.22-5.42h-2.01l3.33 7.575-1.898 4.214h1.946l5.13-11.789zm-16.807 7.998h1.866v-12.5h-1.866z"
                    fill="#fff"
                  />
                  <path
                    d="M1.435.538c-.291.308-.463.786-.463 1.405v22.116c0 .62.172 1.097.463 1.405l.074.072 12.389-12.389v-.292L1.509.465z"
                    fill="url(#prefix__a)"
                    transform="translate(9.938 7.316)"
                  />
                  <path
                    d="M18.028 17.278l-4.129-4.131v-.292l4.13-4.13.093.053 4.893 2.78c1.398.794 1.398 2.093 0 2.888l-4.893 2.78z"
                    fill="url(#prefix__b)"
                    transform="translate(9.938 7.316)"
                  />
                  <path
                    d="M18.122 17.225l-4.223-4.224L1.435 25.464c.461.488 1.221.548 2.078.061z"
                    fill="url(#prefix__c)"
                    transform="translate(9.938 7.316)"
                  />
                  <path
                    d="M18.122 8.777L3.514.477C2.657-.01 1.897.051 1.436.538l12.463 12.463z"
                    fill="url(#prefix__d)"
                    transform="translate(9.938 7.316)"
                  />
                  <g fill="#000">
                    <path
                      d="M27.967 24.448l-14.515 8.247c-.812.461-1.538.431-2.004.011l-.074.075.074.072c.466.42 1.192.451 2.004-.01l14.608-8.3z"
                      opacity={0.2}
                    />
                    <path
                      d="M11.373 32.634c-.291-.308-.463-.786-.463-1.405v.146c0 .62.172 1.097.463 1.405l.074-.075z"
                      opacity={0.12}
                    />
                  </g>
                  <path
                    d="M32.953 21.615l-4.986 2.833.093.093 4.893-2.78c.699-.397 1.048-.92 1.048-1.443-.06.473-.415.937-1.048 1.297z"
                    fill="#000"
                    opacity={0.12}
                  />
                  <path
                    d="M13.452 7.94l19.5 11.08c.635.36.99.823 1.049 1.297 0-.523-.35-1.047-1.048-1.444L13.452 7.793C12.054 7 10.91 7.658 10.91 9.26v.146c0-1.6 1.143-2.26 2.54-1.466z"
                    fill="#fff"
                    opacity={0.25}
                  />
                </g>
              </svg>
            </div>
          </div>
        </StyledDownload>
      </StyledMain>
      <Footer />
    </>
  );
}
