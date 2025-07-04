import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return <section 
                id="projects" 
                className="min-h-screen flex items-center justify-center py-20"
            >
                <RevealOnScroll>
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                            Featured Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2"> Electrostatic Simulation</h3>
                                <p className="text-gray-400 mb-4"> 
                                    3D Python simulation of the electric field for two charged particles.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["Python","Plotly","NumPy"].map((tech,key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition
                                        ">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a 
                                    href="https://colab.research.google.com/drive/1bXOY70Qgv5JOoN7DJKWXbiRlVendjpRa#scrollTo=FxJR9XWEDS35" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    > 
                                        View Project →  
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2"> Portfolio Website (this website)</h3>
                                <p className="text-gray-400 mb-4"> 
                                    Built website for work to show my knowledge and experience.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React","Node.js","Vite", "Javascript"].map((tech,key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition
                                        ">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a 
                                    href="https://github.com/MichaelCode1/michaeltech-portfolio" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    > 
                                        View Project →  
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2"> Binary Game AI Bot</h3>
                                <p className="text-gray-400 mb-4"> 
                                    Developed an AI bot for Binary Game (similar to Go) with a team. 90% win rate.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["AI","Python"].map((tech,key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition
                                        ">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a 
                                    href="#" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    > 
                                        Please ask for details.
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2"> Drawings & Artwork</h3>
                                <p className="text-gray-400 mb-4"> 
                                    Check out my instagram artwork page!
                                    Follow me and let me know what you think.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["Drawing"].map((tech,key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition
                                        ">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a 
                                    href="https://www.instagram.com/ephemerisdrawings/" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    > 
                                        View Project →
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2"> Hohmann Transfer (LEO to GEO)</h3>
                                <p className="text-gray-400 mb-4"> 
                                    Simulated and visualized a Hohmann transfer 
                                    from LEO to GEO with user-defined rocket parameters. Example shown using SpaceX Starship.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["Python","Orbital Analysis","NumPy", "SciPy"].map((tech,key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition
                                        ">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a 
                                    href="https://github.com/MichaelCode1/Hohmann-Transfer-LEO-to-GEO-" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    > 
                                        View Project →  
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </RevealOnScroll>
            </section>
};