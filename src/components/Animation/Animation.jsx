import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Animation.css';


const Animation = () => {
    const [text] = useTypewriter({
        words:['A Web Developer', 'A Designer', 'A Undergrauate student'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return(
        <>
        <h1 className='ani'>
        <span className="text" style={{fontWeight:'bold'}}>
           {text}
        </span>
        <span className='cursor'>
          <Cursor cursorStyle='|'/>
        </span>
        
      </h1>

      
        </>
    );
}

export default Animation;