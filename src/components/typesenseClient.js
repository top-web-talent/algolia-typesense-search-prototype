import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

export const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "YDVoWyTTxschHf6PPs9cOyuNMSoHgMOc",
    nodes: [
      {
        host: "yexomk59q3zjg0i6p-1.a1.typesense.net",
        port: "443",
        protocol: "https",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title", // Replace with the field you want to search by
  },
  collectionSpecificSearchParameters: {
    auditions: {
      facet_by: ["type"]
    },
  },
});

export const typesenseClient = typesenseInstantsearchAdapter.searchClient;