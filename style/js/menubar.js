let menubar = `

<div class="navbar navbar-default default classic centered" role="navigation">
    <div class="container">
      <div class="navbar-header visible-xs visible-sm">
        <div class="navbar-brand"><a href="index.html">
            <img src="#" srcset="style/images/logo.png 1x, style/images/logo@2x.png 2x" alt="" /></a>
        </div>
        <div class="nav-bars-wrapper">
          <div class="nav-bars-inner">
            <div class="nav-bars" data-toggle="collapse" data-target=".navbar-collapse"><span></span></div>
          </div>
          <!-- /.nav-bars-inner --> 
        </div>
        <!-- /.nav-bars-wrapper --> 
      </div>
      <!-- /.nav-header -->
      
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav hidden-xs hidden-sm">
            <li class="menu-logo"><a href="index.html">
              <img src="#" srcset="style/images/logo.png 1x, style/images/logo@2x.png 2x" alt="" /></a>
            </li>
        </ul>
        <ul class="nav navbar-nav visible-xs visible-sm">
          <li><a href="#!">Home</a></li>
        </ul>
      </div>
      <!--/.nav-collapse --> 
    </div>
    <!--/.container --> 
  </div>
  <!--/.navbar -->

`;

document.getElementById("menuBar").innerHTML = menubar;