import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const DataOne = () => {
  const [showRoughNotation, setShowRoughNotation] = useState(false);

  return (
    <section
      className="App-header rounded-lg bg-white px-6  py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800"
      id="DataOne"
    >
      <button onClick={() => setShowRoughNotation(!showRoughNotation)}>
        Toggle RoughNotation
      </button>

      {showRoughNotation && (
        <RoughNotation type="underline" show={showRoughNotation}>
          <br />
          Hello RoughNotation
        </RoughNotation>
      )}

      {/* Hard-coded state (showRoughNotation needs to be set to true) */}
      {/* <RoughNotation type="underline" show={showRoughNotation}>
        Hello RoughNotation
      </RoughNotation> */}

      <h3 className="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">
        DataOne Section
      </h3>

      <div className="text-left">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant
          morbi tristique senectus et netus et malesuada fames. Quam
          pellentesque nec nam aliquam. Ac odio tempor orci dapibus ultrices in.
          At varius vel pharetra vel turpis nunc eget. Eget mauris pharetra et
          ultrices. Lectus vestibulum mattis ullamcorper velit.
        </p>
        <p>
          At varius vel pharetra vel turpis nunc eget lorem. Eu ultrices vitae
          auctor eu. Nulla facilisi etiam dignissim diam quis enim. Euismod
          lacinia at quis risus sed. Maecenas sed enim ut sem viverra aliquet.
          Sapien nec sagittis aliquam malesuada. Aliquam faucibus purus in massa
          tempor nec. Purus non enim praesent elementum facilisis leo vel.
          Bibendum at varius vel pharetra vel. Orci porta non pulvinar neque
          laoreet. Diam ut venenatis tellus in metus vulputate eu. Dictum non
          consectetur a erat nam at. Amet risus nullam eget felis.
        </p>
      </div>
      <a
        className="App-link mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </section>
  );
};

export default DataOne;
