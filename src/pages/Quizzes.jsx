import React, {useState} from 'react';
import './styles/Quizzes.css';
import CustomQuizCard from '../components/other/CustomQuizCard';
import BackButton from '../components/buttons/BackToMain';
import Footer from '../components/layout/Footer';
import kahoot_img from '../assets/kahoot.png';
import QuizDialog1 from '../components/dialogs/QuizDialog1'

const Quizzes = () => {
    const [openDialog1, setOpenDialog1] = useState(false);
    return (
        <>  
            <BackButton />
            <div className="Quizzes container mt-5">
                <div className="text-center">
                    <h1>Kahoot Quizzes</h1>
                    <h3>Time for some fun!</h3>
                    <hr className="my-4" />
                </div>      
            </div>
            <div className="cards d-flex justify-content-center flex-wrap gap-3">
                <CustomQuizCard image={kahoot_img} title= "Διάλεξη #0" description="Καλημέρα Κόσμε!" onClick={() => setOpenDialog1(true)}/>
                <QuizDialog1 open={openDialog1} onClose={() => setOpenDialog1(false)} />
            </div>
            <Footer />
        </> 
    )
}

export default Quizzes;