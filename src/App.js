import { styles } from "./styles"

function App() {

  const hello = "Hello"
  const number = 3

  const object = {
    firstName: "Marcel",
    lastName: "Patoulatchi",
  }

  const array = [
    {
      user1: object
    },
    {
      placeholder1: "placeholder1",
      placeholder2: 5,
    }
  ]

  return (
    <div style={styles.container}>
        <p style={styles.text}>{hello} {array[0].user1.firstName} {array[0].user1.lastName} you are our {number} visitor of the day</p>
    </div>
  );
}

export default App;
