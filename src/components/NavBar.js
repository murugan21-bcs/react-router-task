import { Link } from "react-router-dom";

function NavBar() {
return (
<nav className="navbar navbar-expand-lg">
<div className="container-fluid">
<ul className="navbar">
<li className="nav-item mx-3">
<Link
to="/home"
className="nav-link active"
aria-current="page"
href="#"
>
Home
</Link>
</li>
<li className="nav-item mx-3">
{" "}
<Link
to="/fstack"
className="nav-link active"
aria-current="page"
href="#"
>
Full Stack development{" "}
</Link>
</li>
<li className="nav-item mx-3">
<Link
to="/dscience"
className="nav-link active"
aria-current="page"
href="#"
>
Data Science
</Link>
</li>
<li className="nav-item mx-3">
{" "}
<Link
to="/cyber"
className="nav-link active"
aria-current="page"
href="#"
>
Cyber Security{" "}
</Link>
</li>
<li className="nav-item mx-3">
<Link
to="/career"
className="nav-link active"
aria-current="page"
href="#"
>
Career
</Link>
</li>
</ul>
</div>
</nav>
);
}

export default NavBar;