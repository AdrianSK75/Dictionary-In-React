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

class DictionaryForm extends Component {
        constructor(props) {
            super(props);
            this.state = {items: [], text: ''};
        }
        deleteWord(wordToBeDeleted) {
            const deletingOneOfTheWords = this.state.items.filter((word) => {
                return word != wordToBeDeleted
            });
            this.setState({ items: deletingOneOfTheWords });
        };

        handleChange(e) {
            this.setState({text: e.target.value});
        }

        handleSubmit(e) {
            e.preventDefault();
            //alert(this.state.text);
            var newWord = this.state.text;
            var wordList = this.state.items.concat(newWord);
            this.setState({ items: wordList, text: '' });
        }

        render() {
                return (
                    <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input type="text" onChange = {this.handleChange.bind(this)} value={this.state.text} />
                        <button type="submit"> Add to Dictionary </button>
                    </form>
                    <DictionaryList 
                        items = {this.state.items} 
                        onDelete = {this.deleteWord.bind(this)}/>
                    </div>
                    
                );
        }
}

export default DictionaryForm;