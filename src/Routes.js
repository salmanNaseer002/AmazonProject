import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import Seller from './user/Seller';
import AdminRoute from './auth/AdminRoute';
import SellerRoute from './auth/SellerRoute';
import AdminDashboard from './user/AdminDashboard';
import Buyer from './user/Buyer';
import Selling from './user/Selling';
import SellerDashboard from './user/SellerDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Shop from './core/Shop';
import Product from './core/Product';
import WishList from './core/WishList';
import AlphaDnD from './core/AlphaDnD';
import Review from './core/ProductReview';
import Cart from './core/Cart';
import Orders from './admin/Orders';
import SellerOrders from './admin/SellerOrders';
import AdminOrders from './admin/AdminOrders';
import Profile from './user/Profile';
import BecomeSeller from './user/BecomeSeller';
import ManageProducts from './admin/ManageProducts';
import ManageProductsAdmin from './admin/ManageProductsAdmin';
import Sales from './admin/Sales';
import RemoveSales from './admin/RemoveSales';
import ManageProductsSeller from './admin/ManageProductsSeller';
import ManageCategories from './admin/ManageCategories';
import ManageUsers from './admin/ManageUsers';
import ManageSellers from './admin/ManageSellers';
import UpdateProduct from './admin/UpdateProduct';
import UpdateSellerProduct from './admin/UpdateSellerProduct';
import UpdateCategory from './admin/updateCategory';
import UserProfile from './admin/UserProfile';
import SellerProfile from './admin/SellerProfile';
import ViewAllProducts from './admin/ViewAllProducts';
//footer routes
import About from './footer/About';
import Terms from './footer/Terms';
import Careers from './footer/Careers';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/reviews/:productId" exact component={Review}/>
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <PrivateRoute path="/seller/dashboard" exact component={Seller} />
                <PrivateRoute path="/user/list/wish" exact component={WishList} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <SellerRoute path = "/seller_user/dashboard" exact component={SellerDashboard}/>
                <SellerRoute path = "/switchToBuyer/:userId" exact component={Buyer}/>
                <SellerRoute path = "/switchToSeller/:userId" exact component={Selling}/>
                <AdminRoute path="/create/category" exact component={AddCategory} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
                <SellerRoute path="/create/productseller" exact component={AddProduct} />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/cart" exact component={Cart} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <SellerRoute path="/seller/orders" exact component={SellerOrders} />
                <AdminRoute path="/only/admin/orders" exact component={AdminOrders} />
                <PrivateRoute path="/profile/:userId" exact component={Profile} />
                <PrivateRoute path="/becomeSeller/:userId" exact component={BecomeSeller} />
                <PrivateRoute path="/admin/products" exact component={ManageProducts} />
                <PrivateRoute path="/only/admin/products" exact component={ManageProductsAdmin} />
                <PrivateRoute path="/admin/sales" exact component={Sales} />
                <PrivateRoute path="/admin/remove/sales" exact component={RemoveSales} />
                <PrivateRoute path="/seller/products" exact component={ManageProductsSeller} />
                <PrivateRoute path="/admin/categories" exact component={ManageCategories} />
                <PrivateRoute path="/admin/users" exact component={ManageUsers} />
                <SellerRoute path="/view/products" exact component={ViewAllProducts}/>
                <PrivateRoute path="/admin/sellers" exact component={ManageSellers} />
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
                <SellerRoute path="/seller/product/update/:productId" exact component={UpdateSellerProduct} />
                <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory} />
                <AdminRoute path="/admin/user/profile/:userId" exact component={UserProfile} />
                <AdminRoute path="/admin/seller/profile/:userId" exact component={SellerProfile} />
                <Route path="/alphaDnD"  component={AlphaDnD}  />
                {/* Footer Routes */}
                <Route path="/about" component={About} />
                <Route path="/terms" component={Terms} />
                <Route path="/careers" component={Careers} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;