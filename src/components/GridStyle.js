import React, { useContext } from "react";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  Hits,
  useInfiniteHits,
  Highlight,
} from "react-instantsearch";

import { typesenseClient } from "./typesenseClient";
import "../styles/index.css";
import { InfiniteHits } from "./InifiniteHits";

export const GridStyle = () => {
  return (
    <InstantSearch indexName="auditions" searchClient={typesenseClient}>
      <InfiniteHits />
      {/* Other search components go here */}
    </InstantSearch>
  );
};

export default GridStyle;
