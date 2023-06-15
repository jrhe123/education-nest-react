import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ApolloProvider } from "@apollo/client";
import { client } from "./utils/apollo";

// ant design: https://mobile.ant.design/guide/quick-start
import { ConfigProvider } from "antd-mobile";
import enUS from "antd-mobile/es/locales/en-US";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ConfigProvider locale={enUS}>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</ConfigProvider>
);
