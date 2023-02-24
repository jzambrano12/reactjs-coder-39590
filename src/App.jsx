import NavBar from "./components/NavBar";

function App() {
  // function mostrarAlerta() {
  //   alert("Esto se esta ejecutando en el componente PAAADRE");
  // }

  return (
    <div>
      {/* <Title>Hola clase</Title>
      <Description alerta={mostrarAlerta} /> */}

      <NavBar />
    </div>
  );
}

// function Title({ children }) {
//   return <h1>{children}</h1>;
// }

// function Description({ alerta }) {
//   return (
//     <div>
//       <p>Este es nuestro primer encuentro y los veo nerviosos xD</p>
//       <button onClick={alerta}>Enviar alerta</button>
//     </div>
//   );
// }

export default App;
