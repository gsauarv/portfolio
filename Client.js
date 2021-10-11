import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "5xmt1mxp",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});
