const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			contacts: [
				// Ejemplo de datos estáticos
				{ id: 1, name: "John Doe", email: "john@example.com", phone: "123456789" },
				{ id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987654321" }
			]
		},
		actions: {
			// Añadir contacto
			addContact: (contact) => {
				const store = getStore();
				setStore({ contacts: [...store.contacts, { id: Date.now(), ...contact }] });
			},
			// Eliminar contacto
			deleteContact: (id) => {
				const store = getStore();
				setStore({ contacts: store.contacts.filter(contact => contact.id !== id) });
			}
		}
	};
};

export default getState;
