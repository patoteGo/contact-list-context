import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store } = useContext(Context);

	// useEffect(() => {}, []);

	const [state, setState] = useState({
		showModal: false
	});

	// const listContacts = () => {
	// 	// if (store.contacts !== null) {
	// 	console.log("kjhkjlh");
	// 	store.contacts.map((con, index) => {
	// 		return <ContactCard key={index} contact={con} onDelete={() => setState({ showModal: true })} />;
	// 	});
	// 	// }
	// };

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((con, index) => {
							console.log("usuario" + index, con);
							return (
								<ContactCard key={index} contact={con} onDelete={() => setState({ showModal: true })} />
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
