import Autocomplete from "./AutoComplete";
import { autoCompleteData } from "./data.js";

function App() {
  return (
    <div className="App">
      <Autocomplete data={autoCompleteData} />
    </div>
  );
}

export default App;
