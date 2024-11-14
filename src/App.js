import { Stack } from "@mui/system";
import React from "react";
import { Footer, Navbar } from "./layout";
import { CollectionSection, CollectionSectionV2, HeroSection, StorySection, WorkSection } from "./sections";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Stack gap={6}>
        <HeroSection />
        <WorkSection />
        <CollectionSection />
        <CollectionSectionV2 />
        <StorySection />
      </Stack>
      <Footer />
    </React.Fragment>
  );
}

export default App;