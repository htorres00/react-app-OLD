import "./App.css";
import UserForm from "./components/UserForm";
import axios from "axios";
import Constants from "./ConstantsDev";
import { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const [bfusers, setBFUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  var apiLoading = false;
  useEffect(() => {
    localStorage.removeItem("bfusers");
    if (bfusers.length == 0) {
      getUserList();
    }
  }, []);

  const getUserList = () => {
    if (apiLoading) {
      return;
    }
    apiLoading = true;
    const url = Constants.API_URL + "?action=get_bf_users";

    const options = {
      method: "GET",
      url,
    };
    axios(options)
      .then((res) => {
        //console.log(res.data.user);
        setLoader(false);
        apiLoading = false;
        setBFUsers(res.data.user);
        localStorage.setItem("bfusers", JSON.stringify(res.data.user));
      })
      .catch((error) => {
        setLoader(false);
        console.log("getUserList", error);
      });
  };

  return (
    <div className="App">
      <div className="back"></div>
      {loader ? <Loader /> : <UserForm bfusers={bfusers} />}
    </div>
  );
}

export default App;