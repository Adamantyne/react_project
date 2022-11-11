import ResetCss from "../src/css/ResetCss";
import config from "../config.json";
import styled from "styled-components";

function HomePage() {
  return (
    <>
      <ResetCss />
      <Root style={{ backgroundColor: "tomato", padding: "20px" }}>
        <Header />
        <Page />
      </Root>
    </>
  );
}

function Header() {
  return (
    <StyledHeader style={{ backgroundColor: "blue" }}>
      <img src={config.githubImg} alt="" />
    </StyledHeader>
  );
}
function Page() {
  return (
    <StyledPage>
      <h1>Welcome to Next.js!</h1>
    </StyledPage>
  );
}

const Root = styled.main`
  background-color: tomato;
  padding: 20px;
`;

const StyledHeader = styled.header`
  img {
    height: 140px;
  }
`;

const StyledPage = styled.section`
  h1 {
    color: white;
  }
`;

export default HomePage;

// import HomePage from "./_app";

// function Root(){
//   return (
//     <HomePage />
//   )
// }

// export default Root;
