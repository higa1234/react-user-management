import {memo, type FC} from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "@/components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "@/components/pages/Page404";
import { HeaderLayout } from "@/components/templetes/HeaderLayout"
import { LoginUserProvider } from "@/providers/LoginUserProvider";

export const Router: FC = memo(() => {
    return (
        <Switch>
            <LoginUserProvider>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/home" render={({ match: {url} }) => 
                <Switch>
                    {HomeRoutes.map((route) => (
                        <Route
                            key={route.path}
                            exact={route.exact}
                            path={`${url}${route.path}`}
                        >
                        <HeaderLayout> {route.children} </HeaderLayout>
                        </Route>
                    ))}
                </Switch>
            }>
            </Route>
            </LoginUserProvider>
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
}); 