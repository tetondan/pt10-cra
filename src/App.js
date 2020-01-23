import React from "react";
import "./App.css";

function App() {
  return (
    <main>
      <h1>We just changed this in Github! This is FAKE BRANCH!</h1>
      <h2>
        Deployed with{" "}
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          ZEIT Now
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/zeit/now/tree/master/examples/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{" "}
        was bootstrapped with{" "}
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>{" "}
        and contains three directories, <code>/public</code> for static assets,{" "}
        <code>/src</code> for components and content, and <code>/api</code>{" "}
        which contains a serverless <a href="https://golang.org/">Go</a>{" "}
        function. See{" "}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Go
        </a>
        .
      </p>
      <br />
    </main>
  );
}

export default App;
