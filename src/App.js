import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import OrderDetails from './Pages/OrderDetails/OrderDetails';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Products from './Pages/Products/Products';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Pay from './Pages/Dashboard/Pay/Pay';
import Review from './Pages/Dashboard/Review/Review';
import AdminRoute from './AdminRoute/AdminRoute';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import MakeAdmin from './Pages/Dashboard/MadeAdmin/MakeAdmin';
import DashNotFound from './Pages/Dashboard/DashNotFound/DashNotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home></Home>}>

            </Route>
            <Route path="/home" element={<Home></Home>}>

            </Route>
            <Route exact path="/products" element={<Products></Products>}>

            </Route>
            <Route path="/aboutUs" element={<AboutUs></AboutUs>}>

            </Route>
            <Route path="/login" element={<Login></Login>}>

            </Route>
            <Route path="/register" element={<Register></Register>}>

            </Route>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
              <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}>

              </Route>
              <Route path={`/dashboard/myOrders`} element={<MyOrders></MyOrders>}>

              </Route>
              <Route path={`/dashboard/review`} element={<Review></Review>}>

              </Route>
              <Route path={`/dashboard/pay`} element={<Pay></Pay>}>

              </Route>
              <Route path={`/dashboard/manageAllOrders`} element={<AdminRoute><ManageAllOrders></ManageAllOrders></AdminRoute>}>

              </Route>
              <Route path={`/dashboard/manageProducts`} element={<AdminRoute><ManageProducts></ManageProducts></AdminRoute>}>

              </Route>
              <Route path={`/dashboard/addProduct`} element={<AdminRoute><AddProduct></AddProduct></AdminRoute>}>

              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}>

              </Route>
              <Route path={`/dashboard/*`} element={<DashNotFound></DashNotFound>}>

              </Route>
            </Route>
            <Route path="/order/:orderId" element={<PrivateRoute><OrderDetails></OrderDetails></PrivateRoute>}>

            </Route>
            <Route path="*" element={<NotFound></NotFound>}>

            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
