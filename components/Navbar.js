export default function Navbar() {
    return (
        <nav className="m-0 bg-white flex justify-between">
            <h1>Gekos store</h1>
            <ul className="flex list-none">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}