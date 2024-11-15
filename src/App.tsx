import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { TS_PARTICLES_CONFIG } from "./tsparticles.config";
import { loadAll } from "@tsparticles/all";
import { createRoot } from "react-dom/client";
import CalendarComponent from "./Calendar";

const App: FunctionComponent = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadAll(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const OPTIONS = useMemo(() => {
    console.log("rerender");
    return TS_PARTICLES_CONFIG;
  }, []);

  return (
    <>
      {init && (
        <Particles
          key="tsparticles"
          id="tsparticles"
          // particlesLoaded={particlesLoaded}
          options={OPTIONS}
        />
      )}
      <CalendarComponent></CalendarComponent>
    </>
  );
};

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
