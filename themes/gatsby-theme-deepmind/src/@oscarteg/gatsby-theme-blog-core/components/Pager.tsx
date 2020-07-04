import React from "react";
import { Link } from "gatsby";

export default ({ previousPagePath, nextPagePath }) => {
  return (
    <div className="flex items-center justify-between mt-16 md:w-4/5 mx-auto">
      {previousPagePath && (
        <Link to={previousPagePath} className="button">
          Previous
        </Link>
      )}
      {nextPagePath && (
        <Link to={nextPagePath} className="button ml-auto">
          Next
        </Link>
      )}
    </div>
  );
};
