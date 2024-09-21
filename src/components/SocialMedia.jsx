import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faSnapchat, faLinkedinIn, faTwitter , faFacebook ,faWhatsapp} from
'@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../assets/social.css'
import { Link } from 'react-router-dom';
library.add(faFacebook,faInstagram, faTiktok, faSnapchat, faLinkedinIn, faTwitter , faWhatsapp);

const SocialMediaLinks = () => {
return (
<div className="flex gap-3">
    <Link href="https://www.instagram.com/snc.ltd?igsh=ODEwODVmeXhwdGh6" target="_blank" className="social dark:bg-white">
    <FontAwesomeIcon icon={['fab', 'instagram' ]}  className=" hover:text-secondaryDark dark:text-secondaryDark" />
    </Link>
    <Link href="https://www.tiktok.com/@snc.contractoring?is_from_webapp=1&sender_device=pc" target="_blank"
        className="social dark:bg-white">
    <FontAwesomeIcon icon={['fab', 'tiktok' ]} className=" hover:text-secondaryDark dark:text-secondaryDark" />
    </Link>
    <Link href="https://www.snapchat.com/add/snc_contracting?share_id=BIecBAVNNRQ&locale=en-US" target="_blank"
        className="social dark:bg-white">
    <FontAwesomeIcon icon={['fab', 'snapchat' ]} className=" hover:text-secondaryDark dark:text-secondaryDark" />
    </Link>
    <Link href="https://www.linkedin.com/company/snccontracting/" target="_blank" className="social dark:bg-white">
    <FontAwesomeIcon icon={['fab', 'linkedin-in' ]} className=" hover:text-secondaryDark dark:text-secondaryDark" />
    </Link>
    <Link href="https://x.com/shamnet_est" target="_blank" className="social dark:bg-white">
    <FontAwesomeIcon icon={['fab', 'twitter' ]} className=" hover:text-secondaryDark dark:text-secondaryDark" />
    </Link>
    <Link href="https://www.facebook.com/profile.php?id=100085714115930" target="_blank"
        className="social dark:bg-white">
    <FontAwesomeIcon icon={['fab', 'facebook' ]} className=" hover:text-secondaryDark dark:text-secondaryDark" />
    </Link>
    <Link to="https://wa.me/+966112426668" target="_blank" rel="noopener noreferrer" className="social dark:bg-white"
        onClick={(e)=> {
    e.preventDefault();
    window.open('https://wa.me/+966112426668', '_blank');
    }}>
    <FontAwesomeIcon icon={['fab', 'whatsapp' ]} className=" hover:text-secondaryDark dark:text-secondaryDark" />
    </Link>
</div>
);
};

export default SocialMediaLinks;
