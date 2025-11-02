import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Apage from "./pages/Apage";
import Bpage from "./pages/Bpage";
import Cpage from "./pages/Cpage";
import Alevel1 from "./pages/Alevel1";
import Alevel2 from "./pages/Alevel2";
import Alevel3 from "./pages/Alevel3";
import Alevel4 from "./pages/Alevel4";
import Alevel5 from "./pages/Alevel5";
import Alevel6 from "./pages/Alevel6";
import Alevel7 from "./pages/Alevel7";
import Alevel8 from "./pages/Alevel8";
import Alevel9 from "./pages/Alevel9";
import Alevel10 from "./pages/Alevel10";
import Alevel11 from "./pages/Alevel11";
import Alevel12 from "./pages/Alevel12";
import Alevel13 from "./pages/Alevel13";
import Alevel14 from "./pages/Alevel14";
import Alevel15 from "./pages/Alevel15";
import Alevel16 from "./pages/Alevel16";
import Alevel17 from "./pages/Alevel17";
import Alevel18 from "./pages/Alevel18";
import Alevel19 from "./pages/Alevel19";
import Alevel20 from "./pages/Alevel20";
import Alevel21 from "./pages/Alevel21";
import Alevel22 from "./pages/Alevel22";
import Alevel23 from "./pages/Alevel23";
import Alevel24 from "./pages/Alevel24";
import Alevel25 from "./pages/Alevel25";
import Alevel26 from "./pages/Alevel26";
import Alevel27 from "./pages/Alevel27";
import Alevel28 from "./pages/Alevel28";
import Alevel29 from "./pages/Alevel29";
import Alevel30 from "./pages/Alevel30";
import Alevel31 from "./pages/Alevel31";
import Alevel32 from "./pages/Alevel32";
import Alevel33 from "./pages/Alevel33";

import Results from "./pages/Results";

import BeforeUse from "./pages/BeforeUse";
import Manual from "./pages/Manual";
import ContactForm from "./pages/ContactForm";

import Game from "./Game";
import Gamepage from "./pages/Gamepage/"
import Gameresult from "./pages/Gameresult/"


export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/BeforeUse" element={<BeforeUse />} />
          <Route path="/Manual" element={<Manual />} />
          <Route path="/ContactForm" element={<ContactForm />} />

          <Route path="/Game" element={<Game />} />
          <Route path="/Game/Gamepage" element={<Gamepage />} />
          <Route path="/Gameresult" element={<Gameresult />} />

          <Route path="/Apage" element={<Apage />} />
          <Route path="/Apage/Alevel1" element={<Alevel1 />} />
          <Route path="/Apage/Alevel2" element={<Alevel2 />} />
          <Route path="/Apage/Alevel3" element={<Alevel3 />} />
          <Route path="/Apage/Alevel4" element={<Alevel4 />} />
          <Route path="/Apage/Alevel5" element={<Alevel5 />} />
          <Route path="/Apage/Alevel6" element={<Alevel6 />} />
          <Route path="/Apage/Alevel7" element={<Alevel7 />} />
          <Route path="/Apage/Alevel8" element={<Alevel8 />} />
          <Route path="/Apage/Alevel9" element={<Alevel9 />} />
          <Route path="/Apage/Alevel10" element={<Alevel10 />} />
          <Route path="/Apage/Alevel11" element={<Alevel11 />} />
          <Route path="/Apage/Alevel12" element={<Alevel12 />} />
          <Route path="/Apage/Alevel13" element={<Alevel13 />} />
          <Route path="/Apage/Alevel14" element={<Alevel14 />} />
          <Route path="/Apage/Alevel15" element={<Alevel15 />} />
          <Route path="/Apage/Alevel16" element={<Alevel16 />} />
          <Route path="/Apage/Alevel17" element={<Alevel17 />} />
          <Route path="/Apage/Alevel18" element={<Alevel18 />} />
          <Route path="/Apage/Alevel19" element={<Alevel19 />} />
          <Route path="/Apage/Alevel20" element={<Alevel20 />} />
          <Route path="/Apage/Alevel21" element={<Alevel21 />} />
          <Route path="/Apage/Alevel22" element={<Alevel22 />} />
          <Route path="/Apage/Alevel23" element={<Alevel23 />} />
          <Route path="/Apage/Alevel24" element={<Alevel24 />} />
          <Route path="/Apage/Alevel25" element={<Alevel25 />} />
          <Route path="/Apage/Alevel26" element={<Alevel26 />} />
          <Route path="/Apage/Alevel27" element={<Alevel27 />} />
          <Route path="/Apage/Alevel28" element={<Alevel28 />} />
          <Route path="/Apage/Alevel29" element={<Alevel29 />} />
          <Route path="/Apage/Alevel30" element={<Alevel30 />} />
          <Route path="/Apage/Alevel31" element={<Alevel31 />} />
          <Route path="/Apage/Alevel32" element={<Alevel32 />} />
          <Route path="/Apage/Alevel33" element={<Alevel33 />} />


          <Route path="/Bpage" element={<Bpage />} />

          <Route path="/Cpage" element={<Cpage />} />

          <Route path="/Results" element={<Results />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}


