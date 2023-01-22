import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="flex flex-row">
            <Nav />
            <div className="flex flex-col min-h-screen w-[calc(100vh - 60px)] overflow-y-scroll pl-[60px]">
                {children}
                <Footer />
            </div>
        </div>
    )
}