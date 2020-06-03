import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import TodoDeatails from './components/todos/TodoDeatails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateTodo from './components/todos/CreateTodo';

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Navbar></Navbar>
				<Switch>
					<Route exact path='/' component={Dashboard}></Route>
					<Route path='/todo/:id' component={TodoDeatails}></Route>
					<Route path='/signin' component={SignIn}></Route>
					<Route path='/signup' component={SignUp}></Route>
					<Route path='/create' component={CreateTodo}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
