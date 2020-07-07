import React from "react";
import { graphql } from "gatsby";
import Project from "../components/Project";

export default ({ data }) => <Project {...data.project} />;

export const query = graphql`
  query($id: String) {
    project: project(id: { eq: $id }) {
      ...ProjectFragment
    }
  }
`;
