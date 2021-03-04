import React, { useReducer } from 'react';
import ShowArea from './showArea';
import Buttons from './Buttons';
import { Color } from './color'; 

function Example7(){
    return (
        <div>
                <Color>

                <ShowArea />
                <Buttons />
                </Color>
        </div>
    )
}

export default Example7