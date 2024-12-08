console.log('lets write some javascript');
let songs;
let currfolder;
function formatTime(seconds) {


    if(isNaN(seconds) || seconds < 0){
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60); // Calculate whole minutes
    const remainingSeconds = Math.floor(seconds % 60); // Calculate whole seconds
  
    // Pad with zeroes to ensure two digits
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }


let currentsong = new Audio();
async function getsongs(folder){
    currfolder = folder;

    let a = await fetch(`http://127.0.0.1:5500/${folder}/`)

    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML =response;
    let as  = div.getElementsByTagName("a")
     songs =[]
    for(let index = 0;index <as.length;index++){
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split(`${folder}/`)[1])

        }
      
    }
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    songUL.innerHTML ="";
   for (const song of songs) {
    songUL.innerHTML = songUL.innerHTML + `<li> 
    
              <img class="invert" src="music.svg" alt="">
              <div class="info">
              <div> ${song.replaceAll("%20", " ")}</div>
              <div>local media</div>
            </div>
            <div class="playnow">
              <span>Play Now</span>
              <img class="invert" src="play.svg" alt="">
            </div>
        

    </li>`;
    
   }

   // Attach an event listener to each song
   Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
    e.addEventListener("click",element=>{
        console.log(e.querySelector(".info").firstElementChild.innerHTML)
        playmusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
    })
   })

   
}

const playmusic = (track , pause=false)=>{
   // let audio = new audio("/songs/"+ track)
    currentsong.src = `/${currfolder}/` + track
    if(!pause){
        currentsong.play()
        play.src = "pause.svg"
    }
   
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

getsongs()

async function main()
{
    
    //get the list of the songs
      await getsongs("songs/cs")
   playmusic(songs[0],true)


    


   //attach an event listner to play ,next and previous
   play.addEventListener("click",()=>{
    if(currentsong.paused){
        currentsong.play()
        play.src = "pause.svg"; 

    }
    else{
        currentsong.pause()
        play.src = "play.svg"; 

    }
   })


   //time stemps
   currentsong.addEventListener("timeupdate",()=>{
    console.log(currentsong.currentTime,currentsong.duration);
    document.querySelector(".songtime").innerHTML = `${
        formatTime(currentsong.currentTime)}/ ${formatTime(currentsong.duration)}`

        document.querySelector(".circle").style.left = (currentsong.currentTime/ currentsong.duration)* 100 +"%";
   })



   //add an event listener to seekbar
   document.querySelector(".seekbar").addEventListener("click",e=>{
    let percent =  (e.offsetX/e.target.getBoundingClientRect().width) *100;
    document.querySelector(".circle").style.left = percent +"%";


    currentsong.currentTime = ((currentsong.duration)* percent)/100
   }) 


   //add event listener to hamberger
   document.querySelector(".hamberger").addEventListener("click",()=>{
    document.querySelector(".left").style.left = "0";
   })


   document.querySelector(".cancle").addEventListener("click",()=>{
    document.querySelector(".left").style.left= "-100%";
   })

   //add event listener to previous
   previous.addEventListener("click",()=>{
    console.log("previous song")
    console.log(currentsong)
    let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
    if(index-1 >=0)
    {
        playmusic(songs[index-1])
    }
    
   })
   //add event listner to next
   next.addEventListener("click",()=>{
    console.log("next song")
    let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
    if((index+1)< songs.length)
    {
        playmusic(songs[index+1])
    }

   })

   //add event listener to the volume
   document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
    currentsong.volume = parseInt(e.target.value)/100
   })


   // load the playlist whenever card is called

  Array.from( document.getElementsByClassName("card")).forEach(e=>{
    e.addEventListener("click", async item=>{
        songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`)
        
    })
   })

} 
main()