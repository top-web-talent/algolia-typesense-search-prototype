import React, { useContext, useState } from "react";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  InfiniteHits,
  Highlight,
  Configure,
  connectHits,
} from "react-instantsearch-dom";
import Drawer from "@material-ui/core/Drawer";
import Modal from "react-bootstrap/Modal";

import { typesenseClient } from "./typesenseClient";
import { HitContext } from "../context/HitProvider";
const HitsModal = ({ hits }) => {
  return (
    <>
      {hits.map((hit) => (
        <div key={hit.id} className="mb-3">
          <h5>
            <Highlight attribute="title" hit={hit} />
          </h5>
          <p>
            <Highlight attribute="performer" hit={hit} />
          </p>
        </div>
      ))}
    </>
  );
};

const CustomHits = connectHits(HitsModal);

const ModalComponent = () => {
  const [selectedHit, setSelectedHit] = useState(null);
  const {isModal, setIsModal} = useContext(HitContext)
  const handleHitClick = (hit) => {
    setSelectedHit(hit);
    setIsModal(true);
  };

  return (
    <>
      <Drawer anchor="left" open={isModal} onClose={() => setIsModal(false)}>
        <div className="p-3">
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setIsModal(false)}
          >
            Close
          </button>
          <InstantSearch
            indexName="auditions"
            searchClient={typesenseClient}
          >
            <SearchBox />
            <RefinementList attribute="performer" />
            <RefinementList attribute="type" />
            <RefinementList attribute="category" />
            <InfiniteHits
              hitComponent={({ hit }) => (
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">
                        <Highlight attribute="title" hit={hit} />
                      </h5>
                      <p className="card-text">
                        <Highlight attribute="performer" hit={hit} />
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleHitClick(hit)}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              )}
            />
            {selectedHit && (
              <Modal show={isModal} onHide={() => setIsModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>{selectedHit.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {/* Display details about selected hit */}
                </Modal.Body>
                <Modal.Footer>
                  {/* Display list of hits */}
                  <Configure hitsPerPage={5} />
                  <CustomHits />
                </Modal.Footer>
              </Modal>
            )}
          </InstantSearch>
        </div>
      </Drawer>
      {/* Other components go here */}
    </>
  );
};

export default ModalComponent;
