import {AiFillFacebook, AiFillGithub, AiFillGoogleCircle, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillTwitterCircle, AiOutlineWhatsApp} from 'react-icons/ai'
import "./SocialButton.css";
const SocialButton = () => {
    
    return (
      
        <div className='contain'>
            <a href="mailto:kavishajayasingha90@gmail.com"><AiFillMail className='social-icon'  style={{'--i':1, color:'white'}}/></a>
            <a href="https://www.linkedin.com/in/kaveesha-jayasingha-b183b5266" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin className='social-icon' style={{'--i':2, color:"white"}} />
            </a>
            <a href="https://github.com/kavisha-jay" target="_blank" rel="noopener noreferrer">
               <AiFillGithub className='social-icon' style={{'--i':3, color:"white"}} />
            </a>
            <a href="https://www.instagram.com/kaveesha.me/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className='social-icon' style={{'--i':4, color:"white"}}/>
            </a>
        </div>
      
    );
}
export default SocialButton;