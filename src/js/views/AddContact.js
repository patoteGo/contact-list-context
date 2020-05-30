import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "./../store/appContext";
export const AddContact = props => {
	const { store } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const title = () => {
		if (props.location.state) {
			// console.log(store.contacts[props.location.state.id]);
			// const contact = store.contacts[props.location.state.id];
			// setName(contact.name);
			// 	name: contact.name,
			// 	email: contact.email,
			// 	phone: contact.phone,
			// 	address: contact.address
			// });
			return <h1 className="text-center mt-5">Edit contact </h1>;
		} else {
			return <h1 className="text-center mt-5">Add a new contact</h1>;
		}
	};

	useEffect(() => {
		if (props.location.state) {
			const contact = store.contacts[props.location.state.id];
			setName(contact.name);
			setPhone(contact.phone);
			setEmail(contact.email);
			setAddress(contact.address);
			console.log("aui", contact.name);
		}
	}, []);

	return (
		<div className="container">
			<div>
				{title()}

				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={e => setName(e.target.value)}
							value={name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={e => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={e => setPhone(e.target.value)}
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={e => setAddress(e.target.value)}
							value={address}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

AddContact.propTypes = {
	location: PropTypes.object
};
