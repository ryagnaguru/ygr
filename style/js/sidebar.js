
let sidebar = `

<!-- /.widget -->
<div class="sidebox widget">
  <h4 class="widget-title">Search</h4>
  <form class="searchform" method="get">
    <input type="text" id="s1" name="s" value="Search something" onfocus="this.value=''" 
    onblur="this.value='Search something'">
  </form>
</div>
<!-- /.widget --> 
<div class="sidebox widget">
  <h3 class="widget-title section-title">Popular Posts</h3>
  <ul class="post-list">
    <div id = "popularPost">
    </div>
  </ul>
  <!-- /.post-list --> 
</div>
<!-- /.widget -->

<div class="sidebox widget">
  <h3 class="widget-title section-title">Tags</h3>
  <ul class="tag-list">
    <div id="tagList" ></div>
  </ul>
</div>
<!-- /.widget -->

<div class="sidebox widget">
  <h3 class="widget-title section-title">About Us</h3>
  <figure> <img src="style/images/art/about.jpg" class="img-auto" alt="" /> </figure>
  <div class="divide10"></div>
  <p>Started as a software developer for living and later it became my passion.
    I just wanted to curate here about things which I feel that may help some one in one way or the other.
  </p>
  <div class="clearfix"></div>
</div>
<!-- /.widget -->

`;


let init = () => {
  document.getElementById("sideBar").innerHTML = sidebar;
  getPopularList();
  getTagList();
}

let getPopularList = () => {
  for (const {heading, img, date, colorClass, category, desc, article} of articleInfos) {
    $("#popularPost").append(`
    <li>
    <figure class="overlay small"> <a href=${article}><img src=${img} alt="" /> </a> </figure>
    <div class="post-content">
    <h4 class="post-title"> <a href=${article}>${heading}</a></h4>
    <div class="meta"><span class="date">${date}</span><span class="category">
    <em class=${colorClass}><a href="#" class="line">${categories[category]}</a></em></span></div>
    </div>
    </li>
    `);
  }
}

let getTagList = () => {
  for( const key of Object.keys(categories) ){
    $("#tagList").append(`
      <li><a href="index.html?tag=${key}" class="btn btn-white">${categories[key]}</a></li>
    `);
  }
}
init();