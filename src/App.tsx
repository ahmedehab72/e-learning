import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Index from "./pages/Index"
import { useEffect, useState } from "react"
import NotFound from "./pages/NotFound"
import Loader from "./pages/Loading"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }
  return (
    <ThemeProvider defaultTheme="light" storageKey="nexusapp-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>


  )
}

export default App