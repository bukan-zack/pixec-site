import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Pixec" },
        { name: "description", content: "" },
    ];
};

export default function Index() {
    return (
        <div>
            <div className="py-36 max-w-6xl px-4 mx-auto flex flex-col items-center justify-center">
                <h1 className="font-cal-sans text-5xl md:text-7xl text-[#3E362F] text-center tracking-tight">
                    Tailor an unparalleled design.
                </h1>
                <div className="mt-2 max-w-2xl mx-auto">
                    <p className="md:text-xl text-[#5A5D59] text-center">
                        A design studio that offers all you need — premium website design, branding, advertisement &amp; more.
                    </p>
                </div>
                <div className="w-full mt-6 flex flex-col items-center justify-center md:flex-row md:space-x-4 space-y-3 md:space-y-0">
                    <a href="#" className="w-full md:w-auto flex flex-row justify-center items-center transition-colors ease-in-out duration-500 rounded-full bg-[#3E362F] text-[#e0d1cb] hover:bg-[#4b4139] hover:text-[#e9d9d3] px-12 py-4">
                        View our work
                    </a>
                    <a href="#" className="w-full md:w-auto flex flex-row justify-center items-center transition-colors ease-in-out duration-500 rounded-full bg-[#e0d1cb] text-[#5A5D59] hover:bg-[#cfc3bd] hover:text-[#3E362F] px-12 py-4">
                        Have a chat
                    </a>
                </div>
                <div className="mt-14">
                    <div className="relative rounded-lg w-full md:w-[55rem] bg-black group overflow-hidden">
                        <div className="text-white z-[69] text-center absolute inset-0 flex-col items-center justify-center opacity-0 group-hover:opacity-100 flex transition ease-in-out duration-500 delay-100">
                            <div className="max-w-xs md:max-w-4xl">
                                A picture of BerryByte Landing Page Concept.
                            </div>
                        </div>
                        <img src="https://imadqadri.dev/static/work/berry-landing-concept.png" className="rounded-lg object-fill group-hover:opacity-50 transition ease-in-out duration-500 group-hover:scale-110" />
                    </div>
                </div>
            </div>
        </div>
    );
}
