import { Stack } from "@mui/system";
import React from "react";
import { Footer, Navbar } from "./layout";
import { CollectionSection, HeroSection, StorySection, WorkSection } from "./sections";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Stack gap={6}>
        <HeroSection />
        <WorkSection />
        <CollectionSection />
        <StorySection />
      </Stack>
      <Footer />
    </React.Fragment>
  );
}

export default App;