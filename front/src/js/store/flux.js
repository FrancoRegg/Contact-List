const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {

			//Trae los contactos y los guarda en el store
			getContact: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/mis_cojones_33")
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					const data = await response.json()
					setStore({ contacts: data })
				} catch (error) {
					console.log(error);
				}

			},
			//Elimina un contacto segun su id
			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: 'DELETE',
						headers: { "Content-Type": "application/json" }
					})
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					setStore((prevStore) => ({
						...prevStore,
						contacts: prevStore.contacts.filter((contact) => contact.id !== id),
					}));
				}
				catch (error) {
					console.log(error);
				}
			},
			//Añadir nuevo contacto
			addContact: async (contact) => {
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(contact)
					})
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					const data = await response.json()
					setStore({ contacts: [...store.contacts, data] }) //Agrego el nuevo contacto al estado local 
				}
				catch (error) {
					console.log(error);
				}
			},
			
		}
	};
};

export default getState;
