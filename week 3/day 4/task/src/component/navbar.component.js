import {Link} from "react-router-dom"
const Navbar = () => {

return(

    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow p-3 mb-5">
  <div class="container-fluid"></div>
    <a class="navbar-brand" href="#">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QxaPONTvqu5GH2RuVYkI2s2MozucbY23Q8oplxKC8w&s" ></img>CWIPEDIA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <li class="nav-item">
          <Link to="/home" class="nav-link" >Home</Link>
        </li>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link" >About</Link>
        </li>

        <li class="nav-item">
        <li class="nav-item">
          <Link to="/team" class="nav-link" >Team</Link>
        </li>
        </li>
       
      </ul>
     
  </div>
</nav>
    </>
)
}
export default Navbar;