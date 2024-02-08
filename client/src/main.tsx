// import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Store} from "./redux/store";
import './input.css'
// style link
import "antd/dist/antd.min.css";
import "rsuite/dist/rsuite.min.css";
import "../src/pages/style.css";
import "./index.css";
import { Suspense } from "react";
import { ToastProvider } from "react-toast-notifications";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={Store}>
        <Suspense fallback={<div className="custom-loader"></div>}>
            <ToastProvider>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </ToastProvider>
        </Suspense>
    </Provider>
);

reportWebVitals();
