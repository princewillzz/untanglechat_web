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
						<div style={{ textAlign: "center" }}>
							
							<h1
								style={{
									marginTop: "10%",
									textAlign: "center",
								}}
							>
								<div className="logo" style={{ cursor: "pointer" }}>
									<p style={{ margin: 0 }}>Get the App</p>
									<a  rel="noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.untangledchat">
										<img src="./logo_with_background.png" alt="logo" />
									</a>
								</div>
							</h1>
						</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
