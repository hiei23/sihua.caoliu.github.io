import React from "react"
import { Route, Switch } from "react-router-dom"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Project} />
      <Route path="/contact" component={Contact} />
    </Switch>
  )
}
export default Routes
