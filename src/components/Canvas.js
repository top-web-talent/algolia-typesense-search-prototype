import React, { useContext, useState } from "react";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  Hits,
  InfiniteHits,
  Highlight,
} from "react-instantsearch";
import Drawer from "@material-ui/core/Drawer";
import { HitContext } from "../context/HitProvider";
import { typesenseClient } from "./typesenseClient";

const Canvas = () => {
  const [open, setOpen] = useState(false);
  const {hits, setHits} = useContext(HitContext)
  return (
    <>
      <button className="btn btn-primary" onClick={() => setOpen(true)}>
        Search
      </button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="p-3">
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <InstantSearch indexName="auditions" searchClient={typesenseClient}>
            <SearchBox />
            <RefinementList attribute="type" />
            <Hits hitComponent={({ hit }) => setHits(hit)} />
          </InstantSearch>
        </div>
      </Drawer>
      {/* Other components go here */}
    </>
  );
};

export default Canvas;
