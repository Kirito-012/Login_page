import {Navigate, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import {useState} from 'react'
import RefreshHandler from './RefreshHandler'

function App() {
	const [isAuthenticated, setisAuthenticated] = useState(false)
	const PrivateRoute = ({element}) => {
		return isAuthenticated ? element : <Navigate to='/login'></Navigate>
	}
	return (
		<div className='App overflow-hidden'>
			<RefreshHandler setisAuthenticated={setisAuthenticated} />
			<Routes>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/signup'
					element={<Signup />}
				/>
				<Route
					path='/home'
					element={<PrivateRoute element={<Home />} />}
				/>
				<Route
					path='/'
					element=<Navigate to='/signup'></Navigate>
				/>
			</Routes>
		</div>
	)
}

export default App
