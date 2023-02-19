import {useState} from "react";
import { Image } from 'antd';

const ImageGalleryCelebrates = () => {

    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className="col-xxl-5">
                <Image
                    src="/birth1.webp"
                    className="BirthdayBlock5_image_1 z-depth-1"
                />
            </div>
            <div className="col-xxl-2">
                <Image
                    src="/birth2.webp"
                    className="BirthdayBlock5_image_2 z-depth-1"
                />
            </div>
            <div className="col-xxl-5">
                <Image
                    src="/birth3.webp"
                    className="BirthdayBlock5_image_3 z-depth-1"
                />
            </div>
            <div className="col-xxl-6">
                <Image
                    src="/birth4.webp"
                    className="BirthdayBlock5_image_4 z-depth-1"
                />
            </div>
            <div className="col-xxl-6">
                <Image
                    src="/birth5.webp"
                    className="BirthdayBlock5_image_5 z-depth-1"
                />
            </div>
            <div className="col-xxl-5">
                <Image
                    src="/birth6.webp"
                    className="BirthdayBlock5_image_6 z-depth-1"
                />
            </div>
            <div className="col-xxl-2">
                <Image
                    src="/birth7.webp"
                    className="BirthdayBlock5_image_7 z-depth-1"
                />
            </div>
            <div className="col-xxl-5">
                <Image
                    src="/birth8.webp"
                    className="BirthdayBlock5_image_8 z-depth-1"
                />
            </div>      
        </>);
};

export default ImageGalleryCelebrates;
