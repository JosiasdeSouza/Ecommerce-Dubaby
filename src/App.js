import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ShopProvider } from './Context/ShopContext'; 
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import NavBar from './Components/NavBar/NavBar';
import Login from './Pages/LoginSignup'; // Assuming LoginSignup is correctly named and exported
import Product from './Pages/Product';
import CartItems from './Components/CartItems/CartItems';
import './App.css';
import './Components/Item/Item.css';

const App = () => {
    return (
        <ShopProvider>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Shop} />
                    <Route path="/category/:category" component={ShopCategory} />
                    <Route path="/clothes" render={() => <ShopCategory category="baby clothes" />} />
                    <Route path="/toys" render={() => <ShopCategory category="baby toys" />} />
                    <Route path="/jewelry" render={() => <ShopCategory category="baby jewelry" />} />
                    <Route path="/electronics" render={() => <ShopCategory category="baby electronics" />} />
                    <Route path="/products/:ProductId" component={Product} />
                    <Route path="/login" component={Login} />
                    <Route path="/cart" component={CartItems} />
                </Switch>
            </BrowserRouter>
        </ShopProvider>
    );
};

export default App;
