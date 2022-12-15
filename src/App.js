import { Stack } from "@mui/system";
import Collection from "./components/collection/Collection";
import HeroMain from "./components/hero/HeroMain";
import Story from "./components/story/Story";
import Work from "./components/work/Work";

function App() {
  return (
    <Stack
      gap={6}
    >
      <HeroMain />
      <Work />
      <Collection />
      <Story />
    </Stack>
  );
}

export default App;
