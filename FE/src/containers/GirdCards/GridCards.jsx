import React, {useEffect, useState} from 'react'
import { Col } from 'antd'

function GridCards(props) {

  const [images, setImages] = useState([]);
  
  // columm의 size가 24이므로 lg일 땐 4개, md일 땐 3개, xs일 땐 1개만 보인다
  
  if(props.landingPage){
    return (
    <Col lg={6} md={8} xs={24}> 
    
      <div style={{position: 'relative'}}>
        <a href={`/movie/${props.movieId}`}>
          <img style={{width:'100%', height: '320px'}} src="././images" alt={props.movieName} />
        </a>
      </div>
    </Col>
    )
  }
  else{
    return(
      <Col lg={6} md={8} xs={24}> 
    
        <div style={{position: 'relative'}}>
            <img style={{width:'100%', height: '320px'}} src={props.image} alt={props.characterName} />

        </div>
      </Col>
    )
  }
  
}

export default GridCards
