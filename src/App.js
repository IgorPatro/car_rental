import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyles';
import { theme } from 'theme/mainTheme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components, assets & views
import Home from 'views/Home';
import Cars from 'views/Cars';
import Services from 'views/Services';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cars" component={Cars} />
        <Route path="/services" component={Services} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
