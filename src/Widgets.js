import React from 'react'
import "../src/Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            width='340'
            height="100%"
            style={{border:"none", overflow:"hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encryptes-media"
            ></iframe>
            
        </div>
    )
}

export default Widgets
