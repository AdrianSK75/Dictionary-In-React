import React, {Component} from 'react';

class DictionaryList extends Component {
    render() {
        let dexURL = 'https://dexonline.ro/definitie/';
        return (
            <ol>
                {this.props.items.map(item => (
                    <li> 
                        {item} 
                        <a href ='#' onClick = {this.props.onDelete.bind(null, item)}>[Delete]</a>
                        <a href ={dexURL + item} >[Search]</a>
                    </li> 
                ))}
            </ol>
        );
    }
}

export default DictionaryList;