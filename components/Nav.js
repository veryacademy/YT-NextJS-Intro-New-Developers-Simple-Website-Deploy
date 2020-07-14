import Link from 'next/link'

function Nav() {
	return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">NewSite</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <Link className="nav-link" href="/"><a className="nav-link">Homepage</a></Link>
            </li>
            <li class="nav-item active">
                <Link className="nav-link" href="/blog"><a className="nav-link">Blog</a></Link>
            </li>
            <li class="nav-item active">
                <Link  href="/aboutus"><a className="nav-link">Aboutus</a></Link>
            </li>
            </ul>
        </div>
        </nav>



	);
}

export default Nav;