let indexContent = `

<div class="post col-sm-12 col-md-6">
<h3 class="post-title"><a href="blog-post.html">Tellus Adipiscing Nibh Mattis</a></h3>
    <figure class="overlay">
      <a href="#"><img src="style/images/art/b2.jpg" alt="" /></a>
    </figure>
    <div class="post-content">
      <div class="meta"><span class="date">12 Nov 2014</span>
        <span class="category">
          <em class="orange">
            <a href="#" class="line">Still Life</a>
          </em>
        </span>
      </div>
      <p>Aenean lacinia bibendum nulla sed consectetur. 
        Integer posuere erat a ante venenatis dapibus 
        posuere velit aliquet. Cum sociis natoque.</p>
      <a href="blog-post.html" class="more">Read More</a> </div>
    <!-- /.post-content --> 
  </div>
  <!-- /.post -->
  <hr />
`;

for (var i = 0; i<8; i++) {
  $("#indexContents").append(indexContent);
}