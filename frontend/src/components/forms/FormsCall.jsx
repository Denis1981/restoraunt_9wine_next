import React from "react";
import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import {API_URL_CREATE_CALL} from '../../api/constant';
import "./index.css";

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
        //e.preventDefault();
        axios({
          method: 'post',
          url: API_URL_CREATE_CALL,
          data: {
              title: data.title,
              phone: data.phone,
          }
        });
        // console.log(data)
    };

    return (<>
            <div className="blockForm">
                <form className="row g-3 formReserve" onSubmit={handleSubmit}>
                    <div className="col-xxl-12 mb-3">
                        <input type="text" className="form-control" id="title" name="title" onChange={handleChange} placeholder="Ваше имя" value={data.title} required="required"/>
                    </div>
                    <div className="col-xxl-12 mb-3">
                        <input type="tel" className="form-control" id="phone" name="phone" onChange={handleChange} placeholder="Ваш телефон" value={data.phone} required="required"/>
                    </div>
                    <div className="text-center">
                        <p>Нажимая на кнопку, вы соглашаетесь с условиями <Link to="/polytics">политики конфиденциальности</Link></p>
                    </div>
                    <button type="submit" className="btn btn-reserve mt-2 z-depth-1">Заказать звонок</button>
                </form>
            </div>
    </>);
}

export default FormsCall;