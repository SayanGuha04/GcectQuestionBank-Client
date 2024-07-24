import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-primary-300 text-primary-500 text-center py-4 w-full">
      <div className="flex justify-between mx-5">
        <div>
          <p className="text-sm">
            <a href="https://gcect.ac.in/" className="hover:underline">
              Navigate to Main Website
            </a>
          </p>
        </div>
        <div className="flex-col ">
          <p className="text-sm">
            Govt. College of Engineering & Ceramic Technology, Kolkata-700 010
          </p>
          <p className="text-sm">
            Email: principal.gcect@gcect.ac.in, gcectwb@gmail.com
          </p>
          <p className="text-sm">
            Phone: 2370 1263, 2363 3674, 2363 3675 | Fax: 2370 1264, 2363 3674
          </p>
        </div>
      </div>
      <hr className="border-primary-500 w-3/4 mx-auto" />
      <p className="text-sm">
        Copyright @ 2024 | Govt College of Engg. & Ceramic Technology | All
        Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
