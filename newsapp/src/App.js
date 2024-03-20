import "./App.css"
import LoadingBar from "react-top-loading-bar"
import React, { useState } from "react"
import Navbar from "./components/Navbar"
import News from "./components/News"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//export default class App extends Component
const App = () => {
  const pageSize = 5
  //const apikey = process.env.REACT_APP_NEWS_API
  const apikey = "8380882b426e474782bdfa1eb4ecc97f"
  const [progress, setProgress] = useState(0)

  // state = {
  //   progress: 0,
  // }
  // setProgress = progress => {
  //   setState({ progress: progress })
  // }

  return (
    <div>
      <Router>
        <Navbar />

        <LoadingBar height={3} color="#f11946" progress={progress} />

        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />} />

          <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />} />

          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />

          <Route path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />} />

          <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" />} />

          <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />} />

          <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />} />

          <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
