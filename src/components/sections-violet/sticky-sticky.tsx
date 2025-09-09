import Sticky from "react-stickynode";

export const StickySticky = () => {
    return (
        <section className="bg-[#100e09] text-white overflow-x-hidden">
            <div className="h-[5000px] relative">
                {/* WE CREATE */}
                <Sticky enabled={true} top={100} innerZ={10} bottomBoundary={5000}>
                    <div className="h-[500px] flex items-center justify-center text-6xl md:text-7xl lg:text-8xl font-bold">
                        WE CREATE
                    </div>
                </Sticky>

                {/* Spacer to control when next word appears */}
                <div className="h-[500px]"></div>

                {/* WE DESIGN */}
                <Sticky enabled={true} top={170} innerZ={10} bottomBoundary={5000}>
                    <div className="h-[500px] flex items-center justify-center text-6xl md:text-7xl lg:text-8xl font-bold">
                        WE DESIGN
                    </div>
                </Sticky>

                <div className="h-[500px]"></div>

                {/* WE BUILD */}
                <Sticky enabled={true} top={240} innerZ={10} bottomBoundary={5000}>
                    <div className="h-[500px] flex items-center justify-center text-6xl md:text-7xl lg:text-8xl font-bold">
                        WE BUILD
                    </div>
                </Sticky>

                <div className="h-[500px]"></div>

                {/* WE DELIVER */}
                <Sticky enabled={true} top={900} innerZ={10} bottomBoundary={5000}>
                    <div className="h-[400px] flex items-center justify-center text-6xl md:text-7xl lg:text-9xl font-bold">
                        WE DELIVER
                    </div>
                </Sticky>
            </div>
        </section>


    )
}