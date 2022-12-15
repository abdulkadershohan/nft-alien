import { Stack } from "@mui/system";
import './App.scss';
function App() {
  return (
    <Stack
      gap={6}
    >
      <div class="header">CSS-MASK BUTTON HOVER ANIMATION
        ( Experimental )</div>
      <div class="button-container-1">
        <span class="mas">MASK1</span>
        <button id='work' type="button" name="Hover">MASK1</button>
      </div>

      <div class="button-container-2">
        <span class="mas">MASK2</span>
        <button type="button" name="Hover">MASK2</button>
      </div>

      <div class="button-container-3">
        <span class="mas">MASK3</span>
        <button type="button" name="Hover">MASK3</button>
      </div>

      <div class="footer">Inspired by <a href="https://tympanus.net/codrops/2016/09/29/transition-effect-with-css-masks/">this</a> codrops article</div>


    </Stack>
  );
}

export default App;
