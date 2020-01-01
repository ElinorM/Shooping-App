import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
const Home = lazy(() => import("ui/Home"));
const ShoppingCart = lazy(() => import("ui/ShoppingCart"));
const OrderHistory = lazy(() => import("ui/OrderHistory"));
const PageNotFound = lazy(() => import("ui/PageNotFound"));

function Spinner() {
  return <div>Loading...</div>;
}

export function MainView() {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shop">
          <ShoppingCart />
        </Route>
        <Route path="/history">
          <OrderHistory />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}
