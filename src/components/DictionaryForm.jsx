import React, {Component} from 'react';
import DictionaryList from '../components/DictionaryList';
import AddToDictionary from '../components/AddToDictionary';

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
                        <AddToDictionary
                            handleChange = {this.handleChange.bind(this)}
                            handleSubmit = {this.handleSubmit.bind(this)}
                        />
                        <DictionaryList 
                            items = {this.state.items} 
                            onDelete = {this.deleteWord.bind(this)}/>
                    </div>
                    
                );
        }
}

export default DictionaryForm;