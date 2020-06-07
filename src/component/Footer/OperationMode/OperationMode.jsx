import React from 'react';
import mod from './OperationMode.module.sass';

const OperationMode = (props) => {

    let operationMode = props.footer.operationMode;

    return (
        <div className={mod.operationMode}>
            <div className={mod.item1}>{operationMode[0]}</div>
            <div className={mod.item2}>{operationMode[1]}</div>
            <div className={mod.item3}>{operationMode[2]}</div>
        </div>
    );
};

export default OperationMode;