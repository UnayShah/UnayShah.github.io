import SkillsBlock from "../components/skills_block";

export default function Skills() {
    const skills = [
        {
            skill_name: "Python",
            logo_path: "/skills_logos/python.svg",
            alt: "Python",
            skill_level: 3
        },
        {
            skill_name: "Java",
            logo_path: "/skills_logos/java.svg",
            alt: "Java",
            skill_level: 3
        },
        {
            skill_name: "C++",
            logo_path: "/skills_logos/c++.svg",
            alt: "C++",
            skill_level: 3
        },
        {
            skill_name: "JavaScript",
            logo_path: "/skills_logos/javascript.svg",
            alt: "JavaScript",
            skill_level: 1
        },
        {
            skill_name: "PyTorch",
            logo_path: "/skills_logos/pytorch.svg",
            alt: "PyTorch",
            skill_level: 2
        },
        {
            skill_name: "TensorFlow",
            logo_path: "/skills_logos/tensorflow.svg",
            alt: "TensorFlow",
            skill_level: 2
        },
        {
            skill_name: "OpenCV",
            logo_path: "/skills_logos/opencv.svg",
            alt: "OpenCV",
            skill_level: 2
        },
        {
            skill_name: "NumPy",
            logo_path: "/skills_logos/numpy.svg",
            alt: "NumPy",
            skill_level: 2
        },
        {
            skill_name: "React",
            logo_path: "/skills_logos/react.svg",
            alt: "React",
            skill_level: 2
        },
        {
            skill_name: "Spring",
            logo_path: "/skills_logos/spring.svg",
            alt: "Spring",
            skill_level: 2
        },
        {
            skill_name: "Flask",
            logo_path: "/skills_logos/flask.svg",
            alt: "Flask",
            skill_level: 2
        },
        {
            skill_name: "Android",
            logo_path: "/skills_logos/android.svg",
            alt: "Android",
            skill_level: 1
        },
        {
            skill_name: "Git",
            logo_path: "/skills_logos/git.svg",
            alt: "Git",
            skill_level: 1
        },
        {
            skill_name: "GitHub",
            logo_path: "/skills_logos/GitHub.svg",
            alt: "GitHub",
            skill_level: 1
        },
        {
            skill_name: "MySQL",
            logo_path: "/skills_logos/mysql.svg",
            alt: "MySQL",
            skill_level: 1
        },
        {
            skill_name: "TailwindCSS",
            logo_path: "/skills_logos/tailwindcss.svg",
            alt: "TailwindCSS",
            skill_level: 1
        },
    ]

    const skill_blocks = skills.map((value, index) => {
        return <SkillsBlock key={index} skill_name={value.skill_name} logo_path={value.logo_path} alt={value.alt} skill_level={value.skill_level} />
    });
    return (
        <div className='flex flex-col min-h-screen w-full items-center'>
            <div className="text-2xl font-bold sm:text-3xl self-center mt-2 mb-10 md:mt-5">
                Skills
            </div>

            <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {skill_blocks}
            </div>
        </div>
    )
}