import './App.css';
import { Row, Col, } from 'react-bootstrap';
import Dashboard from './components/Dashboard'
import { Link } from 'react-router-dom';
import Brandlogo from './assets/logo-48.svg'
import React from 'react';
import { getLegend, getIcons } from './api/iconweather';

function App() {
	return (
		<div className='container-fluid'>
			<div className='d-flex align-items-center gap-3 my-3'>
				<Link to="/weather/" className='link'>
					<img src={Brandlogo} alt="Brand logo" />
				</Link>

				<h1 className='m-0'><Link to='/weather/' className='link nav-link'>Weather App</Link></h1>
			</div>
			<Row >
				<Col lg={9} className=' p-2'>
					<Dashboard />
				</Col>
				<Col lg={3} className='p-3'>
					<div>
						<h2>Legends</h2>
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Icons</th>
									<th scope="col">Description</th>
								</tr>
							</thead>
							<tbody>
								{
									getLegend && getLegend.map((items, index) => {
										return <React.Fragment key={index}>
											<tr>
												<th scope="row">{index + 1}</th>
												<td><i className={items.icon}></i></td>
												<td>{items.name}</td>
											</tr>
										</React.Fragment>

									})

								}
							</tbody>
						</table>
						<table className="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">weather</th>
									<th scope="col">Description</th>
								</tr>
							</thead>
							<tbody>
								{
									getIcons && getIcons.map((items, index) => {
										return <React.Fragment key={index}>
											<tr>
												<th scope="row">{index + 1}</th>
												<td className='p-0'><img className='small-icon' src={items.wIcon} alt="w" /></td>
												<td>{items.name}</td>
											</tr>
										</React.Fragment>

									})

								}
							</tbody>
						</table>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default App;
