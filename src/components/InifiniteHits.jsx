import React, { useContext, useRef, useEffect } from 'react';
import { Highlight, useInfiniteHits, Snippet } from 'react-instantsearch';
import { HitContext } from "../context/HitProvider";

export function InfiniteHits(props) {
  const { setIsModal } = useContext(HitContext)
  const { hits, isLastPage, showMore } = useInfiniteHits(props);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore()
          }
        });
      });

      observer.observe(sentinelRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isLastPage, showMore]);

  return (
    <div className="">
      <div className="d-flex overflow-auto gap-4">
        {hits.map((hit) => (
          <div className="grid-col" onClick={() => setIsModal(true)}>
            <div className="card mb-4 shadow-sm flex justify-content-between">
              <div className="card-body">
                <h5 className="card-title">
                  <Highlight attribute="title" hit={hit} />
                </h5>
                <p className="card-text">
                  <Highlight attribute="performer" hit={hit} />
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className='grid-col' ref={sentinelRef} aria-hidden="true" style={{
          width: "1px"
        }}></div>
      </div>
    </div>
  );
}