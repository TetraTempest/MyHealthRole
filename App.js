import Navigation from "./src/navigation/Navigation";
import { Provider } from "react-redux";
import store from "./src/components/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
