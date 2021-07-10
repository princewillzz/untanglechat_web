import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/privacy-policy">
						<PrivacyPolicy />
					</Route>
					<Route path="*">
						<h1
							style={{
								marginTop: "10%",
								textAlign: "center",
							}}
						>
							Comming Soon...
						</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
