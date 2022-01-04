import { Route, Switch } from 'react-router'
import { Home } from './screens/Home'
import { SignUp } from './screens/SignUp'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path={RoutesEnum.signUp} component={SignUp} />
    </Switch>
  )
}

export enum RoutesEnum {
  signUp = '/sign-up'
}
