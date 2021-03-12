import styled from 'styled-components';
import { Button, Header, Hero } from '@comps/index';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  flex-grow: 1;
`;

export default function Home() {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <StyledMain>
        <Button variant="outline" size="lg">
          Hello World
        </Button>
      </StyledMain>
    </>
  );
}
