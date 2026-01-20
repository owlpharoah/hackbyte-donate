import React, { useState } from 'react';
import { GridScan } from '../src/components/GridScan.jsx';
import DecryptedText from "../src/components/Decryptedtext.jsx";
import { Globe } from 'lucide-react';
import hblogo from './public/hblogo.png';
import hbAlt from './public/hb4_alt.svg';

const App = () => {
  const [activeTab, setActiveTab] = useState(null);

  const closeModal = () => setActiveTab(null);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden font-sans">
      
      <div className="absolute inset-0 z-0">
        <GridScan
          sensitivity={0.55} lineThickness={1} linesColor="#392e4e" gridScale={0.1}
          scanColor="#FF9FFC" scanOpacity={0.4} enablePost bloomIntensity={0.6}
          chromaticAberration={0.002} noiseIntensity={0.01}
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-screen text-center px-4 pointer-events-none">
        <img 
          src={hblogo}
          alt="Logo"
          className="w-64 md:w-96 h-auto mb-8 drop-shadow-2xl pointer-events-auto"
        />

        <button onClick={()=>{window.open('https://milaap.org/fundraisers/support-hackbyte-4-0','_blank');}} className="px-16 py-4 mb-12 bg-purple-900/20 backdrop-blur-md text-white border-2 border-purple-500 font-bold rounded-full transition-transform hover:scale-105 pointer-events-auto">
          <div className="text-xl md:text-2xl tracking-[0.2em] uppercase">
            <DecryptedText animateOn='view' speed={100} maxIterations={40} text="Donate" />
          </div>
        </button>

        <div className="flex gap-6 pointer-events-auto">
          <button onClick={() => setActiveTab('about')} className="px-8 py-2 bg-white/5 backdrop-blur-sm text-gray-300 border border-white/20 rounded-full hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
            About Us
          </button>
          <button onClick={() => setActiveTab('visit')} className="px-8 py-2 bg-white/5 backdrop-blur-sm text-gray-300 border border-white/20 rounded-full hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
            Visit Us
          </button>
        </div>
      </div>


      <div 
        className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out ${
          activeTab ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl border-l border-white/10 overflow-y-auto">
          
          <div className="min-h-full w-full flex flex-col items-center justify-start md:justify-center p-6 md:p-16 relative">
            
            <button 
              onClick={closeModal} 
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors group z-50"
            >
              <span className="hidden md:inline text-xs tracking-[0.2em] uppercase mr-2 opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
              <span className="text-4xl font-light leading-none">&times;</span>
            </button>

            <div className="max-w-6xl w-full text-white mt-12 md:mt-0">
              
              {activeTab === 'about' && (
                <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 flex flex-col items-start text-left w-full">
                  
                  <div className="mb-8 md:mb-12 w-full">
                    <h1 className="text-4xl md:text-7xl font-serif italic mb-2 text-white break-words">HackByte 4.0</h1>
                    <h3 className="text-lg md:text-2xl font-bold tracking-wide text-gray-200">Fuel Hackbyte 4.0 with your generosity!</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full mb-8 md:mb-12">
                    
                    <div>
                      <h4 className="text-sm md:text-lg uppercase tracking-widest font-bold mb-4 md:mb-6 text-gray-100 border-b border-white/20 pb-2 inline-block">Highlights</h4>
                      <ul className="space-y-2 md:space-y-3 text-gray-300 font-light text-base md:text-lg">
                        <li>Organised by The Programming Club IIITDMJ</li>
                        <li>20+ Partners</li>
                        <li>2400+ Registered Participants</li>
                        <li>110+ Projects</li>
                        <li>100+ Volunteers</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm md:text-lg uppercase tracking-widest font-bold mb-4 md:mb-6 text-gray-100 border-b border-white/20 pb-2 inline-block">Unlock The Benefits</h4>
                      <ul className="space-y-2 md:space-y-3 text-gray-300 font-light text-base md:text-lg">
                        <li>Discover Top Talents</li>
                        <li>Amplify Your Brand</li>
                        <li>Drive Product Innovation</li>
                        <li>Engage with the Community</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-400 italic font-serif text-base md:text-lg leading-relaxed max-w-4xl border-t border-white/10 pt-8 mt-4">
                      Help Fuel Hackbyte 4.0's success! Your financial support will empower this community-driven event to reach new heights. <br className="hidden md:block" />
                      <span className="not-italic font-sans text-sm mt-4 block text-gray-500">
                        Read our <a href="http://www.hackbyte.in/prospectus" className="text-teal-400 hover:underline underline-offset-4">Brochure</a> to know more.
                        <br/>
                        <a href="#" className="text-teal-400 hover:underline underline-offset-4">Donate</a>
                      </span>
                  </p>
                </div>
              )}

              {activeTab === 'visit' && (
                <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 w-full flex items-center justify-center">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center w-full">
                    
                    <div className="flex flex-col items-center md:items-end text-center md:text-right order-1">
                      <img src={hbAlt} alt="hackbyte logo" className="w-40 md:w-64 mb-6 md:mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mx-auto md:mx-0" />
                      
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mb-8">
                        Join IIITDMJ's Programming Club for Hackbyte 4.0 in April 2026! Following the success of Hackbyte 3.0 with 2400+ participants, the sequel expands with new domains. Don't miss this groundbreaking programming fest!
                      </p>
                      
                      <a href="https://www.hackbyte.in" className="flex flex-col items-center md:items-end gap-2 text-teal-400 group cursor-pointer">
                        <Globe className="w-6 h-6 mb-1 group-hover:animate-pulse mx-auto md:mx-0"/>
                        <span className="uppercase tracking-widest text-xs border-b border-transparent group-hover:border-teal-400 transition-all">Visit the site</span>
                      </a>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12 order-2">
                      <h2 className="text-3xl md:text-5xl font-serif tracking-wide mb-4 md:mb-6 text-white">WHAT DO WE DO?</h2>
                      
                      <h3 className="text-xl md:text-3xl italic font-serif text-gray-200 mb-8 md:mb-12">
                        - "We think to innovate"
                      </h3>
                      
                      <ul className="space-y-4 text-sm text-gray-400 font-light tracking-wide w-full">
                        <li className="flex flex-col md:block">
                          <span className="text-gray-500 uppercase text-xs font-bold md:mr-2 block md:inline">Location</span> 
                          IIITDM Jabalpur, Dumna Road, Jabalpur
                        </li>
                        <li className="flex flex-col md:block">
                          <span className="text-gray-500 uppercase text-xs font-bold md:mr-2 block md:inline">Contact</span>
                          <span className="block md:inline">Uttara Kamat (+91 9869261132)</span>
                          <span className="block md:inline md:ml-2">Akshay Behl (+91 9319674300)</span>
                        </li>
                        <li className="flex flex-col md:block">
                          <span className="text-gray-500 uppercase text-xs font-bold md:mr-2 block md:inline">Email</span>
                          <span className="bg-blue-600/20 text-blue-300 px-1 inline-block mt-1 md:mt-0">theprogclub@iiitdmj.ac.in</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;