import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import TVShows from "./components/TVShows";
import Homepage from "./components/Homepage";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />

      <Routes>
        <Route path="/" exact element={<Homepage movieGenre="hobbit" title="Hobbit" />} />
        <Route path="/TVShows" element={<TVShows movieGenre="harry potter" title="Harry Potter" />} />
      </Routes>

      <MyFooter />
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <body xs={12} sm={6} lg={3} className="App">
//       <header>
//         <MyNav />
//       </header>
//       <main>
//         <FilmList movie="harry%20potter" title="Harry Potter - Collection" />
//         <FilmList movie="percy%20jackson" title="Percy Jackson - Collection" />
//         <FilmList movie="Lord%20Rings" title="The Lord of the Rings - Collection" />
//       </main>
//       <footer>
//         <MyFooter />
//       </footer>
//     </body>
//   );
// }
