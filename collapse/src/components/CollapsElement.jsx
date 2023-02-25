import React from 'react'
import { Collapse } from 'react-collapse'

export default function CollapsElement(props) {
    const {value} = props;
    let boolValue = '';

    if (value == 'expandedLabel'){
        boolValue=false;
    } else {
        boolValue=true
    }

  return (
    <div className='CollapseBlock'>
        <Collapse isOpened={boolValue}>
            <div>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</div>
        </Collapse>
      
    </div>
  )

}
