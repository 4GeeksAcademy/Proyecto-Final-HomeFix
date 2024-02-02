

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
			idmango: "",
			wallet_id: "",
			username: "",
			secret: "",
			user: {
				id: "",
				email: ""
			},
			products: [],
			provinces: "",
			productsbyuser: [],
			email: "",
			perfildone: false,
			name: "",
			img: "",
			banner: "",
			userbe_id: "",
			datauser:[],
			categories: [],
			datauserprofile: [],
			userProducts: [],
			productDetails: [],

		}, 
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			},

			updateuserbe: async (userbe_id, mangoid, mangoidwallet, first_name, last_name, perfildone) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/update_userbe`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ userbe_id, mangoid, mangoidwallet, first_name, last_name, perfildone })
					});

					const data = await response.json();
					console.log(data);

					setStore({ ...store, user_id: data.user_id });
					localStorage.setItem('perfildone', data.perfildone);
					

				} catch (error) {
					console.error("Error during signup:", error);
				}
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

			completeperfil: async (first_name, last_name, address_line, city, region, postal_code, country, email) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/
					api/create_user`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ first_name, last_name, address_line, city, region, postal_code, country, email })
					});

					const data = await response.json();
					console.log(data);

					setStore({ ...store, user_id: data.user_id });
					localStorage.setItem('idmango', data.user_id);

				} catch (error) {
					console.error("Error during signup:", error);
				}
			},
			crear_wallet: async (user_id) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/create_wallet`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ user_id })
					});

					const data = await response.json();
					console.log(data);

					setStore({ ...store, wallet_id: data.wallet_id });
					localStorage.setItem('wallet_id', data.wallet_id);

				}
				catch (error) {
					console.error("Error during signup:", error);
				}
			},

			walletDetails: async (wallet_id) => {
				const store = getStore();
				console.log(wallet_id);
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/wallet_detail?wallet_id=${wallet_id}`, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					});

					const data = await response.json();
					console.log(data);

					setStore({ ...store, wallet_details: data });

				}
				catch (error) {
					console.error("Error during signup:", error);
				}
			},

			setToken: async (email, password) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/token`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ email, password })
					});
			
					if (!response.ok) {
						const errorData = await response.json();
						throw new Error(errorData.message || 'Error de inicio de sesión');
					}
			
					const data = await response.json();
					setStore({ ...store, token: data.token, email: data.email, userbe_id: data.userbe_id });
					localStorage.setItem('token', data.token);
					localStorage.setItem('userbe_id', data.userbe_id);
					localStorage.setItem('email', data.email);
					localStorage.setItem('name', data.name);
					localStorage.setItem('img', data.img);
					localStorage.setItem('banner', data.banner);
					return { status: response.status, data: data };
				} catch (error) {
					console.error('Error de inicio de sesión:', error);
					throw error;
				}
			},
			


			clearToken: () => {
				const store = getStore();
				setStore({ ...store, token: '' });
				localStorage.setItem('token', '');
				localStorage.setItem('email', '');
				localStorage.setItem('userbe_id', '');
				localStorage.setItem('username', '');
				localStorage.setItem('mangoid', '');
				
			},

			signup: async (email, password) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/signup`, {
						mode: 'cors',
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ email, password })
					});
					const data = await response.json();
					setStore({ ...store, token: data.token, email: data.email });
					localStorage.setItem('token', data.token);
					localStorage.setItem('email', data.email);
					localStorage.setItem('userbe_id', data.userbe_id);


				} catch (error) {
					console.error("Error during signup:", error);
				}
			},
			createProduct: async (name, description, price, images_urls, province, categories) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/products`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${localStorage.token}`
						},
						body: JSON.stringify({ name, description, price, images_urls, province, categories  })
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

			getuser: async (userbe_id) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/user/${userbe_id}`, {
						method: 'GET',
					});

					const data = await response.json();
					console.log(data);

					setStore({ ...store, datauser: data });
					localStorage.setItem('datauser', JSON.stringify(data));

				}
				catch (error) {
					console.error("Error during signup:", error);
				}
			},

			getuserprofile: async (userbe_id) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/user/${userbe_id}`, {
						method: 'GET',
					});

					const data = await response.json();
					console.log(data);

					setStore({ ...store, datauserprofile: data });

				}
				catch (error) {
					console.error("Error during signup:", error);
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

			getallcategories: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/categories`);
					const data = await response.json();

					setStore({ ...store, categories: data });
					localStorage.setItem('categories', JSON.stringify(data));
					

				} catch (error) {
					console.error("Error loading categories from backend:", error);
				}
			},

			getcategory: async (category_id) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/findcategory/${category_id}`, {
						method: 'GET',
					});

					const data = await response.json();
					console.log(data);

					setStore({ ...store, category: data });

				}
				catch (error) {
					console.error("Error during signup:", error);
				}
			},
			getProductsByUser: async () => {
				const store = getStore();
				console.log(store.user.email)
				const response = await fetch(`${process.env.BACKEND_URL}/api/productsbyuser/${localStorage.email}`, {
					method: 'GET',
				})
				const data = await response.json()
				console.log(data)
				setStore({...store, userProducts: data })
				console.log(store.userProducts)
			},

			deleteProduct: async (product_id) => {
				try {
					const token = localStorage.getItem('token');
					const response = await fetch(`${process.env.BACKEND_URL}/api/deleteproduct/${product_id}`, {
						method: 'DELETE',
						headers: {
							'Authorization': `Bearer ${token}`,
							
						}
					});
					if (!response.ok) {
						throw new Error('Failed to delete product');
					}
					
				} catch (error) {
					console.error('Error deleting product:', error);
				}
			},
			getProductById: async (producto_id) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/product/${producto_id}`);
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					const data = await response.json();
					console.log("Detalles del producto recibidos:", data);
					setStore({ ...store, productDetails: data });
					localStorage.setItem('productDetails', JSON.stringify(data));
				} catch (error) {
					console.error("Error loading product details:", error);
				}
			},



			




		}
	}; // Add closing parenthesis here
}
export default getState;
