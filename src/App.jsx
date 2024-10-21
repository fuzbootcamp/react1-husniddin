import React from 'react'
import loga from './images/loga.png'
import icons from './images/Icons.png'
import Banner from './images/Banner.png'
import smoll from './images/smoll.png'
import cat from './images/cat.png'
import pro from './images/pro.png'
import fri from './images/fri.png'


const App = () => {
  return (
    <div>
      <nav>
        <div className="case">
          <div className="h-main">
            <img src={loga} alt="" />
             <input type="text" />
             <div className="d-main">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
            <a href="#">Blog</a>
            <img src={icons} alt="" />
            </div>
            
            
          </div>
        </div>
      </nav>



       <header>
        <div className="j-main">
          <img className='ims' src={Banner} alt="" />
        </div>
       </header>

       <section>
        <div className="y-main">
          <img className='ims' src={smoll} alt="" />
        </div>
       </section>

       <aside>
        <div className="f-main">
         <img src={cat} alt="" />
        </div>
       </aside>

       <main>
        <div className="k-main">
          <img src={pro} alt="" />
        </div>
       </main>


    
    </div>
    
    
  )
  
}



export default App
