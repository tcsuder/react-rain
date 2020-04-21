/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const style = css`
  text-align: center;
  h1 {
    color: hotpink;
  }
  h2 {
    color: papayawhip;
  }
`;

function App() {
  return (
    <div css={style} className="App">
      <header className="App-header">
        <h1>This is Tyler's start react app!</h1>
        <h2>it's for reference</h2>
      </header>
    </div>
  );
}

export default App;
