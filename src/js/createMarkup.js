
export default function createMarkup(data) {
    return data.map(({webformatURL, largeImageURL ,tags ,likes, views, comments,downloads}) => {
      return    `<div class="photo-card">
          <a  class="gallery__link" href="${largeImageURL}">
         <img  class="gallery__image"
         src="${webformatURL}"  
         alt="${tags}" 
         loading="lazy" />
          </a>
        <div class="info">
    <p class="info-item">
      <b class="info-text">Likes</b>
      ${likes}
    </p>
    <p class="info-item">
      <b class="info-text">Views</b>
      ${views}
    </p>
    <p class="info-item">
      <b class="info-text">Comments</b>
      ${comments}
    </p>
    <p class="info-item">
      <b class="info-text">Downloads</b>
      ${downloads}
    </p>
  </div>
</div>`
    }).join("");
};


