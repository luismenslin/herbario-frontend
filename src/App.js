import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"

import BookListPage from "./pages/BookListPage"
import BookRegisterPage from "./pages/BookRegisterPage"

import PersonRegisterPage from "./pages/PersonRegisterPage"
import PersonListPage from "./pages/PersonListPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastroLivros" element={<BookRegisterPage/>}/>
        <Route path="/cadastroLivros/:id" element={<BookRegisterPage/>}/>
        <Route path="/listagemLivros" element={<BookListPage/>}/>
        
        <Route path="/cadastroPessoas" element={<PersonRegisterPage/>}/>
        <Route path="/cadastroPessoas/:id" element={<PersonRegisterPage/>}/>
        <Route path="/listagemPessoas" element={<PersonListPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
