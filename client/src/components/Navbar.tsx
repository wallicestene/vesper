"use client";
function Navbar() {
  return (
    <div className="navbar flex justify-between items-center p-3">
      <div className="nav-left">Vesper</div>
      <div className="nav-center">
        <ul className="flex space-x-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">Right Content</div>
    </div>
  );
}

export default Navbar;
