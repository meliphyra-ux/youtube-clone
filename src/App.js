import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import { Feed, ChannelDetail, Header, SearchFeed, VideoDetail} from './components'
import { useState } from 'react';

const App = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  return (
    <BrowserRouter>
    <Box>
      <Header isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen}/>
      <Routes>
        <Route path="/" element={<Feed isNavbarOpen={isNavbarOpen}/>} />
        <Route path="/video/:id" element={<VideoDetail />}/>
        <Route path="/channel/:id" element={<ChannelDetail />}/>
        <Route path="/search/:searchTerm" element={<SearchFeed />}/>
      </Routes>
    </Box>
  </BrowserRouter>
  )
}
    
  


export default App;
