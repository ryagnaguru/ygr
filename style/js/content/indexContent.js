

let indexContent = (heading, img, date, colorClass, category, desc, article, tag) =>  

{
  if( (tag && categories[category] === categories[parseInt(tag)]) || !tag ){
      return `
      <div class="post col-sm-12 col-md-6">
      <h3 class="post-title"><a href="blog-post.html">${heading}</a></h3>
          <figure class="overlay">
            <a href="#"><img src=${img} alt="" /></a>
          </figure>
          <div class="post-content">
            <div class="meta"><span class="date">${date}</span>
              <span class="category">
                <em class=${colorClass}>
                  <a href="index.html?tag=${category}" class="line">${categories[category]}</a>
                </em>
              </span>
            </div>
            <p>${desc}</p>
            <a href=${article} class="more">Read More</a> </div>
          <!-- /.post-content --> 
        </div>
        <!-- /.post -->
        <hr />
      `
  } 
}

;

$(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const tag = urlParams.get('tag');
  loadArticles(tag);
});

let loadArticles = (tag) => {
  for (const {heading, img, date, colorClass, category, desc, article} of articleInfos) {
    $("#indexContents").append(indexContent(heading, img, date, colorClass, category, desc, article, tag));
  }
}