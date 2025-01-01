import React from "react";

function Footer() {
  return (
    <footer className="h-screen sm:h-[50vh] w-full px-10 flex  items-center border-t">
          <div className="h-full sm:h-fit w-full grid  sm:grid-cols-4">
          <h2 className="text-3xl">Gagan Suman</h2>
      <ul>
        <li className="text-black text-xl font-medium">Company</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Blog</li>
      </ul>
      <ul>
        <li className="text-black text-xl font-medium">Products</li>
        <li>How it Works</li>
        <li>Pricing</li>
      </ul>
      <ul>
        <li className="text-black text-xl font-medium">Legal</li>
        <li>Privacy Policy</li>
        <li>Community Guidelines</li>
        <li>Terms & Conditions</li>
        <li>Imprint</li>
      </ul>
      </div>
    </footer>
  );
}

export default Footer;
