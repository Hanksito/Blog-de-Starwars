const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {planetas:[],people:[]},
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
        fetch("https://www.swapi.tech/api/planets/")
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("los planetas no se han cargado");
            }
          })
          .then((planetas) => {
            let aux = planetas.results;

            setStore({ planetas: aux });
          });

		fetch("https://www.swapi.tech/api/people")
		  .then((res) =>{
			if(res.ok) {
				return res.json()
			}
			else{
				throw new Error("los personajes no se han podido cargar")
			}
		  }).then(personas =>{
        let aux =personas.results
        setStore({ people: aux });

      })
      },
	  
   
    },
  };
};

export default getState;
