
const AlbumCover = () => {
    return (
        <h1>IMG</h1>
    )
}

const CurrentSong = () => {
    return (
        <h1>Song</h1>
    )
}

const MainPlyer = () => {
    return (
        <h1>Player</h1>
    )
}

const MainControls = () => {
    return (
        <h1>Controls</h1>
    )
}

export default function Player() {
    const albumCover = {}
    const songTitle = {}
    const songArtist = {}

    return (
        <div className="player">
           <div className="current-song"><AlbumCover src={albumCover}/>
            <CurrentSong title={songTitle} artist={songArtist} /></div>
            <MainPlyer />
            <MainControls />
        </div>
    )
}

        
        // <div class="row">
    
        //     <div class="col-4 d-flex" style="color: white;">
        //         <div class="position-fixed bottom-15 start-50 translate-middle-x" style="z-index: 11">
        //           <div id="liveToast" class="toasted toast bg-primary rounded-7 text-center fs-6" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="2000">
        //             <div class="toast-body">
        //               Added to your liked songs
        //             </div>
        //           </div>
        //         </div>
        //         <div class="position-fixed bottom-15 start-50 translate-middle-x" style="z-index: 20">
        //           <div id="liveToast2" class="toast bg-primary rounded-7 text-center fs-6" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="2000">
        //             <div class="toast-body">
        //               Song removed
        //             </div>
        //           </div>
        //         </div>
        //       <img src="media/maneskin-cover.jpg"/> 
        //         <div class="d-flex flex-column mx-3 justify-content-center">
        //           <h6 style ="font-weight: 500; margin-bottom: 0px;" id="album">ZITTI E BUONI</h6>
        //           <div style="font-size:small; margin-top: 0px" id="artist">Måneskin</div>      
        //         </div>
                
        //         <h6 id="heart-container" style="margin-top:35px; margin-right: 10px;" onclick="changeHeart()"><i id="heart" class="bi bi-heart"></i></h6>
        //         <h6 style="margin-top:35px"><i style="color: white" class="bi bi-pip" onclick="showPopUp()"></i></h6>
                
                  
        
          
        //       </div>
              
        //       <div class="col-4 mt-3">
        //         <div class="d-flex justify-content-center align-items-center position-relative">
                  
        //           <h5 style="margin-right: 20px; font-size: 14px" class="position-relative fs-6" onclick="changeShuffle()"><div style="position: absolute; top:-5px; left: 4px;" id="shuffleDot" class="invisible"><h2>.</h2></div><i class="bi bi-shuffle"></i>
        //           </h5>
        //           <h4 style="margin-right: 20px;"><a href=""><i class="bi bi-skip-start-fill"></i></a>
        //           </h4>
        //           <h2 style="margin-right: 20px;"><i class="bi bi-play-circle-fill" id="media-player-play" onclick="pressPlay()"></i>
        //           </h2>
      
        //           <h4 style="margin-right: 20px;"><a href=""><i class="bi bi-skip-end-fill"></i></a>
        //           </h4>
        //           <h5 class="position-relative" onclick="changeRepeat()"><div style="position: absolute; top:-2px; left: 7px;" id="repeatDot" class="invisible"><h2>.</h2></div><i class="bi bi-arrow-repeat"></i>
        //           </h5>
        //         </div>
        //         <div class="d-flex justify-content-around align-items-center">
        //           <div style="font-size: small;"><output id="rangevalue">0:00</output> 
                
        //             </div>
        //           <div class="slide-container-music px-1" style="margin-top:0px;">
        //             <input type="range" min="0" max="100" value="0" class="slider timeline" id="music-track" ontimeupdate="rangevalue.value=value"/>
        //           </div>
        //           <div style="font-size:small;" id="duration"> 0:00 </div>
        //            </div>
        //       </div>
        //       <div class="col-4 d-flex justify-content-end" style="padding-right: 1rem;">
              
        //         <h6 style="margin-top:35px; margin-right: 10px;"><a href=""><i class="bi bi-mic"></i></a>
        //         </h6>
        //         <h6 style="margin-top:35px; margin-right: 10px;"><a href=""><i class="bi bi-list"></i></a></h6>
        //         <h6 style="margin-top:35px; margin-right: 10px;"><a href="#" id="speaker" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-container="body" data-bs-placement="top"><i class="bi bi-speaker"></i></a></h6>
        //         <h4 style="margin-top:30px; margin-right: 10px;"><i class="bi bi-volume-down" id="volume-icon" onclick="muteAudio()"></i></h4>
    
    
        //             <div class="slide-container">
        //               <input type="range" min="0" max="100" value="50" class="slider" id="volume-slider" onchange="changeVolume()"/>
        //             </div>
        //             <h6 style="margin-top:35px; margin-left: 10px;"><a href=""><i class="bi bi-arrows-angle-expand"></i></a></h6>
                  
        //           </div>
            
        //   </div>