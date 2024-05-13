import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BookListPage from "./pages/BookListPage"
import BookRegisterPage from "./pages/BookRegisterPage/BookRegisterPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastroLivros" element={<BookRegisterPage/>}/>
        <Route path="/cadastroLivros/:id" element={<BookRegisterPage/>}/>
        <Route path="/listagemLivros" element={<BookListPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
