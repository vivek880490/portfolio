import React, { Suspense } from "react";

import SectionHeader from "../components/miscellaneous/SectionHeader";
import Bullet from "../components/miscellaneous/Bullet";

import { Box, Spinner, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Body, Heading2, Heading3 } from "../components/Typography/index";

import useColorSwitcher from "../utils/useColorSwitcher";

const ProfileImage = React.lazy(() =>
  import("../components/miscellaneous/ProfileImage")
);

const About = () => {
  const { lightGreyBg, greyBg } = useColorSwitcher();

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box
        as="section"
        outline="0"
        tabIndex={-1}
        w="100%"
        my="4em"
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Box w="100%" mb={{ base: "32px", md: "50px" }}>
          <SectionHeader mr="16px">
            <Heading2>about</Heading2>
          </SectionHeader>
        </Box>
        <Stack
          align="center"
          spacing={{ sm: "10", md: "32" }}
          direction={{ base: "column", xl: "row" }}
          justify={{ base: "space-between", xl: "space-evenly" }}
        >
          <Box
            bg={lightGreyBg}
            rounded="full"
            display="grid"
            placeItems="center"
            p={{ base: "8px", md: "16px" }}
          >
            <Box
              bg={greyBg}
              rounded="full"
              display="grid"
              placeItems="center"
              p={{ base: "8px", md: "16px" }}
            >
              <Suspense
                fallback={
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                }
              >
                <ProfileImage />
              </Suspense>
            </Box>
          </Box>
          <Stack spacing={{ sm: "8" }} p="8px" w={{ base: "100%", xl: "50%" }}>
            <Body mb="2em" textAlign={{ sm: "center", md: "justify" }}>
              Hello! I'm Vivek, a final year Computer Science Engineering undergraduate
              and a Full-Stack Developer based in Patna, India. I love to
              work on exciting projects that test what I've learnt, whilst being
              exposed to the power and potential of the ever-evolving
              technologies around us. I'm always looking for better, and more
              importantly, ethical and accessible ways to solve the common
              problems we are faced with day-to-day.
            </Body>
            <Box>
              <Heading3>What I've been up to:</Heading3>
              <Stack as="ul">
                <Bullet as="li">Building this page!</Bullet>
                <Bullet as="li">
                  Getting deeper into ReactJs and Javascript
                </Bullet>
                <Bullet as="li">Learning Cloud(Azure)</Bullet>
                <Bullet as="li">DSA(LeetCode)</Bullet>
                <Bullet as="li">Playing my guitar</Bullet>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </motion.div>
  );
};

export default About;
