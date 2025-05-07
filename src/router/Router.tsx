import {memo, type FC} from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "@/components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/home" render={({ match: {url} }) => {
                return (
                    <Switch>
                        {HomeRoutes.map((route: any)=>{route.exact})}
                </Switch>)
            }}>
            </Route>
        </Switch>
    )
}); 