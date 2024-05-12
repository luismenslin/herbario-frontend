import BookListPage from "./pages/BookListPage";
import NavBar from "./components/NavBar"
import BookTable from "./components/BookTable"
import BookForm from "./components/BookForm"

function App() {
  return (
    <section>
      <NavBar/>
      <BookTable/>
      {/*<BookForm/>*/}
    </section>
  )
}

export default App;
