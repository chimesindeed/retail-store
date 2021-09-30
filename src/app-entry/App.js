import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../Styles.css'
import {Welcome} from './route-components/Welcome'
import {About} from './route-components/About'
import {DiscountsLayout} from './route-components/DiscountsLayout'
export const App = () => {

    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={Welcome}/>
            <Route path='/about' component={About}/>
            <Route path='/discounts' component={DiscountsLayout}/>
          </Switch>
        </div>
      </Router>
    )


}