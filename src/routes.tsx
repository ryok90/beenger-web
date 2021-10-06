import { Route, Switch } from 'react-router'
import { Home } from './screens/Home'
import { Signup } from './screens/Signup'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path={RoutesEnum.signup} component={Signup} />
    </Switch>
  )
}

export enum RoutesEnum {
  signup = '/signup'
}
