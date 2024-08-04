


let postCard = document.querySelectorAll('.post')

ihtml = `
        <div class="card mb-5">
              <div class="top">
                <div class="userdetail">
                  <div class="profile-image">
                    <img src="/assets/images/IMG-20240418-WA0007 (1).jpg" alt="" class="cover" srcset="">
                  </div>
                  <h3>Muhammad Sikandar<br><span>Rahim Yar Khan</span></h3>
                </div>
                <div>
                  <img src="/assets/svg/dotbtn.svg" class="dot" alt="">
                </div>
              </div>
              <div class="image-bx">
                <img src="/assets/images/IMG_4307.jpg" class="cover" alt="">
              </div>
              <div class="actionsBtns">
                <div class="left">
                  <img class="like-button" src="/assets/svg/heart.svg">
                  <img src="/assets/svg/comment.svg" alt="">
                  <img src="/assets/svg/share.svg" alt="">
                </div>
                <div class="right">
                  <img class="favourit" src="/assets/svg/favouritPost.svg"  alt="">
                </div>
              </div>
              <h4 class="likes">3,456 likes</h4>
              <h4 class="message"><b>Muhammad Sikandar</b>Thanks for your love and suports
                <span>#hotel</span><span>#pic</span><span>#clone</span>
              </h4>
              <h4 class="comments font-size-h4">View all 299 comments</h4>
              <div class="addcomments">
                <div class="userImg">
                  <img src="/assets/images/321012644_464342419232543_5709440205566717067_n - Copy (2).jpg" alt=""
                    srcset="" class="cover">
                </div>
                <input type="text" class="text" placeholder="Add a comment...">
              </div>
              <h5 class="postTime">4 hours ago</h5>
            </div>`;

postCard.forEach(card =>{
  card.innerHTML = ihtml
})


