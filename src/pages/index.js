import React from "react";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import Button from "../components/button";

const IndexPage = () => {
  const handleClick = () => {};

  return (
    <Layout>
      <h1>Natasha Djurdjevic</h1>
      <p>
        A 4th computing student at Queen's University working as a front-end
        developer at Capco.
      </p>
      <p>Where to find me:</p>
      <Button onClick={handleClick}>Hey!</Button>
      <Button onClick={handleClick}>Hey!</Button>
      <Button onClick={handleClick}>Hey!</Button>
      <Button onClick={handleClick}>Hey!</Button>
      <Button onClick={handleClick}>Hey!</Button>
      <Button onClick={handleClick}>Hey!</Button>
      <Button onClick={handleClick}>Hey!</Button>
    </Layout>
  );
};

export default IndexPage;
