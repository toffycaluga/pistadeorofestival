import React from 'react'
import './SocialWebs.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

function SocialWebs() {
  return (
   <div className="social-webs">
    <ul>
        <li><a href="https://www.facebook.com/profile.php?id=100084957461394"><FacebookRoundedIcon/></a></li>
        <li><a href="https://instagram.com/festivalpistadeoro"><InstagramIcon/></a></li>
        {/* <li><a href=""></a></li> */}
    </ul>
   </div>
  )
}

export default SocialWebs
