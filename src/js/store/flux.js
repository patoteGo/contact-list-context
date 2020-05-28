const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [
				{
					id: 1,
					name: "Mike Anamendolla",
					address: "5842 Hillcrest Rd",
					phone: "(870) 288-4149",
					email: "mike.ana@example.com"
				},
				{
					name: "Mike 2",
					address: "5842 Hillcrest Rd",
					phone: "(870) 288-4149",
					email: "mike.ana@example.com"
				}
			]

			//Your data structures, A.K.A Entities
		},
		actions: {
			saveContact: () => {},
			deleteContact: () => {},
			updateContact: () => {},
			loadList: contacts => {
				// setStore({});
				console.log("getstore", getStore());

				// const data = getStore.contacts;
				// setStore({ contacts: contacts });
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
