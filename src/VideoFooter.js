import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import Ticker from 'react-ticker';
import Marquee from 'react-fast-marquee';


function VideoFooter({channel, description, song}) {
  return (
    <div className='videoFooter'>
    <div className="videoFooter__text">
     <h3>@{channel}</h3>
     <p>{description}</p>
     <div className="videoFooter__ticker">
     <MusicNoteIcon className='videoFooter__icon'/>
     
     <Marquee gradientColor className='tickerr' speed={70}    >
        <p >{song}</p>
     </Marquee>
     {/* <Ticker mode='smooth'>
     {({index}) => (
        <>
         <p>SOOOOOOOOONG GOOON</p>
        </>
     )}
     </Ticker> */}
     
     </div>
    
    </div>
    <img className='videoFooter__record' src="https://pngimg.com/uploads/compact_disc/compact_disc_PNG8745.png" alt="" />
    </div>
  )
}

export default VideoFooter