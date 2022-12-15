import { Stack } from "@mui/system";
import Collection from "./components/collection/Collection";
import HeroMain from "./components/hero/HeroMain";
import Work from "./components/work/Work";

function App() {
  return (
    <Stack
      gap={6}
    >
      <HeroMain />
      <Work />
      <Collection />
    </Stack>
  );
}

export default App;
