import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  Routes,
} from "react-router-dom";
import Home from "./scenes/Home/Home";
import ItemDetails from "./scenes/ItemDetails/ItemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/global/Navbar";
import WordPressPage from "./components/WordPressPage";

function App() {
  const ScrolToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };
  return (
    <div className="App font-IranSans">
      <Router>
        <Navbar />
        <ScrolToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Item/:itemId" element={<ItemDetails />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="Checkout/success" element={<Confirmation />} />
          {/* صفحات وردپرس */}
          <Route path="aa" element={<WordPressPage />} />
          <Route
            path="a"
            render={(props) => <WordPressPage slug={props.match.params.slug} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
