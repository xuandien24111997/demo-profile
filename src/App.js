import { useEffect } from "react"
import Layout from "App/layouts/Layout";
import history from "ultils/history";
import { Router } from "react-router-dom";
import { create } from "service/client/visisted";
import axios from "axios";

function App() {
  useEffect(() => {
    (async () => {
      try {
        const visit = await localStorage.getItem("visited")
        if (!visit) {
          const res = await axios.get('https://geolocation-db.com/json/')
          await create({ ip: res.data.IPv4 })
          localStorage.setItem("visited", "1")
        }
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])
  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Layout />
    </Router>
  );
}
export default App;
