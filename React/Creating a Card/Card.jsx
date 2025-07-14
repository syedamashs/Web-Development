import profilepic from './assets/Amash-Profile.png'

export default function Card(){
    return(
        <div className='card'>
        <img className='card-image' src={profilepic} alt="Profile-Picture"></img>
        <h2 className='card-title'>SYED AMASH S</h2>
        <p className='card-p'>Professional Pre-Final Year IT Engineer with Prior Programming Knowledge( DSA,Full Stack, Cloud, Mobile App ) </p>
        </div>
    );
}

