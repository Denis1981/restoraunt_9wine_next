import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from "axios";
import {logoFooter} from '../../assets';
import {API_URL_CONTACTS} from '../../api/constant';
import Image from 'next/image'

const NavbarMobile = () => {

    const [contacts, setContacts]=useState([]);

     useEffect(()=>{
        const getContacts = async () => {
            const res = await axios.get(API_URL_CONTACTS);
            setContacts(res.data);
        }
        getContacts()
    }, []);

    return (
            <>
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/" legacyBehavior>
                        <a>
                        <Image 
                            src={ logoFooter } 
                            className="logo" 
                            alt="" 
                            title=""
                        />
                        </a>
                    </Link>
                </div>
               <input type="checkbox" id="overlay-input" />
               <label htmlFor="overlay-input" id="overlay-button"><span/></label>
                {
                  contacts.map((contacts, i) => (
                <div id="overlay" key={contacts.id}>
                    <ul>
                        <li className="nav-item inner-logo">
                            <Link className="navbar-brand" href="/" legacyBehavior>
                                <a>
                                    <Image 
                                        src={logoFooter} 
                                        className="logo" 
                                        alt="" 
                                        title=""
                                    />
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/" legacyBehavior><a>Главная</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about" legacyBehavior><a>О нас</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/menu" legacyBehavior><a>Меню ресторана</a></Link>
                       </li>
                       <li className="nav-item">
                            <Link className="nav-link" href="/articles" legacyBehavior><a>Блог</a></Link>
                       </li>
                         <li className="nav-item">
                            <Link className="nav-link" href="/celebrates" legacyBehavior><a>Мероприятия</a></Link>
                       </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/reviews" legacyBehavior><a>Отзывы</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contacts" legacyBehavior><a>Контакты</a></Link>
                        </li>
                       <li className="nav-item">
                            <button type="button" className="btn btn-reserve z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">зарезервировать стол</button>
                        </li>
                        <li className="nav-item">
                            <Link href={contacts.vk} rel="nofollow" legacyBehavior>
                                <a><svg className="t-sociallinks__svg" width="40px" height="40px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z" fill="#000000"/></svg></a>
                            </Link>
                            <Link href={contacts.telegram} rel="nofollow" legacyBehavior>
                                <a><svg className="t-sociallinks__svg" width="40px" height="40px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#000000"/></svg></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <p dangerouslySetInnerHTML={{ __html: contacts.address}} className="address"/>
                            <p><a href={`tel: ${contacts.phone}`}>{contacts.phone}</a></p>
                        </li>
                    </ul>
                </div>
                    ))
                }
            </>
        )
}

export default NavbarMobile;