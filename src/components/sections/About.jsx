import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["JavaScript", "HTML", "CSS", "XML", "React", "UI/UX", "Drawing/Art"];
    const backendSkills = ["Python", "C", "C++", "SQL", "Linux", "Java", "JavaScript", "Azure", "Cloud Architecture", "Raspberry Pi", "API Integration", "Git", "Node.js"];
    const scientificTools = ["AutoCAD", "SolidWorks","SciPy", "NumPy", "Pandas", "SpacePy", "PDE2D", "Sensors", "R Commander", "Raspberry Pi"];
    const scientificKnowledge = ["Mechanics", "Plasma Physics", "Quantum Mechanics", "Relativity", "Thermodynamics", "Electromagnetics"];

    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-0">
                            As a recent graduate, I’m eager to grow and gain hands-on experience. I’m especially fascinated by 
                            software development and its role in advancing STEM. For centuries, the pursuit of STEM was 
                            limited by the computational power of the human mind — but today, technology is accelerating both 
                            innovation and understanding. I want to be at the forefront of that progress.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-0">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-2"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]
                                        ">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-1"> Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]
                                        ">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-2"> Scientific Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {scientificTools.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]
                                        ">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-2"> Physics</h3>
                                <div className="flex flex-wrap gap-2">
                                    {scientificKnowledge.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]
                                        ">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> B.S. with a dual major in Computer Science and Physics</strong> - Univeristy of Alberta (2022-2025)
                                </li>
                                <li>
                                    Relevant Coursework: Software Engineering/Development, AI, computational physics, mechanics, optics, electromagnetics, thermodynamics, wave physics, etc.
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 👷‍♂️ Work Experience </h3>
                            <div className="space-y-4 text-gray-300">

                                

                                <div>
                                    <h4 className="font-semibold"> Physics Reseach Assistant (2024)</h4>
                                    <p> Helped with research in ULF plasma waves. Required math (PDEs), numeric methods, etc.</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold"> Summer Engineering Student (2023)</h4>
                                    <p> Duties included creating electrical labels, circuit dafting, designed custom pipe adapter, etc.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};