import "./App.css";
import { atom, selector } from "recoil";
import TextInput from "./components/TextInput";
import CharacterCount from "./components/CharacterCount";

export const textState = atom({
  key: "textState",
  default: "",
});

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const test = get(textState);

    return test.length;
  },
});

function App() {
  return (
    <div className="App">
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default App;
