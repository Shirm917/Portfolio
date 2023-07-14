import Navbar from "./layouts/Navbar/Navbar";
import PageRoutes from "./routes/PageRoutes";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <PageRoutes/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
