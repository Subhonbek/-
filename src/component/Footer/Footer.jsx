import s from './footer.module.css'
import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return (
        <div>
            <footer className={s.foot}>
                <div>
                    <NavLink to={'/aboutUs'}>
                        About us
                    </NavLink>
                    <NavLink to={'/contacts'}>
                        Contacts
                    </NavLink>
                </div>
                <div>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VK_Compact_Logo.svg/190px-VK_Compact_Logo.svg.png'} alt={''}></img>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/80px-Telegram_2019_Logo.svg.png"} alt={''}></img>
                    <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUVfcP///8Acb75/P3w9/sAdMAQf8TQ4fAAeMHi7fYAecGItNt6qtaCsNkAdcALe8IAb748jMlRls2dwOGmxuNoodJJksxxptXE2OzO3+/d6fRXmc+Wu94vh8dhndAlg8a30eiuy+UAabw4s6V1AAAEY0lEQVR4nO3d63aiMBSGYYhSQ1ACSrFSj73/ixxtR+t4ysYYws58749Za2aNmGeJ0EoiURx6ke8BOO8/FA6490jYZKUU/JNl1twUNrWQOgograWYptfCWaF8D+2FqaK6FE6E70G9OJH9K5yFBtwTq3NhU/gej4OK9ExYBnGIuUh9/gpH4e2jh0R6Ek6k78E4SS5PwlWIO+n+xFifhInvsbhJR0fhMMy3YRQlELIPQv5ByD8I+Qch/yDkH4T8g5B/EPIPQv/pSCslpVSH9P5vut2Hgr0WSpkniVrV6/f5/H3felqXq43e/6tI8jw/qM3avgq1ysVmPvtIry7nxodL1MN0tNhWy/G6NG6pn0KVy/l2eMN23dh0xbOHQp0n8wVJx1Oo86i6tWcGI8z1rgWPn1Aly3Y+bsKkph1duAp1MWvtYyXUcvQEkJFQbdrvoayEctXmFMFQqFbP+dgIdfTkK8hGKFKDg7tQfDwN5CGU4+eBPIRvFkAWQkH/VYmnUK1tgByEFsdRHkJlc5hhIbR8Cfsv/DvDNWBhbnGyZyHU2hLYe6HMDAD2wuSp3+sZCe130r4L1Tx0Yb6zFk76LUxanO7Tj90ym1yWGS8+eRVqSeVt11IcLhheZ3wSv8Ka5qvynHAp9E5ehWpC8Q3L3Gaxi1ehrAy4b2Bkt+rTq5D0Q2lpuR7Lr7Ax6Pbtcssn8SoUhEsVb7ZP4ldo/qR7Yb3gzK/Q/BJm1qsi/b4PzcLaelWkT6FWZqH99x94FZq/ceQFo/IqNH+cn9qvbO25sAleOLI93/dfGP5rCKE5CF0GIYS0IHQZhBDSgtBlEEJIC0KXQQghLQitU8ndhPkz78XX/Yd/53+VrBqnDzIKB48evW+4MRJdC+2ndT3OPGrmQsKomQsJnxgzF26DF878zxhyLDTO22MvnAYvfPN/xncrHBAuvvEWpoRB8xZSfjDnLaRMCeMtXBLmE/EWzgkTM3kLKTOmeAuj0IUDyphZC0kzplgLPyjziVgLSTOkWQtJ02tZC98p6xRYC0n3/mEtJE1c5CykDZmzkDa9lrOQdDpkLaxIazE4C2mrTTgL16Rle5yFK9IIvAoJX2H26L/QVl46vwasby1P/ik3rwpaFPcfTlww5HVlF9Zb8Jip8CAIIaQFocsghJAWhC6DEEJaELoMQghpQegyCCGkBaHLIISQFoQugxBCWhC6DEIIaUHoMgghpAWhyyCEkBaELoMQQloQugxCCGlB6DIIIaQFocsghJAWhC6DEEJaELoMQghpQegyCCGkBaHLIHyxMLbfVts6Ef7cCvT7j5X1PU1bP3kXQlWfhBPrO++2rROhXJ6Eo87fiJ0IRXoS0r4b7JV1IVSf8a9wVLxk3PS6EBbpmTBednw47UAoqvhcGI+7JboXiuP3/xyF8bLo8r3oWqiK6ridkzBuamF/r29qLoVaSzH9vctLdLbNJiul6KjEKFx8PblpWWbN2Xaiyw0PuHcJuhIGF4T8+wPmYWvc/HJfQAAAAABJRU5ErkJggg=='} alt={''}></img>
                </div>
                <spav>Team CBK</spav>
            </footer>
        </div>
    );
}

export default Footer;