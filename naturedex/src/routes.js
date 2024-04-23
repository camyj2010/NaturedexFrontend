import {createBrowserRouter} from 'react-router-dom';

import App from './App';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import MyEntries from './pages/myEntries/MyEntries';

const routes = createBrowserRouter(
	[
		{
			path: '/',
			element: <MyEntries />
		},
		{
			path: '/register',
			element: <Register />
    },
    {
			path: '/login',
			element: <Login />
		},
		{
			path: '/my_entries',
			element: <MyEntries />
		}
	]
);

export default routes;