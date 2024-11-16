const BotonRedireccion = ({ url, texto }) => {
	const manejarClick = () => {
	  window.location.href = url;
	};
  
	return (
	  <button onClick={manejarClick}>
		{texto}
	  </button>
	);
  };
  
  const App = () => {
	return (
	  <div>
		<h1>Botón React</h1>
		<BotonRedireccion 
		  url="https://www.google.com" 
		  texto="Ir a Google"          
		/>
	  </div>
	);
  };
  
  // Renderiza el componente 'App' dentro del div con id="root"
  ReactDOM.render(<App />, document.getElementById('root'));

  const template = document.getElementById('cardPropia');
const clone = template.content.cloneNode(true);
document.body.appendChild(clone);