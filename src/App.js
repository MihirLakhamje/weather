import './App.css';
import { Row, Col, } from 'react-bootstrap';
import { ThemeProvider } from 'react-bootstrap';
import Dashboard from './components/Dashboard'
import { Link } from 'react-router-dom';
import Brandlogo from './assets/logo-48.svg'

function App() {
	return (
		<ThemeProvider>
			<div className='container-fluid'>
				<Row >
					<Col lg={3} className='p-3'>

						<div className='d-flex align-items-center gap-3'>
							<Link to="/weather/" className='link'>
								<img src={Brandlogo} alt="Brand logo" />
							</Link>

							<h1 className='fs-3 m-0'><Link to='/weather/' className='link'>Weather App</Link></h1>
						</div>
						<ul className="list-group mt-3 border-0">
							<li className='list-group-item border-0'>
								<div class="mb-3">
									<input type="text" class="form-control" id="searchCity" placeholder='Search for city'/>
								</div>
							</li>

						</ul>
					</Col>
					<Col lg={9} className=' p-3'>
						<Dashboard />
					</Col>
				</Row>
			</div>
		</ThemeProvider>
	);
}

export default App;
