import React from 'react'

function CarouselCard() {
  return (
    <div className="relative font-inter antialiased">
    <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
            <section className="px-12">
                <div className="max-w-lg mx-auto relative">

                    <input id="article-01" type="radio" name="slider" className="sr-only peer/01"/>
                    <input id="article-02" type="radio" name="slider" className="sr-only peer/02"/>
                    <input id="article-03" type="radio" name="slider" className="sr-only peer/03" checked/>
                    <input id="article-04" type="radio" name="slider" className="sr-only peer/04"/>
                    <input id="article-05" type="radio" name="slider" className="sr-only peer/05"/>
    
                    <div className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/01:[&_article]:ring
                        peer-focus-visible/01:[&_article]:ring-indigo-300
                        peer-checked/01:relative
                        peer-checked/01:z-50
                        peer-checked/01:translate-x-0
                        peer-checked/01:scale-100
                        peer-checked/01:[&>label]:pointer-events-none
                        peer-checked/02:-translate-x-20
                        peer-checked/02:scale-[83.75%]
                        peer-checked/02:z-40
                        peer-checked/03:-translate-x-40
                        peer-checked/03:z-30
                        peer-checked/04:-translate-x-40                    
                        peer-checked/04:opacity-0
                        peer-checked/05:-translate-x-40
                    ">
                        <label className="absolute inset-0" htmlFor="article-01"><span className="sr-only">Focus on the big picture</span></label>
                        <article className="bg-white p-6 rounded-lg shadow-2xl">
                            <header className="mb-2">
                                <img className="inline-flex rounded-full shadow mb-3" src="https://cruip-tutorials.vercel.app/card-slider/icon.svg" width="44" height="44" alt="Icon" />
                                <h1 className="text-xl font-bold text-slate-900">Focus on the big picture</h1>
                            </header>
                            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                                <p>
                                    Many desktop publishing packages and web page editors now use Pinky as their default model text, and a search for more variants will uncover many web sites still in their infancy.
                                </p>
                                <p>
                                    All the generators tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                </p>
                            </div>
                            <footer className="text-right">
                                <a className="text-sm font-medium text-indigo-500 hover:underline" href="#0">Read more</a>
                            </footer>
                        </article>
                    </div>
    
                    <div className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/02:[&_article]:ring
                        peer-focus-visible/02:[&_article]:ring-indigo-300                        
                        peer-checked/01:translate-x-20
                        peer-checked/01:scale-[83.75%]
                        peer-checked/01:z-40
                        peer-checked/02:relative
                        peer-checked/02:z-50
                        peer-checked/02:translate-x-0
                        peer-checked/02:scale-100
                        peer-checked/02:[&>label]:pointer-events-none
                        peer-checked/03:-translate-x-20
                        peer-checked/03:scale-[83.75%]
                        peer-checked/03:z-40
                        peer-checked/04:-translate-x-40
                        peer-checked/04:z-30
                        peer-checked/05:-translate-x-40 
                        peer-checked/05:opacity-0
                    ">
                        <label className="absolute inset-0" htmlFor="article-02"><span className="sr-only">Focus on the big picture</span></label>
                        <article className="bg-white p-6 rounded-lg shadow-2xl">
                            <header className="mb-2">
                                <img className="inline-flex rounded-full shadow mb-3" src="https://cruip-tutorials.vercel.app/card-slider/icon.svg" width="44" height="44" alt="Icon" />
                                <h1 className="text-xl font-bold text-slate-900">Focus on the big picture</h1>
                            </header>
                            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                                <p>
                                    Many desktop publishing packages and web page editors now use Pinky as their default model text, and a search for more variants will uncover many web sites still in their infancy.
                                </p>
                                <p>
                                    All the generators tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                </p>
                            </div>
                            <footer className="text-right">
                                <a className="text-sm font-medium text-indigo-500 hover:underline" href="#0">Read more</a>
                            </footer>
                        </article>
                    </div>
    
                    <div className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/03:[&_article]:ring
                        peer-focus-visible/03:[&_article]:ring-indigo-300                          
                        peer-checked/01:translate-x-40
                        peer-checked/01:z-30
                        peer-checked/02:translate-x-20
                        peer-checked/02:scale-[83.75%]
                        peer-checked/02:z-40
                        peer-checked/03:relative
                        peer-checked/03:z-50
                        peer-checked/03:translate-x-0
                        peer-checked/03:scale-100
                        peer-checked/03:[&>label]:pointer-events-none
                        peer-checked/04:-translate-x-20
                        peer-checked/04:scale-[83.75%]
                        peer-checked/04:z-40
                        peer-checked/05:-translate-x-40
                        peer-checked/05:z-30                  
                    ">
                        <label className="absolute inset-0" htmlFor="article-03"><span className="sr-only">Focus on the big picture</span></label>
                        <article className="bg-white p-6 rounded-lg shadow-2xl">
                            <header className="mb-2">
                                <img className="inline-flex rounded-full shadow mb-3" src="https://cruip-tutorials.vercel.app/card-slider/icon.svg" width="44" height="44" alt="Icon" />
                                <h1 className="text-xl font-bold text-slate-900">Focus on the big picture</h1>
                            </header>
                            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                                <p>
                                    Many desktop publishing packages and web page editors now use Pinky as their default model text, and a search for more variants will uncover many web sites still in their infancy.
                                </p>
                                <p>
                                    All the generators tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                </p>
                            </div>
                            <footer className="text-right">
                                <a className="text-sm font-medium text-indigo-500 hover:underline" href="#0">Read more</a>
                            </footer>
                        </article>
                    </div>
    
                    <div className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/04:[&_article]:ring
                        peer-focus-visible/04:[&_article]:ring-indigo-300                          
    
                        peer-checked/01:translate-x-40 
                        peer-checked/01:opacity-0
                        
                        peer-checked/02:translate-x-40
                        peer-checked/02:z-30
                        
                        peer-checked/03:translate-x-20
                        peer-checked/03:scale-[83.75%]
                        peer-checked/03:z-40
    
                        peer-checked/04:relative
                        peer-checked/04:z-50
                        peer-checked/04:translate-x-0
                        peer-checked/04:scale-100
                        peer-checked/04:[&>label]:pointer-events-none
                        
                        peer-checked/05:-translate-x-20
                        peer-checked/05:scale-[83.75%]
                        peer-checked/05:z-40
                    ">
                        <label className="absolute inset-0" htmlFor="article-04"><span className="sr-only">Focus on the big picture</span></label>
                        <article className="bg-white p-6 rounded-lg shadow-2xl">
                            <header className="mb-2">
                                <img className="inline-flex rounded-full shadow mb-3" src="https://cruip-tutorials.vercel.app/card-slider/icon.svg" width="44" height="44" alt="Icon" />
                                <h1 className="text-xl font-bold text-slate-900">Focus on the big picture</h1>
                            </header>
                            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                                <p>
                                    Many desktop publishing packages and web page editors now use Pinky as their default model text, and a search for more variants will uncover many web sites still in their infancy.
                                </p>
                                <p>
                                    All the generators tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                </p>
                            </div>
                            <footer className="text-right">
                                <a className="text-sm font-medium text-indigo-500 hover:underline" href="#0">Read more</a>
                            </footer>
                        </article>
                    </div>  
                    
                    <div className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/05:[&_article]:ring
                        peer-focus-visible/05:[&_article]:ring-indigo-300                          
                        peer-checked/01:translate-x-40 
                        peer-checked/02:translate-x-40 
                        peer-checked/02:opacity-0
                        peer-checked/03:translate-x-40
                        peer-checked/03:z-30
                        peer-checked/04:translate-x-20
                        peer-checked/04:scale-[83.75%]
                        peer-checked/04:z-40
                        peer-checked/05:relative
                        peer-checked/05:z-50
                        peer-checked/05:translate-x-0
                        peer-checked/05:scale-100
                        peer-checked/05:[&>label]:pointer-events-none
                    ">
                        <label className="absolute inset-0" htmlFor="article-05"><span className="sr-only">Focus on the big picture</span></label>
                        <article className="bg-white p-6 rounded-lg shadow-2xl">
                            <header className="mb-2">
                                <img className="inline-flex rounded-full shadow mb-3" src="https://cruip-tutorials.vercel.app/card-slider/icon.svg" width="44" height="44" alt="Icon" />
                                <h1 className="text-xl font-bold text-slate-900">Focus on the big picture</h1>
                            </header>
                            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                                <p>
                                    Many desktop publishing packages and web page editors now use Pinky as their default model text, and a search for more variants will uncover many web sites still in their infancy.
                                </p>
                                <p>
                                    All the generators tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                </p>
                            </div>
                            <footer className="text-right">
                                <a className="text-sm font-medium text-indigo-500 hover:underline" href="#0">Read more</a>
                            </footer>
                        </article>
                    </div>                  
                </div>
            </section>
        </div>

    </main>
    <footer className="absolute left-6 right-6 md:left-12 md:right-auto bottom-4 md:bottom-8 text-center md:text-left">
        <a className="text-xs text-slate-500 hover:underline" href="https://cruip.com">&copy;Cruip - Tailwind CSS templates</a>
    </footer>

    {/* <div className="fixed bottom-0 right-0 w-full md:bottom-6 md:right-12 md:w-auto z-50" :className="bannerOpen ? '' : 'hidden'" x-data="{ bannerOpen: true }">
        <div className="bg-slate-800 text-sm p-3 md:rounded shadow flex justify-between">
            <div className="text-slate-500 inline-flex">
                <a className="font-medium hover:underline text-slate-300" href="https://cruip.com/creating-a-css-only-card-slider-with-tailwind-css/" target="_blank">
                    Read Tutorial
                </a>
                <span className="italic px-1.5">or</span>
                <a className="font-medium hover:underline text-indigo-500 flex items-center" href="https://github.com/cruip/cruip-tutorials/blob/main/card-slider/index.html" target="_blank" rel="noreferrer">
                    <span>Download</span>
                    <svg className="fill-indigo-400 ml-1" xmlns="http://www.w3.org/2000/svg" width="9" height="9">
                        <path d="m1.649 8.514-.91-.915 5.514-5.523H2.027l.01-1.258h6.388v6.394H7.158l.01-4.226z" />
                    </svg>
                </a>
            </div>
            <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-slate-700" @click="bannerOpen = false">
                <span className="sr-only">Close</span>
                <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                    <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
                </svg>
            </button>
        </div>
    </div> */}

</div>
  )
}

export default CarouselCard