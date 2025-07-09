import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import { Button } from "./components/ui/button";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full flex gap-4 p-4 justify-center border-b mb-8">
          <Button asChild variant="outline">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/about">About</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/post">Post</Link>
          </Button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
