import { useState } from "react"

export default function ServicePage() {
    const [buttonPressed, setIsbuttonPressed] = useState(false)

    return(
        <div>

            <nav
            className="text-white/40 pt-10 ml-10 md:ml-15 md:pt-10 mx-20 max-w-sm overflow-hidden rounded-xl shadow-md sm:max-w-md md:max-w-2xl lg:max-w-4xl 2xl:max-w-6xl font-light font-serif cursor-pointer"
        >
            <ul className="flex gap-0.5">
            <li className="hover:text-white">
                <a href="/">Home</a>
            </li>
            <li className="text-white">/Services</li>
            </ul>
        </nav>

        <section
            className="pt-20 mx-auto max-w-sm overflow-hidden rounded-xl shadow-md sm:max-w-md md:max-w-4xl lg:max-w-4xl 2xl:max-w-6xl"
            id="about"
        >
            <h3
            className="text-4xl sm:text-4xl mb-20 md:mb-20 ml-8 md:ml-4 text-white lg:ml-0 md:text-4xl font-bold"
            >
            My Services
            </h3>

            {/* <!-- PRODUCTION --> */}

            <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
                <img
                alt="Ian, the music producer, smiling."
                className="rounded-lg shadow-lg ml-6 w-80 h-50 sm:w-full md:w-full md:pb-20 md:h-74 object-cover col-span-2 hover:scale-105 transition transform"
                src="/musician.jpg"
                />
            </div>
            <div className="space-y-6 md:pb-18 ml-3 text-white">
                <div className="flex gap-5">
                <h3 className="text-2xl ml-4 lg:ml-0 md:text-2xl font-bold">
                    Production
                </h3>
                <button
                    onClick={() => window.location.href="/second-pages/ProductionService/"}
                    className={`p-2 px-2 md:mr-3 lg:ml-17 2xl:ml-43 sm:ml-27 text-sm ml-1 bg-white hover:bg-purple-500 hover:scale-105 transition-all duration-200 ease-in-out text-black hover:text-white rounded-xl 
                    active:bg-purple-600 active:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:text-white focus:bg-purple-600 
                    ${buttonPressed
                        ? `transition-all duration-200 ease-in-out text-black hover:text-white rounded-xl [--tw-text-opacity:1]
                    active:bg-purple-600 active:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:text-white focus:bg-purple-600`
                        : 'bg-white text-black'
                    }
                    `}
                >
                    Schedule you services →
                </button>
                {/* <a
                    className="p-2 px-2 md:mr-3 lg:ml-17 2xl:ml-43 sm:ml-27 text-sm ml-1 bg-white hover:bg-purple-500 hover:scale-105 transition-all duration-200 ease-in-out text-black hover:text-white rounded-xl inline-block [--tw-text-opacity:1]
                    active:bg-purple-600 active:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:text-white focus:bg-purple-600"
                    href="/second-pages/ProductionService/"
                >
                    Schedule you services →
                </a> */}
                </div>
                <p
                className="ml-3 w-85 sm:w-105 md:w-sm text-neutral-300 px-2 pb-30 md:pb-6 lg:pb-20 text-sm md:text-sm lg:ml-0 2xl:w-lg text-text-secondary-light dark:text-text-secondary-dark"
                >
                With over a decade of experience in the music industry, I've had the
                pleasure of working with a diverse range of talented artists. My
                passion is to bring a creative vision to life through sound, ensuring
                every track is polished, powerful, and emotionally resonant.
                </p>
            </div>
            </div>

            {/* <!-- MIX --> */}

            <div className="grid md:grid-cols-2 gap-16 pt-10 md:pt-20 items-center">
            <div className="grid grid-cols-2 gap-4">
                <img
                alt="Ian, the music producer, smiling."
                className="rounded-lg shadow-lg w-80 sm:w-full md:w-full ml-6 md:pb-20 h-50 md:h-74 object-cover col-span-2 hover:scale-105 transition transform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvO-FP2tyOVfu1AMllmHs-llebLJECPRmoTlbRUje1Tn7IvaDddoX8dIswZgfnHDPhRr6rU1lztQ0pn3UPb9JqgCULkR4nycBzcxMvnFa0PQstSuZYm5DVLTBdxQJnBO3tfQLfdNNmZic_7CCgwl23SekgbrrJkpEA4L3If6uF0h-X0RQNEb5D8FZNdeFlX7NSKR43k7c5VQVc4QW9LXfdv2HkTfgG4zOeA5S9ifVXGn_7b5PVoBQcqwutKN54KvEM1rgRda2i5Bpq"
                />
            </div>
            <div className="space-y-6 md:pb-18 ml-3 text-white">
                <div className="flex gap-5">
                <h3 className="text-2xl ml-4 lg:ml-0 md:text-2xl font-bold">Mix</h3>

                <a
                    className="p-2 px-2 text-sm ml-20 lg:ml-38 sm:ml-48 2xl:ml-63 bg-white hover:bg-purple-500 hover:scale-105 text-black hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-600 inline-block [--tw-text-opacity:1]
                active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600"
                    href="/second-pages/MixService/"
                >
                    Schedule you services →
                </a>
                </div>
                <p
                className="ml-3 w-85 sm:w-105 md:w-sm text-neutral-300 pb-30 md:pb-6 lg:pb-20 text-sm md:text-sm lg:ml-0 2xl:w-lg text-text-secondary-light dark:text-text-secondary-dark"
                >
                With over a decade of experience in the music industry, I've had the
                pleasure of working with a diverse range of talented artists. My
                passion is to bring a creative vision to life through sound, ensuring
                every track is polished, powerful, and emotionally resonant.
                </p>
            </div>
            </div>

            {/* <!-- MASTER --> */}

            <div className="grid md:grid-cols-2 gap-16 md:pt-20 items-center">
            <div className="grid grid-cols-2 gap-4">
                <img
                alt="Ian, the music producer, smiling."
                className="rounded-lg shadow-lg ml-6 w-80 h-50 sm:w-full md:w-full md:pb-20 md:h-74 object-cover col-span-2 hover:scale-105 transition transform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIdz9zdC56WvCg9-snJ3nMpWlBemMQOiFZ4O3XrVxS8Lsh5XycsudJyiL6_1Gi0WyWDlCC_ImqN2-j56cEGwSLWMT8g8oHvz5oma2uzywilMVg8qzQ-rW--8NJjdcTfsCP95nacvatA8Jw4ktC9POh05yZviC0cZJRqsPR0lS0ef_nOLm22gGf2dv4FvVCPXXtOX-TfN1xz5h-NJNvmMSeA6jvN6j7tLmkqR3QXCFO5ffOLKIIYKHauOd6muY33X-C_Fi0alG6ISPw"
                />
            </div>
            <div className="space-y-6 md:pb-18 ml-3 text-white">
                <div className="flex gap-5">
                <h3 className="text-2xl ml-4 lg:ml-0 md:text-2xl font-bold">Master</h3>
                <a
                    className="p-2 px-2 text-sm ml-10 md:mr-3 lg:ml-28 sm:ml-38 2xl:ml-53 bg-white hover:bg-purple-500 hover:scale-105 text-black hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-600 inline-block [--tw-text-opacity:1]
                active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600"
                    href="/second-pages/MasterService/"
                >
                    Schedule you services →
                </a>
                </div>
                <p
                className="ml-3 w-85 sm:w-105 md:w-sm text-neutral-300 pb-30 md:pb-6 lg:pb-20 text-sm md:text-sm lg:ml-0 2xl:w-lg text-text-secondary-light dark:text-text-secondary-dark"
                >
                With over a decade of experience in the music industry, I've had the
                pleasure of working with a diverse range of talented artists. My
                passion is to bring a creative vision to life through sound, ensuring
                every track is polished, powerful, and emotionally resonant.
                </p>
            </div>
            </div>

            {/* <!-- BITS --> */}

            <div className="grid md:grid-cols-2 gap-16 md:pt-20 items-center">
            <div className="grid grid-cols-2 gap-4">
                <img
                alt="Ian, the music producer, smiling."
                className="rounded-lg shadow-lg ml-6 w-80 h-50 sm:w-full md:w-full md:pb-20 md:h-74 object-cover col-span-2 hover:scale-105 transition transform"
                src="/mixIan.jpg"
                />
            </div>
            <div className="space-y-6 md:pb-18 ml-3 text-white">
                <div className="flex gap-5">
                <h3 className="text-2xl ml-4 lg:ml-0 md:text-2xl font-bold">Beats</h3>

                <a
                    className="p-2 px-2 text-sm ml-16 lg:ml-37 sm:ml-47 2xl:ml-64 bg-white hover:bg-purple-500 hover:scale-105 text-black hover:text-white rounded-xl transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-600 inline-block [--tw-text-opacity:1]
                active:bg-purple-600 active:text-white focus:text-white focus:bg-purple-600"
                    href="/second-pages/BitsService/"
                >
                    Schedule you services →
                </a>
                </div>
                <p
                className="ml-3 w-85 sm:w-105 md:w-sm text-neutral-300 pb-30 md:pb-6 lg:pb-20 text-sm md:text-sm lg:ml-0 2xl:w-lg text-text-secondary-light dark:text-text-secondary-dark"
                >
                With over a decade of experience in the music industry, I've had the
                pleasure of working with a diverse range of talented artists. My
                passion is to bring a creative vision to life through sound, ensuring
                every track is polished, powerful, and emotionally resonant.
                </p>
            </div>
            </div>
    </section>
        </div>
    )
}