export default {
  name: "upcomingEvents",
  title: "Upcoming Events",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    },

    {
      name: "projectDescription",
      title: "Project Description",
      type: "string",
    },

    {
      name: "languageUsed",
      title: "Used Language",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "projectRelatedResources",
      title: "Project Resources(Github link or video link)",
      type: "url",
    },
  ],
};
