import React from "react";
import {Cascader} from "antd";

const options = [
    {
        value: 'goods',
        label: 'Товары',
        children: [
            {
                value: 'food',
                label: 'Продукты'
            },
            {
                value: 'medicine',
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

