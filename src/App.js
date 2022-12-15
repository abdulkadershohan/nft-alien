import { Stack } from "@mui/system";
import HeroMain from "./components/hero/HeroMain";
import Work from "./components/work/Work";

function App() {
  return (
    <Stack
      gap={6}
    >
      <HeroMain />
      <Work />
    </Stack>
  );
}

export default App;
