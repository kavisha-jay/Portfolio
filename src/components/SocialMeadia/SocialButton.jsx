import {AiFillFacebook, AiFillGithub, AiFillGoogleCircle, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillTwitterCircle, AiOutlineWhatsApp} from 'react-icons/ai'
import "./SocialButton.css";
const SocialButton = () => {
    
    return (
      
        <div className='contain'>
            <a href="mailto:kavishajayasingha90@gmail.com"><AiFillMail className='social-icon'  style={{'--i':1}}/></a>
            <AiFillLinkedin className='social-icon' style={{'--i':2}}/>
            <AiFillGithub className='social-icon' style={{'--i':3}}/>
            <AiFillInstagram className='social-icon' style={{'--i':4}}/>
        </div>
      
    );
}
export default SocialButton;