import React from "react";
import { Separator } from "@/components/ui/separator";
import NavbarLogo from "./navbar-logo";
import ProfileDropDown from "./profile-dropdown";
import { ThemeSwitch } from "./navtheme";
import MobileMenu from "./mobilemenu";
import { NavbarMenu } from "./navigation-menu";

function Navbar() {
  return (
    <nav className=" bg-background sticky top-0 z-50">
      <div className="container flex h-16 items-center px-4 relative">
        {/* Left Section — Logo */}
        <div className="flex items-center space-x-4">
          <NavbarLogo />
          <Separator orientation="vertical" className="h-6" />
        </div>

        {/* Center Section — Nav Menu (hidden on small screens) */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavbarMenu />
        </div>

        {/* Right Section — Switch + Profile (collapse on small screens) */}
        <div className="ml-auto flex items-center space-x-2">
          {/* Desktop actions */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeSwitch />
            <ProfileDropDown />
          </div>

          {/* Mobile hamburger (visible only on small screens) */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
