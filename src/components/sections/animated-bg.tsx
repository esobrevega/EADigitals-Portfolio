import Aurora from "@/blocks/Backgrounds/Aurora/Aurora"

export const AnimatedBackground = () => {
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
            <Aurora
                colorStops={['#ffffff', '#90CAF9', '#62cbdb']}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
        </div>
    )
}