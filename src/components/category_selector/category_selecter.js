import React from "react";
import {Cascader} from "antd";

const options = [
    {
        value: 'товары',
        label: 'Товары',
        children: [
            {
                value: 'продукты',
                label: 'Продукты'
            },
            {
                value: 'лекарства',
                label: 'Лекарства',
            }
        ]
    },
    {
        value: 'услуги',
        label: 'Услуги',
        children: [
            {
                value: 'барбершоп',
                label: 'Барбершоп'
            },
            {
                value: 'крематорий',
                label: 'Крематорий'
            }
        ]
    }
];

function onChange(value) {
    console.log(value);
}

const CategorySelector = () => {
    return (
        <Cascader options={options} onChange={onChange} placeholder="Please select"/>
    );
}

export default CategorySelector;

