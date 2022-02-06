import PropTypes from 'prop-types';

const ProfileComponent=({fullName,bio,profession,handelName,children})=>{

    
    return(
        <div style={{textAlign:'center', paddingTop:'200',flexDirection:'inlineBlock'}}> 
         <h1 style={{fontSize:'40px'}}>My name is {fullName.firstName} {fullName.lastName}</h1>
         <h2 style={{fontSize:'30px', color:'orange' }}>I'am a {profession}</h2>
         <h4 style={{color : 'grey', fontSize:'20px' }}>Passionate about writing clean, readable, and reusable code? <br/>
        Interested in building web applications with technologies? <br/></h4>
        <h3 style={{fontSize:'30', color:'orange'}}>{bio}</h3>
        
        <div>{children}</div>
       
       <button style= {{color:'blue', padding:'250'}} onClick={()=>handelName(fullName.firstName)}>Alert me</button> 

        </div>
    );
}
ProfileComponent.defaultProps={
    bio:'contact me'

}
ProfileComponent.propTypes = {
    profession : PropTypes.string
}

export default ProfileComponent;