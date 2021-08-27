export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "Project Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "projectName",
        maxLength: 96,
      },
    },

    {
      name: "projectDesc",
      title: "Project Description (Language Used)",
      type: "string",
    },

    {
      name: "publishedAt",
      title: "Published at",
      type: "date",
    },
    {
      name: "videoUrl",
      title: "Youtube Url",
      type: "url",
    },

    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
