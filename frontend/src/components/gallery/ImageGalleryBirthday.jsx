import {useState} from "react";
import { Image } from 'antd';
import {imageDataBirth} from '../../constants/data';

const ImageGalleryCelebrates = () => {

    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className="col-xxl-5">
                <Image
                    width={400}
                    src=""
                    className="BirthdayPage5_image_1"
                />
            </div>
            <div className="col-xxl-2">
                <Image
                    width={400}
                    src=""
                    className="BirthdayPage5_image_2"
                />
            </div>
            <div className="col-xxl-5">
                <Image
                    width={400}
                    src=""
                    className="BirthdayPage5_image_3"
                />
            </div>
            <div className="col-xxl-6">
                <Image
                    width={400}
                    src=""
                    className="BirthdayPage5_image_4"
                />
            </div>
            <div className="col-xxl-6">
                <Image
                    width={400}
                    src=""
                    className="BirthdayPage5_image_5"
                />
            </div>
            <div className="col-xxl-5">
                <Image
                    width={400}
                    src=""
                    className="BirthdayPage5_image_6"
                />
            </div>
            <div className="col-xxl-2">
                <Image
                    width={400}
                    src=""
                    className="BirthdayPage5_image_7"
                />
            </div>
            <div className="col-xxl-5">
                <Image
                    width={400}
                    src=""
                    className="BirthdayPage5_image_8"
                />
            </div>      
            
        </>);
};

export default ImageGalleryCelebrates;
