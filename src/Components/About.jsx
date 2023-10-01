import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const About = () => {
  return (
    <div
      className="App-header rounded-lg bg-white px-6 py-8  text-left shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800"
      id="About"
    >
      <RoughNotationGroup show={true}>
        <RoughNotation
          type="highlight"
          order="5"
          multiline={true}
          color="lightblue"
          animationDuration={3000}
        >
          {/* !!!!!!!!!! */}
          <div>
            <RoughNotationGroup show={true}>
              <p>
                This is a{" "}
                <RoughNotation type="highlight" color="#FFD700">
                  highlighted
                </RoughNotation>{" "}
                word.
              </p>
              <p>
                Another{" "}
                <RoughNotation type="highlight" color="#FFD700">
                  highlighted
                </RoughNotation>{" "}
                word in a different paragraph.
              </p>
            </RoughNotationGroup>
          </div>
          {/* !!!!!!!!! */}
          <br /> <br />
          <h1>Hello! I&rsquo;m Drew, a developer based in America.</h1>
          <div>
            <p>I love building tools that are user-friendly and delightful.</p>
            <p>
              I was a student at Bleep Bleep Bleep where I spent 4 years
              learning the fundamentals of front-end and back-end web
              development. I also worked at NTT Data where my role was building
              features for Fortune 500 companies.
            </p>
            <p>
              Through these experiences, i had the opportunity to work with both
              small and large, specialised and cross-functional teams across
              different time zones and developed a working style that leans
              towards flexibility, clarity, and collaboration.
            </p>
            <p>
              I&rsquo;m currently looking for a new role as a developer. Hire
              me?
            </p>
          </div>
        </RoughNotation>
      </RoughNotationGroup>
      <div className="flex space-x-4">
        <a
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
