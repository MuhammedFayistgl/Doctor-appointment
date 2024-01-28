// import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
// style link
import "antd/dist/antd.min.css";
import "rsuite/dist/rsuite.min.css";
import '../src/pages/style.css'
import "./index.css";
import { Suspense } from "react";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<Suspense fallback={<div className="custom-loader"></div>}>
			<ToastProvider>
				<App />
			</ToastProvider>
		</Suspense>
	</Provider>
);

reportWebVitals();
