import './App.css';
import Navbar from './components/Navbar';
import WhetherContainer from './components/WhetherContainer';
import { Row, Col, } from 'react-bootstrap';
import Brand from './components/Brand';

function App() {
	return (
		<>
			<div className='container-fluid'>
				<Row >
					<Col lg={3} className=' p-3 '>
						<Brand />
						<Navbar />
					</Col>
					<Col lg={9} className=' p-3'>
						<WhetherContainer />
					</Col>
				</Row>
			</div>
		</>
	);
}

export default App;
