import {useState} from "react";
import Link from 'next/link'
import axios from "axios";
import {API_URL_CREATE_HAPPY} from '../../api/constant';


const FormsReserveHappy = () => {

    const [data, setData] = useState({
              title: "",
              phone: "",
              dateReserve: "",
              timeReserve: "",
              quantity: "",
              comment: ""
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
          url: API_URL_CREATE_HAPPY,
          data: {
              title: data.title,
              phone: data.phone,
              dateReserve: data.dateReserve,
              timeReserve: data.timeReserve,
              quantity: data.quantity,
              comment: data.comment
          }
        });
    };

    return (<>
            <div className="blockForm">
                <form className="row g-3 formReserve" onSubmit={handleSubmit}>
                    <div className="col-xxl-6 mb-3">
                        <input type="text" className="form-control" id="title" name="title" onChange={handleChange} placeholder="Ваше имя" value={data.title} required="required"/>
                    </div>
                    <div className="col-xxl-6 mb-3">
                        <input type="tel" className="form-control" id="phone" name="phone" onChange={handleChange} placeholder="Ваш телефон" value={data.phone} required="required"/>
                    </div>
                    <div className="col-xxl-4 mb-3">
                        <label className="form-label">Выберете дату</label>
                        <input type="date" className="form-control" id="dateReserve" name="dateReserve" onChange={handleChange} value={data.dateReserve} required="required"/>
                    </div>
                    <div className="col-xxl-4 mb-3">
                        <label className="form-label">Желаемое время</label>
                        <input type="time" className="form-control" id="timeReserve" name="timeReserve" onChange={handleChange} value={data.timeReserve} required="required"/>
                    </div>
                    <div className="col-xxl-4 mb-3">
                        <label className="form-label">Количество гостей</label>
                        <input type="number" className="form-control" id="quantity" name="quantity" onChange={handleChange} value={data.quantity} required="required" placeholder="1"/>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" id="comment" placeholder="Комментарий к заказу" name="comment" onChange={handleChange} value={data.comment}/>
                    </div>
                    <div className="text-center">
                    <p>Нажимая на кнопку, вы соглашаетесь с условиями <Link href="/polytics" legacyBehavior><a>политики конфиденциальности</a></Link></p>
                    </div>
                    <button type="submit" className="btn btn-reserve mt-2 z-depth-1">Зарезервировать стол</button>
                </form>
            </div>
    </>);
}

export default FormsReserveHappy;