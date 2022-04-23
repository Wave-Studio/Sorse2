import App from "./pages/index";
import "./app.scss";

WJSRouters.HashRouter.create(
	{
		home: { title: "sorse Docs", component: App },
	}
);