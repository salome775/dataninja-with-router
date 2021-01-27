import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUsPage from './components/pages/AboutUsPage/AboutUsPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 480,
      sm: 700,
      md: 1100,
      lg: 1330,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/about' component={AboutUsPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route
            path='*'
            render={() => {
              return <h1>Page Not Found</h1>;
            }}
          />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
