import Navbar from "./Layouts/Navbar/Navbar";
import PageRoutes from "./routes/PageRoutes";
import Footer from "./Layouts/Footer/Footer";
import "./App.css";

function App() {
  return (
    <section className="container">
      <Navbar />
      <main>
        <PageRoutes />
      </main>
      <Footer />
    </section>
  );
}

export default App;
