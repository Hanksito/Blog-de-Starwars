import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planetas: [],
      people: [],
      data: [],
      favoritePeople: [],
      favoritePlanets: [],

    },
    actions: {

      buscarPeopleFav: (item) => {
        const store = getStore();
        return (store.favoritePeople.indexOf(item)>=0)
      },

      buscarPlanetsFav: (item) => {
        const store = getStore();
        return (store.favoritePlanets.indexOf(item)>=0)
      },

      buscarPlanetsFav2: (item) => {
        const store = getStore();
        return false
      },

      deletePeopleFav: (item) => {
				const store = getStore();
				let aux5 = store.favoritePeople.filter((elem)=>elem!==item);
				setStore({ favoritePeople : aux5});
			},

      deletePlanetsFav: (item) => {
				const store = getStore();
				let aux5 = store.favoritePlanets.filter((elem)=>elem!==item);
				setStore({ favoritePlanets : aux5});
			},

      resetSingles: ()=>{
				const store = getStore();
				let aux6 = [];
				setStore({ data : aux6});
			},

      updatePeopleFavs : (item) => {
				const store = getStore();
				if (store.favoritePeople.indexOf(item)==-1) {
					setStore({ favoritePeople : [...store.favoritePeople, item]});
					console.log(store);
				};
			},

      updatePlanetFavs : (item) => {
				const store = getStore();
				if (store.favoritePlanets.indexOf(item)==-1) {
					setStore({ favoritePlanets : [...store.favoritePlanets, item]});
					console.log(store);
				};
			},

      
      // Use getActions to call a function within a fuction
      getid: (url) => {
        fetch(url)
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Los datos no se han podido cargar");
            }
          })
          .then((datos) => {
            let aux = datos.result.properties;
            console.log(aux);
            setStore({ data: aux });
          }).catch((error) => console.log(error));
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
            setStore({ people: aux });
          })
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
