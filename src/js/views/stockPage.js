import React, { useEffect, useState } from "react";
import PropsTypes from "prop-types";
import { Navbar } from "../component/navbar";
import { Header } from "../component/header";
import { BuyModal } from "../component/buyModal";

//create your first component
export class StockPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stocks: null,
			show: false
		};
	}

	componentDidMount() {
		fetch("https://financialmodelingprep.com/api/v3/stock/list?apikey=8d45cc9cb998a6d3f13da7b13700f503")
			.then(res => res.json())
			.then(results => this.setState({ stocks: results }));
	}

	showModal = () => {
		this.setState({
			show: true
		});
	};

	closeModal = () => {
		this.setState({
			show: false
		});
	};

	render() {
		if (!this.state.stocks) return "Loading, please stand by...";
		else {
			const stockList = this.state.stocks.map((stock, index) => {
				return (
					<tr key={index}>
						<td>
							<button
								className="btn btn-success rounded my-1"
								onClick={() => {
									this.showModal();
								}}>
								Buy
							</button>
							<button className="btn btn-warning rounded my-1">Sell</button>
						</td>
						<td scope="row">{stock.symbol}</td>
						<td>{stock.name}</td>
						<td>{stock.price}</td>
					</tr>
				);
			});

			return (
				<div>
					<Header />
					<Navbar />
					<BuyModal
						show={this.state.show}
						stock={stock.name}
						price={stock.price}
						hideModal={() => this.closeModal()}
					/>
					<div className="text-center mt-5">
						<table className="table table-striped">
							<thead>
								<tr>
									<th scope="col">buy or sell</th>
									<th scope="col">Symbol</th>
									<th scope="col">Name</th>
									<th scope="col">Price</th>
								</tr>
							</thead>
							<tbody>{stockList}</tbody>
						</table>
					</div>
				</div>
			);
		}
	}
}

StockPage.propTypes = {
	history: PropsTypes.object
};
