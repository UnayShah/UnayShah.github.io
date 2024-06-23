import ExperienceBlock from "../components/experience_block";

export default function Experience() {
    return (
        <div className='flex flex-col min-h-screen md:ml-[10vh] items-center'>
            <div className="text-2xl font-bold sm:text-3xl self-center mt-2 mb-10 md:mt-5">
                Experience
            </div>
            <div className="flex flex-col flex-1 justify-center">

                <ExperienceBlock logo_path="/photos/Wizerr.png"
                    alt="Wizerr Logo"
                    width={50}
                    height={50}
                    position="Software Developer"
                    location="San Jose, CA, USA"
                    description={"A young fast paced startup building the AI Co-pilot for the electronics industry using the latest in ML technologies."}
                    company_name="Wizerr AI"
                    duration="Jan 2024 - Present" />

                <ExperienceBlock logo_path="/photos/RiaMoneyTransfer.png"
                    alt="Ria Money Transfer Logo"
                    width={50}
                    height={50}
                    position="Software Intern"
                    location="Buena Park, CA, USA"
                    description={["Developing a Python application with Flask to efficiently identify and resolve server errors.",
                        "Leveraging Opsgenie to access failure logs, the program filters issues and runs predefined shell scripts to autonomously fix server issues. Deployed the application on AWS ECS and using GitHub self-hosted runners.",
                        "Enabling quicker response to server issues and replacing manual intervention by Network Operations team.",
                        "Using GitHub actions for CI/CD to create and deploy Docker images and run scripts on runners.",
                        "Built an architecture to allow flexible addition of error descriptions and commands to fix issues."]}
                    company_name="Ria Money Transfer"
                    duration="Jun 2023 - Sep 2023" />

                <ExperienceBlock logo_path="/photos/UCSD.png"
                    alt="UCSD"
                    width={50}
                    height={50}
                    position="Graduate Researcher"
                    location="San Diego, CA, USA"
                    description={"Conducting research under Prof. Cheolhong An to obtain 3D cell models from Phase Contrast microscopy images. "}
                    company_name="University of California, San Diego"
                    duration="Mar 2023 - Sep 2023" />

                <ExperienceBlock logo_path="/photos/OmniSync.png"
                    alt="OmniSync Incorporated Logo"
                    width={50}
                    height={50}
                    position="Software Intern"
                    location="San Diego, CA, USA"
                    description={["Built a Python pipeline to transfer Segment Data logs from Amazon S3 Buckets to an AWS Postgres Database.",
                        "Parsed and organized the data into SQL tables, enabling querying and analysis of metrics for 4 teams.",
                        "Successfully processed and transferred over 300K logs, ensuring efficient and accurate data transfer."]}
                    company_name="OmniSync Incorporated"
                    duration="Jan 2023 - Mar 2023" />

                <ExperienceBlock logo_path="/photos/DeutscheBank.png"
                    alt="Deutsche Bank Logo"
                    width={40}
                    height={40}
                    position="Software Developer"
                    location="Pune, MH, India"
                    description={["Developed an image data extraction application for 50+ document types (US tax forms, loan contracts etc.), serving 10+ teams and processing 1000+ forms daily using Java, Python, OpenCV and Tesseract OCR.",
                        "Independently built a Java backend to create form templates and identify form types using image similarity.",
                        "Utilized OpenCV with YOLO and MRCNN in Python for extracting paragraphs, boxed letters, checkboxes, barcodes, signatures, and bordered tables.",
                        "Implemented signature forgery detection model using Siamese Networks and SIFT Feature Matching, validating signatures on 1000+ documents every hour with 84% accuracy.",
                        "Led engagement with 6 client teams, demonstrating the application's capabilities, gathering valuable feedback, and spearheading customized feature implementations to meet their specific requirements.",
                        "Oversaw and contributed to development of a ReactJS web application with Java Springboot and Python Flask APIs for data extraction and file management services, deployed and maintained on OpenShift Pods and GCP.",
                        "Mentored 3 interns and 4 junior employees, overseeing projects involving spaCy NLP, GCP Document AI, handwritten text OCR, and SciTSR table extraction."]}
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

                <ExperienceBlock logo_path="/photos/DeutscheBank.png"
                    alt="Deutsche Bank Logo"
                    width={40}
                    height={40}
                    position="Software Intern"
                    location="Pune, MH, India"
                    description={["Developed a template creation algorithm to help templatize forms and identify similar forms for data extraction"]}
                    company_name="Deutsche Bank India"
                    duration="May 2019 - Jul 2019" />

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