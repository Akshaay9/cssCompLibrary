import React,{useState} from 'react'

function NavForDoc({ setShowCssComp, showcssComp }) {
    
    const [showNavForDoc,setShowNavForDoc]=useState(false)
    return (
        <div>
            <div className="navForDoc">
                <div className="responsiveNavForDoc">
                  
                    <i class="fas fa-bars" onClick={()=>setShowNavForDoc(!showNavForDoc)}></i>
                    <h3>Ui World</h3>
                </div>
                <ul  className={showNavForDoc ?"showResponsiveNav":null} >
                   <li  onClick={()=>setShowCssComp("welcome")}>Intro</li>
                    <li onClick={() => setShowCssComp("avatar")}>Avatar</li>
                    <li onClick={()=>setShowCssComp("nav")}>Nav</li>
                    <li onClick={()=>setShowCssComp("footer")}>Footer</li>
                    <li  onClick={()=>setShowCssComp("alert")}>Alert</li>
                    <li  onClick={()=>setShowCssComp("badge")}>Badge</li>
                    <li  onClick={()=>setShowCssComp("buttons")}>Buttons</li>
                    <li  onClick={()=>setShowCssComp("cards")}>Cards</li>
                    <li  onClick={()=>setShowCssComp("input")}>Input</li>
                    <li  onClick={()=>setShowCssComp("list")}>List</li>
                    <li  onClick={()=>setShowCssComp("modal")}>Modal</li>
                    <li  onClick={()=>setShowCssComp("textutility")}>TextUtilities</li>
                    <li  onClick={()=>setShowCssComp("toast")}>Toast</li>
                    <li  onClick={()=>setShowCssComp("DropDownList")}>Drop Down Links</li>
                    <li  onClick={()=>setShowCssComp("ResponsiveImage")}>Responsive Image</li>
                   
                </ul>
            </div>
          
        </div>
    )
}

export default NavForDoc
