import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { fetchPlatforms } from 'store/actions/platforms'
import Requests from 'pages/requests/Requests'
import NewRequest from 'pages/newRequest/NewRequest'
import NotFound from 'pages/notFound/NotFound'
import Header from 'components/layout/header/Header'

class App extends Component {
  componentDidMount() {
    this.props.fetchPlatforms()
  }

  render() {
    return (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path='/' exact component={Requests} />
          {/* <Route path='/add' component={AddRequest} /> */}
          <Route path='/add' component={NewRequest} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlatforms: () => dispatch(fetchPlatforms())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
