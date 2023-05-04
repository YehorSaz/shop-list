import React from 'react';

import {TiPlusOutline} from "react-icons/ti";

const Lists = () => {

    return (

        <div className={'lists'}>
            <h1>Lists</h1>

            <div className={'list-buttons'}>

                <div className={'mic-button'}>

                    <button className={'new-item-button'}>
                        MIC
                    </button>

                </div>

                <div className={'plIcon'}>
                    <TiPlusOutline className={'list-plus-icon'}/>
                </div>

            </div>

        </div>
    );
};

export {Lists}