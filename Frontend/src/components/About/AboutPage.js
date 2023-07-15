import styles from "./AboutPage.module.css";
import {
    Box,
    Image,
    Text,

} from "@chakra-ui/react";
export default function AboutPage() {
    return (
        <Box className={styles.background}  >
            <Box style={{ marginTop: "130px", marginBottom: "30px" }}>
                <Box style={{ marginLeft: "32%",marginRight: "20%" }}>
                    <Image width='500px' height='250px' src='images/about.png' alt='About' />
                </Box>
                <Box style={{ marginLeft: "22%", marginRight: "22%", marginTop: "50px" }}>
                    <Text fontSize='xl'>
                        We have successfully developed a cutting-edge learning platform that offers users curated links to the finest courses and engaging tech trivia. By providing access to the best resources, we aim to empower users in enhancing their knowledge and skills effectively.

                        To further enhance the learning experience, we have seamlessly integrated a state-of-the-art GPT-powered AI chatbot. This intelligent chatbot is designed to address users' technical doubts promptly and accurately, ensuring a smooth and interactive learning journey.

                        With our learning platform, users can explore a vast array of curated links to access high-quality courses that cater to their specific interests and goals. They can also engage in tech trivia to test their knowledge and learn in a fun and engaging way.

                        Our AI chatbot leverages the power of GPT to provide personalized and contextually relevant responses to users' technical queries. It acts as a reliable virtual assistant, offering valuable guidance and support throughout the learning process.

                        Overall, our learning platform combines curated resources, engaging tech trivia, and an AI chatbot to create an immersive and effective learning environment, empowering users to enhance their knowledge and skills in a convenient and interactive manner.
                        <br/>
                        Courses : <br/>
                        Engage in productive discussions and receive prompt assistance for your doubts with Seria, our AI-powered chatbot. Seria is equipped with advanced natural language processing capabilities to provide accurate and helpful responses tailored
                        <br/>
                        Seria - AI Chatbot : <br/>
                        Seria, our AI-powered chatbot, is your go-to resource for addressing technical doubts and receiving reliable assistance. With its advanced capabilities, Seria is capable of understanding and responding to your specific technical queries, providing accurate and helpful information. Say goodbye to confusion and hello to clarity as you engage in meaningful conversations with Seria to overcome any obstacles in your learning process.
                        <br/>
                        Tech Trivia : <br/>
                        Put your knowledge and technical skills to the test by engaging in our interactive technical quizzes encompassing a wide range of subjects. Challenge yourself with thought-provoking questions and evaluate your understanding of various technical concepts. Our platform offers an engaging way to enhance your knowledge and measure your proficiency in different subject areas through these informative quizzes.
                        <br/>
                    </Text>
                </Box>
            </Box>
        </Box>
    );

}