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
    <li>
      <figure class="overlay small"> <a href="blog-post.html"><img src="style/images/art/a1.jpg" alt="" /> </a> </figure>
      <div class="post-content">
        <h4 class="post-title"> <a href="blog-post.html">Magna Mollis Ultricies Mauris</a> </h4>
        <div class="meta"><span class="date">12 Nov 2014</span><span class="category"><em class="red"><a href="#" class="line">Urban</a></em></span></div>
      </div>
    </li>
    <li>
      <figure class="overlay small"> <a href="blog-post.html"><img src="style/images/art/a2.jpg" alt="" /> </a> </figure>
      <div class="post-content">
        <h4 class="post-title"> <a href="blog-post.html">Ornare Nullam Risus Cursus</a> </h4>
        <div class="meta"><span class="date">12 Nov 2014</span><span class="category"><em class="orange"><a href="#" class="line">Still Life</a></em></span></div>
      </div>
    </li>
    <li>
      <figure class="overlay small"> <a href="blog-post.html"><img src="style/images/art/a3.jpg" alt="" /> </a> </figure>
      <div class="post-content">
        <h4 class="post-title"> <a href="blog-post.html">Euismod Nullam Fusce Dapibus</a> </h4>
        <div class="meta"><span class="date">12 Nov 2014</span><span class="category"><em class="forest"><a href="#" class="line">Conceptual</a></em></span></div>
      </div>
    </li>
  </ul>
  <!-- /.post-list --> 
</div>
<!-- /.widget -->

<div class="sidebox widget">
  <h3 class="widget-title section-title">Tags</h3>
  <ul class="tag-list">
    <li><a href="#" class="btn btn-white">Still Life</a></li>
    <li><a href="#" class="btn btn-white">Urban</a></li>
    <li><a href="#" class="btn btn-white">Journal</a></li>
    <li><a href="#" class="btn btn-white">Nature</a></li>
    <li><a href="#" class="btn btn-white">Landscape</a></li>
    <li><a href="#" class="btn btn-white">Macro</a></li>
    <li><a href="#" class="btn btn-white">Workshop</a></li>
    <li><a href="#" class="btn btn-white">Photography</a></li>
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

document.getElementById("sideBar").innerHTML = sidebar;