// import React from "react";
import "antd/dist/antd.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
// style link
import "rsuite/dist/rsuite.min.css";
import "./index.css";
import { Suspense } from "react";
import { ToastProvider } from "react-toast-notifications";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<Suspense fallback={<div className="custom-loader"></div>}>
			<ToastProvider>
				<App />
			</ToastProvider>
		</Suspense>
	</Provider>
);

reportWebVitals();
