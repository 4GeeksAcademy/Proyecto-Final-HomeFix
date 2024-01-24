const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			token: "",
			username: "",
			secret: "",
			user: {
				id: null,
				email: ""
			},
			products: [],
			provinces: "",
			productsbyuser: [],

		}, // Add comma here
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			createuser: async (username, secret, email) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/signupchat`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ username, email, secret })
					});
					const data = await response.json();
					console.log(data);


					setStore({ ...store, username: data.username, secret: data.secret, email: data.email });
					localStorage.setItem('username', data.username);
					localStorage.setItem('email', data.email);

				} catch (error) {
					console.error("Error during signup:", error);
				}
			},

			setToken: async (email, password) => {
				const store = getStore();
				const response = await fetch(`${process.env.BACKEND_URL}/api/token`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ email, password })
				});
				const data = await response.json();
				setStore({ ...store, token: data.token });
				localStorage.setItem('token', data.token)
			},



			clearToken: () => {
				const store = getStore();
				setStore({ ...store, token: '' });
				localStorage.setItem('token', '');
			},

			signup: async (email, password) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/signup`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ email, password })
					});
					const data = await response.json();



					setStore({ ...store, token: data.token});
					localStorage.setItem('token', data.token);


				} catch (error) {
					console.error("Error during signup:", error);
				}
			},
			createProduct: async (name, description, price, images_urls, province) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/products`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${store.token}`
						},
						body: JSON.stringify({ name, description, price, images_urls, province })
					});
					const data = await response.json();

					const updatedProducts = [...store.products, data];
					setStore({ ...store, products: updatedProducts });
				} catch (error) {
					console.error("Error during product creation:", error);
				}
			},

			getAllProducts: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/get_all_products`);
					const data = await response.json();

					setStore({ ...store, products: data });

				} catch (error) {
					console.error("Error loading products from backend:", error);
				}
			},
			getAllProvinces: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/provinces`);
					const data = await response.json();

					setStore({ ...store, provinces: data });

				} catch (error) {
					console.error("Error loading provinces from backend:", error);
				}
			},
			getUserProducts: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/productsbyuser`);
					const data = await response.json();

					setStore({ ...store, productsbyuser: data });

				} catch (error) {
					console.error("Error loading provinces from backend:", error);
				}
			},


			getUserProducts: async (email, token) => {
				const store = getStore();
				
				try {
					const url = `${process.env.BACKEND_URL}/api/productsbyuser?email=${encodeURIComponent(email)}`;
			
					const response = await fetch(url, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						}
					});
			
					const data = await response.json();
			
					// Convierte data a una cadena JSON antes de almacenarla en localStorage
					localStorage.setItem('productsbyuser', JSON.stringify(data));
			
					setStore({ ...store, productsbyuser: data });
				} catch (error) {
					console.error("Error loading user products from backend:", error);
				}
			},
			




		}
	}; // Add closing parenthesis here
}
export default getState;
