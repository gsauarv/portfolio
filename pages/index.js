import Landing from "../Components/Landing";
import Head from "next/head";
import CurrentProjectCard from "../Components/CurrentProjectCard";
import { useColorModeValue } from "@chakra-ui/color-mode";
import PageHeading from "../Components/PageHeading";
import { Box, Container } from "@chakra-ui/layout";
export default function Home({ results }) {
  const bg = useColorModeValue("#f3f3f3", "gray.700");
  const textColor = useColorModeValue("#2F855A", "#9AE6B4");

  return (
    <>
      <Head>
        <title>Homepage | Sauru Welcome You</title>
        <meta
          name="description"
          content="Hi,Visit my portfolio for new blogs and find all my projects and stuff."
        />
        <meta property="og:title" content="Saurav Ghimire" />
        <meta property="og:description" content="Welcome to my portfolio 👩‍💻" />
        <meta property="og:url" content="https://gsaurav.com.np" />
        <meta property="og:type" content="website" />
        <meta property="og:" />

        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/2881/2881142.png"
        />
      </Head>
      <Landing />

      {/* Current Status goes here!!! */}
      <Box bg={bg} pb="50px">
        <Container
          maxWidth={{
            base: "100%",
            md: "container.lg",
            xl: "1200",
          }}
        >
          <PageHeading
            headingText="Ongoing Projects and Activities."
            headingSize="xx-large"
            fontWeightSize="bold"
            styles={{
              paddingTop: "50px",
              color: textColor,
            }}
          />

          {results.map((result) => (
            <CurrentProjectCard
              projectTitle={result.projectTitle}
              projectDescription={result.projectDescription}
              languageUsed={result.languageUsed}
              refrenceLink={result.refrenceLink}
              relatedResources={result.relatedResources}
            />
          ))}
        </Container>
      </Box>
    </>
  );
}

export const getStaticProps = async (context) => {
  const results = [
    {
      projectTitle: "HungerZone- a food ordering app.",
      projectDescription:
        "The concept of this project is to help the resturent to take order from their customers through smartphone or laptops.",
      languageUsed: "NextJs",
      refrenceLink: "https://nextjs.org",
      relatedResources: "https://github.com/gsauarv/hunger_zone",
    },

    {
      projectTitle: "Learning Rust Lang.",
      projectDescription: "Rust is a system programming language.",
      languageUsed: "Rust",
      refrenceLink: "https://www.rust-lang.org/",
      relatedResources: "https://github.com/gsauarv/hunger_zone",
    },

    {
      projectTitle: "Coding Daily.",
      projectDescription: "Coding daily for 3 hours.Catch me on live stream",
      languageUsed: "Python",
      refrenceLink: "https://www.rust-lang.org/",
      relatedResources: "https://github.com/gsauarv/hunger_zone",
    },
  ];
  return {
    props: {
      results,
    },
  };
};
