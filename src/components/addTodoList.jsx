/**
 * @author caowencheng <845982120@qq.com>
 * created on 28.03.2017
 */
import React from 'react';
import { connect } from 'react-redux';
import store from '../common/store';

import { changeTodo } from '../action/actions';

class AddTodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }
    componentDidMount() {
        store.subscribe( () => {
            this.setState({
                data : store.getState().todos
            })
        })
    }
    onTodoClick(e) {
        store.dispatch(changeTodo(e.target.id/1));
    }
    render() {
        return (
            <div className = "addTodoList">
                <ul>
                    { this.state.data.map( t => <li key = { t.id } id = { t.id } className = { t.isComplated ? 'isComplated' : ''} onClick = { this.onTodoClick }>{t.text}</li>) }
                </ul>
            </div>
        );
    }
};

AddTodoList = connect()(AddTodoList);

export default AddTodoList;