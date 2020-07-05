import React from 'react';
import mod from './Specification.module.sass';

const Specification = () => {

    return <div >
        <div className={mod.productSpecification}>
            <div className={mod.productSpecificationBlock}>
                <div className={mod.productSpecificationTitle}>Общая информация</div>
                <div className={mod.productSpecificationContent}>
                    <div className={mod.productSpecificationContentBlock}>
                        <span>Дата выхода на рынок</span>
                        <span>2014</span>
                    </div>
                    <div className={mod.productSpecificationContentBlock}>
                        <span>Тип</span>
                        <span>Ноутбук</span>
                    </div>
                    <div className={mod.productSpecificationContentBlock}>
                        <span>Назначение</span>
                        <span>Для учебы</span>
                    </div>
                </div>
            </div>
            <div className={mod.productSpecificationBlock}>
                <div className={mod.productSpecificationTitle}>Экран</div>
                <div className={mod.productSpecificationContent}>
                    <div className={mod.productSpecificationContentBlock}>
                        <span>Диагональ экрана, дюймов</span>
                        <span>15,6</span>
                    </div>
                    <div className={mod.productSpecificationContentBlock}>
                        <span>Макс. разрешение экрана, точек</span>
                        <span>1366x768</span>
                    </div>
                    <div className={mod.productSpecificationContentBlock}>
                        <span>Тип матрицы экрана</span>
                        <span>TN+Film</span>
                    </div>
                    <div className={mod.productSpecificationContentBlock}>
                        <span>Сенсорный экран</span>
                        <span>Нет</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Specification;