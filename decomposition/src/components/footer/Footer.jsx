import React from 'react'
import FooterWeather from './FooterWeather'
import FooterInfoBlocks from './FooterInfoBlocks';

export default function Footer(props) {
    const {data} = props;


  return (
    <div className='footer'>
        <div className="footerColmn">
            <FooterWeather data={data.weather} />
            <FooterInfoBlocks data={data.info_blocks[0]} />
        </div>
        <div className="footerColmn1">
            <FooterInfoBlocks data={data.info_blocks[1]} />
            <FooterInfoBlocks data={data.info_blocks[2]} />
        </div>
        <div className="footerColmn1">
            <FooterInfoBlocks data={data.info_blocks[3]} />
        </div>
        
    </div>
  )
}

/**
 * Этот элемент фомрирует весь нижний блок
 */