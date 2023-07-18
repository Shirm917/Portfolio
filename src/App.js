import Navbar from "./temp_layouts/Navbar/Navbar";
import PageRoutes from "./routes/PageRoutes";
import Footer from "./temp_layouts/Footer/Footer";
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
