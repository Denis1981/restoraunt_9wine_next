import {useState} from "react";
import Link from 'next/link'
import axios from "axios";
import InputMask from 'react-input-mask';
import {API_URL_CREATE_CALL} from '../../api/constant';

const FormsCall = () => {

    const [data, setData] = useState({
              title: "",
              phone: "",
    });

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e) => {
        axios({
          method: 'post',
          url: API_URL_CREATE_CALL,
          data: {
              title: data.title,
              phone: data.phone,
          }
        });
    };

    return (<>
            <div className="blockForm">
                <form className="row g-3 formReserve" onSubmit={handleSubmit}>
                    <div className="col-xxl-12 mb-3">
                        <input type="text" className="form-control" id="title" name="title" onChange={handleChange} placeholder="Ваше имя" value={data.title} required="required"/>
                    </div>
                    <div className="col-xxl-12 mb-3">
                        <InputMask mask="+7\ 999 999 9999" type="tel" className="form-control" id="phone" name="phone" onChange={handleChange} placeholder="Ваш телефон" value={data.phone} required="required"/>
                    </div>
                    <div className="text-center">
                    <p>Нажимая на кнопку, вы соглашаетесь с условиями <Link href="/polytics" legacyBehavior><a>политики конфиденциальности</a></Link></p>
                    </div>
                    <button type="submit" className="btn btn-reserve mt-2 z-depth-1">Заказать звонок</button>
                </form>
            </div>
    </>);
}

export default FormsCall;