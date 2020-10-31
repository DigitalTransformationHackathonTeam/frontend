import React from "react";
import {Cascader} from "antd";
import "./category_selector.css"

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
        <Cascader className="category-selector" options={options} size="large" onChange={onChange} placeholder="Что ищем?"/>
    );
}

export default CategorySelector;

