import './App.css';
import vadoo from './images/vadoo.png';

function Partfirst() {
    return (
        <div className='Part-first'>
            <div className='Part-1'>
            <div className='square-3'></div>
            <div className='square-4'></div>
            <div className='square-5'></div>
            <h1>Work Experience</h1>
            <img src={vadoo} className='vadoo'/>
            <div className='vadoo-1'>
            <h2>
                Worked as User interface designer  responsible for creating interactive programs that enhance a customer's experience with a brand  on the business's website.
            </h2>
            </div>
            </div>
        </div>
    );

}

export default Partfirst;