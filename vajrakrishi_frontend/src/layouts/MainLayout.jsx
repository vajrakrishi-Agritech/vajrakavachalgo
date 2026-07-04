import Sidebar from "../components/Sidebar";
import  Navbar from "../components/NavBar";

export default function MainLayout({ children }) {
  const logoUrl = "/vajrakrishi main logo.png"; 

  const watermarkStyle = {
    position: "fixed",
    top: "50%",
    left: "58%", 
    transform: "translate(-50%, -50%)",
    width: "550px", 
    height: "550px",
    backgroundImage: `url(${logoUrl})`, 
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: 0.04, 
    pointerEvents: "none", 
    zIndex: 0, 
    userSelect: "none" 
  };

  return (
    /* ADJUSTED CSS: Locked down outer wrapper container */
    <div style={{ 
      display: "flex", 
      height: "100vh",          // Locks whole layout to viewport height
      overflow: "hidden",       // Prevents the window itself from scrolling
      backgroundColor: "#F8FAFC", 
      boxSizing: "border-box",
      position: "relative"
    }}>
      
      {/* Left Navigation Rail Panel */}
      <Sidebar />

      {/* Right Core Action Console Wrapper */}
      <div style={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column",
        height: "100vh",        // Matches parent layout limits
        overflow: "hidden",     // Keeps navbar firmly locked on top
        minWidth: 0,
        position: "relative" 
      }}>
        
        {/* Global Navigation Console Bar */}
        <Navbar />

        {/* Global Watermark Layer */}
        <div style={watermarkStyle} />

        {/* ADJUSTED CSS: Only this block is allowed to scroll */}
        <main style={{ 
          flex: 1, 
          overflowY: "auto",    // Enables scrolling ONLY for page contents
          position: "relative",
          zIndex: 1 
        }}>
          {children}
        </main>
        
      </div>
      
    </div>
  );
}