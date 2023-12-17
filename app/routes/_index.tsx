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
            <div className="py-36 max-w-6xl mx-auto flex flex-col items-center justify-center">
                <h1 className="font-cal-sans text-7xl text-[#3E362F] text-center">
                    Tailor an unparalleled design.
                </h1>
                <div className="mt-2 max-w-2xl mx-auto">
                    <p className="text-xl text-[#5A5D59] text-center">
                        A design studio that offers all you need — premium website design, branding, advertisement &amp; more.
                    </p>
                </div>
                <a href="#" className="mt-6 rounded-full bg-[#3E362F] text-[#e0d1cb] px-12 py-4">
                    View Portfolios
                </a>
                <div className="mt-14">
                    <img src="https://imadqadri.dev/static/work/berry-landing-concept.png" className="h-[28rem]" />
                    <div className="mt-3 max-w-[15rem] mx-auto">
                        <p className="text-[#727572] text-center">
                            Above is a picture of BerryByte Landing Page Concept.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
