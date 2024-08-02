
let reelsCard = document.querySelectorAll(".main-reels-sec")

ihtml = `
<div class=" d-flex reels-content-sec">
          <!-- reels card -->
          <div class="reels-card">
            <img src="assets/images/IMG_4307.jpg" alt="">
            <!-- play btn -->
            <div class="play-btn">
              <div class="play-main">
                <img src="assets/svg/playbtn.svg" alt="">
              </div>
            </div>
            <!-- profile reels main -->
            <div class="content-reel d-flex flex-coloumn">
              <!-- main firdt div -->
              <div class="profile-detail-reel d-flex flex-row">
                <div class="pro-detail">
                  <div class="profile-name">
                    <img src="assets/images/IMG-20240418-WA0007 (2).jpg" alt="">
                    <span class="pro-name-reel">__Abdullah__Khan</span>
                  </div>
                  <div class="follow-btn"><span>Follow</span></div>
                </div>
              </div>
              <!-- second div -->
              <div class="hashtag d-flex flex-row">
                <div><span>#viral</span></div>
                <div><span>#reels</span></div>
                <div><span>more...</span></div>
              </div>
              <!-- third div -->
              <div class="song-detail">
                <div class="audio-image"><img src="assets/svg/audio.svg" alt=""></div>
                <div class="detail-song-reel"><span>Tum se piyar hum kertey hain hum</span></div>
              </div>
            </div>
          </div>
          <!-- action btns for reels -->
          <div class="actions-btns-main">
            <div class="action-btns">
              <div class="like-sec">
                <img src="assets/svg/heart.svg" alt="">
                <div class="counter"><span>45k</span></div>
              </div>
              <div><img src="assets/svg/commentreel.svg" alt=""></div>
              <div><img src="assets/svg/sharereel.svg" alt=""></div>
              <div><img src="assets/svg/favouritPost.svg" alt=""></div>
              <div><img src="assets/svg/dotbtn.svg" alt=""></div>
              <div><img class="song-img-det" src="assets/images/IMG-20240418-WA0007 (2).jpg" alt=""></div>
            </div>
          </div>
        </div>`

reelsCard.forEach(reelcard => {
    reelcard.innerHTML = ihtml
});


