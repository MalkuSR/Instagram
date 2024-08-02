let suggestedCard = document.querySelectorAll('.suggested-foryou')

ihtml = ` <div class="card-foryou">
                  <div class="profile-foryou">
                    <div class="image-foryou"><img class="image-foryou" src="assets/images/IMG_4310.jpg" alt="">
                    </div>
                    <div class="name-foryou">
                      <span class="names">abdullah786</span>
                      <span class="names sug-fo-you-sp">Suggested for you</span>
                    </div>
                    <div class="switch-btn"><span class="switch-btn">
                        <span class="switch-btn">Follow</span>
                      </span></div>
                  </div>
                </div>`;

suggestedCard.forEach(card =>{
  card.innerHTML = ihtml
});


