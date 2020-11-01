import React from "react";
import {Cascader} from "antd";
import "./category_selector.css"
import { api_url } from "../../constants"

function onChange(value) {
    console.log(value);
}


class CategorySelector extends React.Component {
    state = {
        options: null,
    }


    componentDidMount() {
        fetch(`${api_url}/api/business/businesses_list`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    options: result,
                });
            },
        );
    }

    render() {
        console.log(this.state.options);
        return (
            <Cascader className="category-selector"
                      options={this.state.options} size="large"
                      onChange={(value) => this.props.onCategorySelectorChange(value)}
                      placeholder="Что ищем?"
                      allowClear={false}
            defaultValue={['goods', 'pharmacy']}/>
        );
    }
}

export default CategorySelector;