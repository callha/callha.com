'use client'
import React from "react";

export default function page() {
    return (
        <div className=" min-h-[calc(100vh-85px)]">

            <iframe
                className="h-[100vh] min-w-[100vw]"
             
                src={`https://service.syncswap.net/widget?overlay=true&dark=true`}
            />


        </div>
    )
}