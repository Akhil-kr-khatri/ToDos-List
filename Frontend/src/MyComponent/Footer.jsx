import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 text-center border-t border-gray-700">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} <span className="font-semibold">MyWebsite</span>. All rights reserved.
      </p>
    </footer>
  );
}
