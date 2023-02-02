import React from "react";
import { Link } from "react-router-dom";
export function CompatiblePair(props) {
    // const navigate = useNavigate();
    const allZodiac = props.allZodiac;
    const yourImage = allZodiac[props.yourSign - 1].zodiacImage ? `${props.img}horoscope/${allZodiac[props.yourSign - 1].zodiacImage}` : '';
    const yoursign = `${allZodiac[props.yourSign - 1].zodiacSign}`;
    const yourSlug = `${allZodiac[props.yourSign - 1].signSlug}`;
    console.log("ChildCompability:", props);

    return (

        allZodiac ? allZodiac?.map((data, index) => {
            return (
                <div className="col-md-4 col-lg-3 col-6" key={index} >
                    <div className="aries_compatibility_with_other_image_section">
                        <Link className={'mouse_pointer'} to={`/compatibility/${yourSlug}/${data.signSlug}`}>
                            <img src={yourImage} alt={data.zodiacSign} height={50} width={50} loading="lazy" />
                            <img src={`${props.img}horoscope/${data.zodiacImage}`} alt={data.zodiacSign} height={50} width={50} loading="lazy" /></Link>

                    </div>
                    <div className={'compatibility_link aries_virgo'} data-x={props.yourSign} data-y={data.c_id} onClick={props.childClick
                    } data-slug={`${yourSlug}/${data.signSlug}`}>  {yoursign} &amp;&nbsp;
                        {data.zodiacSign}</div>

                </div >
            )
        }) : ''


    )
}