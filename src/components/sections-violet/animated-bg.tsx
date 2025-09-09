import Aurora from "@/blocks/Backgrounds/Aurora/Aurora"
import DarkVeil from "@/blocks/Backgrounds/DarkVeil/DarkVeil"

export const AnimatedBackgroundV = () => {
    return (
        <div className="fixed inset-0 z-0">
            {/* <Particles
          particleColors={['#ffffff', '#90CAF9', '#62cbdb']}
          particleCount={600}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={150}
          alphaParticles={false}
          disableRotation={true}
        /> */}
            {/* <Aurora
                colorStops={['#ffffff', '#90CAF9', '#62cbdb']}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            /> */}
            <DarkVeil
                hueShift={20}
                noiseIntensity={0.1}
                scanlineIntensity={0.2}
                scanlineFrequency={5}
                warpAmount={0.05}
            />
        </div>
    )
}