let suggestionoffCard = document.querySelectorAll('.child')

ihtml = ` <div class="child-image card-suggestion">
                        <img class="cross-ic" src="assets/svg/cross.svg" alt="img">
                        <div class="item d-flex flex-column justify-content-center align-center">
                          <div><img class="profile-su-img" src="assets/images/IMG-20240418-WA0007 (2).jpg" alt="">
                          </div>
                          <span class=".name-su-ca">abdullah</span>
                          <p><span class="para-1">Followed by</span><span class="para-2">mohsinkahn1345
                              and...</span>
                          </p>
                          <span class="followed-imgs">
                            <img class="followed-img-1" src="assets/images/IMG_4326.jpg" alt="img">
                            <img class="followed-img-2" src="assets/images/IMG_4310.jpg" alt="">
                          </span>
                        </div>
                        <div class="item-2">
                          <a class="follow-end" href="">Follow</a>
                        </div>
                      </div>`;

suggestionoffCard.forEach(card => {
    card.innerHTML = ihtml
});


