import React from 'react'
import Row from '../Row/Row'
import requests from "../../../utils/request"; 
function RowList() {
  return (
    <div>
        <Row
        fetchUrl={requests.fetchNetflixOriginals}
        title="Netflix Originals"
        isLargeRow={true}
        />
        <Row
        fetchUrl={requests.fetchTrending}
        title="Trending Now"
        
        />
        <Row
        fetchUrl={requests.fetchTopRatedMovies}
        title="Top Rated"
        
        />
        <Row
        fetchUrl={requests.fetchActionMovies}
        title="Action Movies"
        
        />
        <Row
        fetchUrl={requests.fetchComedyMovies}
        title="Comedy Movies"
        
        />
        <Row
        fetchUrl={requests.fetchHorrorMovies}
        title="Horror Movies"
        
        />
        <Row
        fetchUrl={requests.fetchRomanceMovies}
        title="Romance Movies"
        
        />
        <Row
        fetchUrl={requests.fetchDocumentaries}
        title=" Documentaries"
        
        />
        <Row
        fetchUrl={requests.fetchTvShow}
        title=" TV Shows"
        
        />
        
        
    </div>
  )
}

export default RowList
