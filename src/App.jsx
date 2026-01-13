import React, { useState } from 'react';
import { GridScan } from '../src/components/GridScan.jsx';
import DecryptedText from "../src/components/Decryptedtext.jsx";

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
          src="src/hblogo.png" 
          alt="Logo"
          className="w-64 md:w-96 h-auto mb-8 drop-shadow-2xl pointer-events-auto"
        />

        <button className="px-16 py-4 mb-12 bg-purple-900/20 backdrop-blur-md text-white border-2 border-purple-500 font-bold rounded-full transition-transform hover:scale-105 pointer-events-auto">
          <div className="text-xl md:text-2xl tracking-[0.2em] uppercase">
            <DecryptedText speed={100} maxIterations={25} text="Donate" />
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

        <div className="absolute inset-0 bg-purple-950/20 backdrop-blur-3xl border-l border-white/10 flex flex-col items-center justify-center p-8 md:p-24">
          
         
          <button 
            onClick={closeModal} 
            className="absolute top-10 right-10 text-white/70 hover:text-white transition-colors group"
          >
            <span className="text-xs tracking-[0.4em] uppercase mr-2 opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
            <span className="text-4xl font-light">&times;</span>
          </button>

          <div className="max-w-4xl w-full text-center">
            {activeTab === 'about' && (
              <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
                  About <span className="text-purple-500">Us</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light tracking-wide">
                  We are a creative collective pushing the boundaries of digital experiences. 
                  Our mission is to blend technology and art through interactive design.
                </p>
              </div>
            )}

            {activeTab === 'visit' && (
              <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
                  Visit <span className="text-purple-500">Us</span>
                </h2>
                <p className="text-xl md:text-3xl text-gray-300 space-y-4 font-light">
                  123 Digital Avenue<br />
                  Cyber District, NY 10001<br />
                  <span className="block mt-6 text-purple-400 font-bold uppercase tracking-[0.3em]">Open Mon-Fri: 9am - 6pm</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;