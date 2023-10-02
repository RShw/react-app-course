import React from "react";
import { styles } from "./styles"
import ListImage from "./components/ListImage";
import FormImage from "./components/FormImage";
import ImageProvider from "./hooks/ImageProvider";
import Counter from "./components/Counter";

//Import for Basix Example of useContext
// import UserProvider from "./ContextProviderExample/hooks/UserContext";
// import DisplayUser from "./ContextProviderExample/components/DisplayUser";

function App() {

  return (
    <div style={styles.container}>
      {/* <Counter/> */}
      <ImageProvider>
        <FormImage/>
        <ListImage/>
      </ImageProvider>

      {/* Example of basic Context Provider */}
      {/* <UserProvider>
        <DisplayUser/>
      </UserProvider> */}
    </div>
  );
}

export default App;
