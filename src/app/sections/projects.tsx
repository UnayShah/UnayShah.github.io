import { PanoramaPhotosphereSelect } from "@mui/icons-material"
import ProjectsBlock from "../components/projects_blocks"

export default function Projects() {
    return (
        <div className='flex flex-col w-full items-center m-5'>
            <div className="text-2xl font-bold sm:text-3xl self-center mt-2 md:mt-5 mb-2 md:mb-5">
                Projects
            </div>

            <ProjectsBlock title="Visual Inertial SLAM"
                description="Used IMU and image feature data to perform SLAM on a car using Extended Kalman Filter to optimize position."
                link={["https://github.com/UnayShah/Visual-Inertial_SLAM"]}
                link_text={["GitHub Repo"]}
                image_src="/icons/projects/EKF.png"
                key="Visual Inertial SLAM" />

            <ProjectsBlock title="Particle Filter SLAM"
                description="Performed SLAM of a differential drive robot in a room equipped with Encoder wheels, IMU and LiDAR data, using particle filtering to improve results. Used Kinect data for texture mapping to project images captured by the robot on a map of the floor traversed by the robot."
                link={["https://github.com/UnayShah/Particle-Filter-SLAM"]}
                link_text={["GitHub Repo"]}
                image_src="/icons/projects/diff.png"
                key="Particle Filter SLAM" />

            <ProjectsBlock title="Panorama Creation from IMU data"
                description="Stabilized linear velocity data from Inertial Measurement Unit (IMU) and verified results with Vicon data. Used the resulting measurements to track camera orientation and build panorama images with projection mapping."
                link={["https://github.com/UnayShah/Panorama-From-IMU-Data"]}
                link_text={["GitHub Repo"]}
                icon={PanoramaPhotosphereSelect}
                key="Orientation Mapping and Panorama Creation from IMU data" />

            <ProjectsBlock title="Determination of Toxicity of Metal Oxide Nanoparticles Using Regression, Supervised by Dr. Sukanta Mondal"
                description="Built linear regression models with Sklearn in Python to identify properties responsible for toxicity of metal oxides. Studied correlation between properties to reduce dimensions and predict a numerical value of toxicity."
                key="Determination of Toxicity of Metal Oxide Nanoparticles Using Regression, Supervised by Dr. Sukanta Mondal" />

            <ProjectsBlock title="Countdown Timer Android App"
                description="Built an Android app in Java to run consecutive custom interval timers useful for workouts."
                link={["https://github.com/UnayShah/CountdownTimer", "https://play.google.com/store/apps/details?id=com.UnayShah.countdownTimer"]}
                link_text={["GitHub Repo", "Playstore"]}
                image_src="/icons/projects/countdowntimer.jpg"
                key="Countdown Timer Android App" />
        </div >
    )
}