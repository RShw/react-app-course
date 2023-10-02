import React from "react";
import { styles } from "./styles"
import ListImage from "./components/ListImage";
import FormImage from "./components/FormImage";
import ImageProvider from "./hooks/ImageProvider";
// import Counter from "./components/Counter";

//Import for Basix Example of useContext
import DisplayUser from "./ContextProviderExample/components/DisplayUser";
import { Provider } from "react-redux";
import { store } from "./ContextProviderExample/store.js";

function App() {

  return (
    <div style={styles.container}>
      {/* <Counter/> */}
      <ImageProvider>
        <FormImage/>
        <ListImage/>
      </ImageProvider>

      {/* Example of basic Context Provider */}
      <Provider store={store}>
          <DisplayUser/>
      </Provider>
    </div>
  );
}

export default App;
