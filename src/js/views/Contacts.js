import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { Context } from "./../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import PropTypes from "prop-types";

export const Contacts = props => {
	const { store } = useContext(Context);

	// useEffect(() => {}, []);

	const [state, setState] = useState({
		showModal: false
	});

	const onEdit = id => {
		props.history.push({
			pathname: "/edit",
			state: { id: id }
		});
		// to={{
		// 	pathname: "/edit"
		// 	// state: { id: "123" }
		// }
		// history.push("/add");
		console.log("edita");
	};

	const onDelete = () => {
		setState({ showModal: true });
	};
	const confirmDelete = () => {
		setState({ showModal: false });
	};
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
							// console.log("usuario" + index, con);
							return (
								<ContactCard key={index} contact={con} id={index} onEdit={onEdit} onDelete={onDelete} />
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onConfirm={confirmDelete} onClose={() => setState({ showModal: false })} />
		</div>
	);
};

Contacts.propTypes = {
	history: PropTypes.object
};
