/**
 * @author caowencheng <845982120@qq.com>
 * created on 24.03.2017
 */
import React from 'react';

const textStyle = {
    background: '#CCC',
    borderRadius: '5px',
    width: '100px'
}

class Text extends React.Component {
    handleClick(){
   		window.location.hash = '#/';
    }
    render() {
        return (
        <div>
            Hello World!!!<br />
            <div onClick = {this.handleClick} style = {textStyle} >跳至index</div>
        </div>
        );
    }
}

export default Text;