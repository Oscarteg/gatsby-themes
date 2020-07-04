import React from "react";
import { graphql } from "gatsby";
import Post from "../components/Post";

export default ({ data }) => <Post {...data.post} />;

export const query = graphql`
  query($id: String) {
    post(id: { eq: $id }) {
      ...PostFragment
    }
  }
`;
