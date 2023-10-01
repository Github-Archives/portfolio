import React, { useState, useEffect, useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const DataOne = () => {
  // <button> auto-focus on refresh/tab/window change
  const buttonRef = useRef(null);
  //   const [count, setCount] = useState(0);
  const [showRoughNotation, setShowRoughNotation] = useState(false);

  // <button> auto-focus
  useEffect(() => {
    // Focus on the button when the component mounts (page refresh)
    if (buttonRef.current) {
      buttonRef.current.focus();
    }

    // Add an event listener for visibility change
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  // <button> auto-focus
  const handleVisibilityChange = () => {
    // Check if the page is visible (focused)
    if (document.visibilityState === "visible" && buttonRef.current) {
      // Focus on the <button>
      buttonRef.current.focus();
    }
  };

  return (
    <section
      className="App-header rounded-lg bg-white px-6  py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800"
      id="DataOne"
    >
      <button
        ref={buttonRef} // <button> auto-focus
        className="rounded-lg border border-red-500 bg-white p-2 text-red-500 hover:bg-red-500 hover:text-white"
        onClick={() => setShowRoughNotation(!showRoughNotation)}
      >
        Toggle RoughNotation
      </button>

      {showRoughNotation && (
        <RoughNotation
          animationDuration={4000}
          type="underline"
          show={showRoughNotation}
          iterations={4}
        >
          <br />
          Hello RoughNotation
        </RoughNotation>
      )}
      <br />
      <RoughNotationGroup show={showRoughNotation}>
        <RoughNotation type="underline" order="4" iterations={1}>
          Hello,
        </RoughNotation>
        <br />
        <RoughNotation type="underline" order="3">
          This is
        </RoughNotation>
        <br />
        <RoughNotation
          type="circle"
          order="2"
          animationDuration={3250}
          color="pink"
        >
          a Test
        </RoughNotation>
        <br />
        <RoughNotation
          type="box"
          order="1"
          multiline={true}
          strokeWidth={0.5}
          color="purple"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant
          morbi tristique senectus et netus et malesuada fames. Quam
          pellentesque nec nam aliquam. Ac odio tempor orci dapibus ultrices in.
          At varius vel pharetra vel turpis nunc eget. Eget mauris pharetra et
          ultrices. Lectus vestibulum mattis ullamcorper velit.
        </RoughNotation>
        <br /> <br />
        <RoughNotation
          type="highlight"
          order="5"
          multiline={true}
          color="lightblue"
          animationDuration={3000}
        >
          At varius vel pharetra vel turpis nunc eget lorem. Eu ultrices vitae
          auctor eu. Nulla facilisi etiam dignissim diam quis enim. Euismod
          lacinia at quis risus sed. Maecenas sed enim ut sem viverra aliquet.
          Sapien nec sagittis aliquam malesuada. Aliquam faucibus purus in massa
          tempor nec. Purus non enim praesent elementum facilisis leo vel.
          Bibendum at varius vel pharetra vel. Orci porta non pulvinar neque
          laoreet. Diam ut venenatis tellus in metus vulputate eu. Dictum non
          consectetur a erat nam at. Amet risus nullam eget felis.
        </RoughNotation>
      </RoughNotationGroup>

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
