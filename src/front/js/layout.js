import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";

import { Contacts } from "./views/contacts.js";
import { NewContact } from "./views/newContact.js";
import { Edit } from "./views/edit.js";
import injectContext from "./store/appContext.js";

import { Footer } from "./component/footer.js";

//create your first component
const Layout = () => {

	return (
		<div>
			<BrowserRouter>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Contacts />} />
						<Route path="/add-contact" element={<NewContact />} />
						<Route path="/edit-contact/:id" element={<Edit />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
