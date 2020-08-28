import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { StockPage } from "../views/stockPage";

export const BuyModal = props => {
	const { actions, store } = useContext(Context);
	const [state, setState] = useState({
		shares: 0,
		stockname: props.stock,
		stockprice: 0,
		totalPurchase: 0
	});
	const { show } = props;
	useEffect(
		() => {
			console.log("state changed!");
			setState({ ...state, totalPurchase: state.shares * props.price });
		},
		[state]
	);
	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	if (state.username !== "" && state.email !== "" && state.password !== "") {
	// 		actions.createUser(state.username, state.email, state.password);
	// 		setState({
	// 			username: "",
	// 			email: "",
	// 			password: ""
	// 		});
	// 		props.hideModal();
	// 	}
	// };

	return (
		<div className={show ? "h-view" : "modal"} tabIndex="-1" role="dialog">
			<div className="modal-dialog" role="document">
				<div className="signupmodal modal-content">
					<div className="signupmodalheader modal-header">
						<h5 className="modal-title">Buy {props.stock}</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
							onClick={() => props.hideModal()}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form
					// onSubmit={handleSubmit}
					>
						<div className="modal-body">
							<div className="form-row">
								<div className="usernamesignup form-group ">
									<label htmlFor="inputFirstName">Shares</label>
									<input
										onChange={event => {
											setState({ ...state, shares: event.target.value });
										}}
										value={state.shares}
										type="text"
										className="input"
										id="inputFirstName"
										placeholder="Number of shares"
										required
									/>
								</div>
								<div className="emailsignup form-group ">
									<label htmlFor="inputEmail">Price</label>
									<h3>{props.price}</h3>
								</div>
								<div className="passwordsignup form-group ">
									<label htmlFor="inputPassword4">Total purchase</label>
									<h3>{state.totalPurchase}</h3>
								</div>
							</div>
						</div>
						<div className="signupmodalfooter modal-footer">
							<button type="submit" className="createaccountbutton btn btn-secondary">
								Buy Shares
							</button>
							<button
								type="button"
								href="/home"
								className="cancelbutton btn btn-secondary"
								onClick={() => props.hideModal()}
								data-dismiss="modal">
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

BuyModal.propTypes = {
	show: PropTypes.bool,
	hideModal: PropTypes.func,
	stock: PropTypes.string,
	price: PropTypes.number
};
