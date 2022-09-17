import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import { Feed, ChannelDetail, Header, SearchFeed, VideoDetail} from './components'

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />}/>
        <Route path="/channel/:id" element={<ChannelDetail />}/>
        <Route path="/search/:searchTerm" element={<SearchFeed />}/>
      </Routes>
    </Box>
  </BrowserRouter>
  )
    
  


export default App;
