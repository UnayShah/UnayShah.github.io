import ExperienceBlock from "../components/experience_block";

export default function Experience() {
    return (
        <div className='flex flex-col min-h-screen w-full items-center'>
            <div className="text-2xl font-bold sm:text-3xl self-center mt-2 mb-10 md:mt-5">
                Experience
            </div>
            <div className="flex flex-col flex-1 justify-center">
                <ExperienceBlock logo_path="/photos/OmniSync.png"
                    alt="OmniSync Incorporated Logo"
                    width={50}
                    height={50}
                    position="Software Intern"
                    location="San Diego, CA, USA"
                    description={["Transferred Segment Data logs from Amazon S3 Buckets to AWS Postgres Database.",
                        "Successfully processed and transferred 300K+ logs, tracking file creation data and other metadata.",]}
                    company_name="OmniSync Incorporated"
                    duration="Jan 2023 - Mar 2023" />
                
                <ExperienceBlock logo_path="/photos/DeutscheBank.png"
                    alt="Deutsche Bank Logo"
                    width={40}
                    height={40}
                    position="Software Developer"
                    location="Pune, MH, India"
                    description={["Developed an application to extract data from images of forms, like US tax forms, German sick notes, loan contracts etc.",
                    "Worked on OpenCV, YOLO, MRCNN and Siamese Networks along with Java, Python, React, SQL, APIs, Google Cloud, Openshift, SpringBoot and Flask.",
                    "Demonstrated application capabilities to client teams.",
                    "Mentored 3 interns and 4 junior employees over a period of 2 years."]}
                    company_name="Deutsche Bank India"
                    duration="Aug 2020 - Jun 2022" />

                <ExperienceBlock logo_path="/photos/Samsung.png"
                    alt="Samsung Logo"
                    width={40}
                    height={40}
                    position="Software Intern"
                    location="Bengaluru, KA, India"
                    description={["Optimized the retrieval, storage and processing of Samsung Payments log files for error monitoring in AWS S3 Resilient Distibuted Dataset (RDD).",
                    "Created filters for Spark to process log files. Designed a partitioning schema to improve log file retrieval.",
                    "Built a dashboard in Scala to monitor service health and error frequency."]}
                    company_name="Samsung Research Institute"
                    duration="Jan 2020 - Jun 2020" />

                <ExperienceBlock logo_path="/photos/Zconnect.png"
                    alt="ZConnect Logo"
                    width={40}
                    height={40}
                    position="Graphic Designer"
                    location="Goa, India"
                    description={["Designed logos, T-shirts and in-app elements with Adobe Illustrator.",
                "Clicked and used stock photos to create marketing material with Photoshop."]}
                    company_name="ZConnect - Hyperlocal"
                    duration="Aug 2017 - May 2019" />

                <ExperienceBlock logo_path="/photos/LeNest.png"
                    alt="LeNest Logo"
                    width={40}
                    height={40}
                    position="Intern"
                    location="Mumbai, MH, India"
                    description={["Used Google Apps Script to build an appointment reminder system to send e-mails and SMS to patients.",
                "Assisted in YouTube content creation and digital marketing by designing thumbnails and clicking photos."]}
                    company_name="LeNest Hospital"
                    duration="May 2018 - Jun 2018" />
            </div>
        </div>
    )
}