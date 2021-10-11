import { createClient, createPortableTextComponent } from "next-sanity";

const config = {
  projectId: "5xmt1mxp",
  dataset: "production",
  apiVersion: "2021-06-07",
  useCdn: false,
};

const serial = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

export const sanityClient = createClient(config);
export const PortableText = createPortableTextComponent({
  ...config,
  serializers: serial,
});
