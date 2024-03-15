import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface IRouterProps {
}

function Router({  }: IRouterProps) {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/:coinId`}>
        <Coin/>
      </Route>

      <Route path={`${process.env.PUBLIC_URL}/`}>
        <Coins />
      </Route>
    </Switch>
  </BrowserRouter>
}

export default Router;