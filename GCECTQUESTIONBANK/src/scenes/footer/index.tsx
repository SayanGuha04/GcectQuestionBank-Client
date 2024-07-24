import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-primary-300 text-primary-500 text-center py-4">
      <div className="container mx-auto">
        <p className="text-sm">
          Govt. College of Engineering & Ceramic Technology, Kolkata-700 010
        </p>
        <p className="text-sm">
          Email: principal.gcect@gcect.ac.in, gcectwb@gmail.com
        </p>
        <p className="text-sm">
          Phone: 2370 1263, 2363 3674, 2363 3675 | Fax: 2370 1264, 2363 3674
        </p>
        <p className="text-sm">
          <a href="#" className="hover:underline">
            Navigate to Main Website
          </a>
        </p>
        <p className="text-sm">&copy; Copyright @ 2024 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
