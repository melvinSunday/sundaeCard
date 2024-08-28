import Attributes from "./components/Attributes";
import Logo from "./components/Logo";
import { useTheme } from "next-themes";
import { MagicCard } from "./components/magicui/magic-card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { CoolMode } from "@/components/magicui/cool-mode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Groceries from "./pages/Groceries";
const App = () => {
  const { theme } = useTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/groceries" element={<Groceries />} />
      </Routes>
      <div className="relative h-screen w-screen bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[200%] w-[200%] rounded-full bg-[radial-gradient(circle_400px_at_50%_50%,#fbfbfb36,#000)]"></div>
        <div className="flex justify-center items-center h-full w-full">
          <div className="flex flex-col gap-4 px-4 sm:px-0">
            <MagicCard
              className="cursor-pointer shadow-2xl text-[16px] sm:text-[20px] relative overflow-hidden rounded-xl select-none"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <CoolMode>
                <div className="p-4 sm:p-8 gap-3 sm:gap-5 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start relative z-10 select-none">
                  {" "}
                  <Logo />
                  <Attributes>
                    {" "}
                    <div className="flex flex-col font-['Century Gothic'] tracking-[0.8px] attributes-container">
                      <p>
                        <b>NAME:</b> Melvin Giovanni Domingo
                      </p>
                      <p>
                        <b>AGE:</b> 20
                      </p>
                      <p>
                        <b>OCCUPATION:</b> Front-end Dev 🧑‍💻🌐
                      </p>
                      <p>
                        <b>HOBBY:</b> Play keyboard 🎹
                      </p>
                    </div>
                  </Attributes>
                </div>
              </CoolMode>
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <BorderBeam size={200} sm:size={250} duration={12} delay={9} />
              </div>
            </MagicCard>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
