import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: { planetas: [], people: [], singlePlanet: [], singlePeople: [],data:[] },
    actions: {
      // Use getActions to call a function within a fuction
      getid: (id,datos) =>{
        fetch(`https://swapi.dev/api/${datos}/${id}/`)
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("los planetas  no se han podido cargar");
            }
          })
          .then((datos) => {
            setStore({ data: datos.result.properties });
      })
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
              throw new Error("los planetas  no se han podido cargar");
            }
          })
          .then((planetas) => {
            let aux = planetas.results;

            aux.map((element,i) => {
              fetch(`https://swapi.dev/api/planets/${i}/`)
                .then(function (response) {
                  if (!response.ok) {
                    throw Error("no se han podido cargar los personajes");
                  }
                  return response.json();
                })
                .then((resjson) => {
                  setStore({
                    singlePlanet: [...getStore().singlePlanet, resjson],
                  });
                });
                
            });

            setStore({ planetas: aux });
          })
          .catch((error) => console.log(error));

        fetch("https://www.swapi.tech/api/people")
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("los personajes no se han podido cargar");
            }
          })
          .then((personas) => {
            let aux = personas.results;
            aux.map((element) => {
              fetch(`https://swapi.dev/api/people/${element.uid}/`)
                .then(function (response) {
                  if (!response.ok) {
                    throw Error("no se han podido cargar los personajes");
                  }
                  return response.json();
                })
                .then((resjson) => {
                  setStore({
                    singlePeople: [...getStore().singlePeople, resjson],
                  });
                });
            });

            setStore({ people: aux });
          })
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
