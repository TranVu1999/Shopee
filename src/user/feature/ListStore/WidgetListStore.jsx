import React from 'react';
import PropTypes from 'prop-types';

// Components
import WidgetListStoreByLetter from './WidgetListStoreByLetter';

WidgetListStore.propTypes = {
    listStore: PropTypes.array,
};

WidgetListStore.defaultProps = {
    listStore: []
}

function WidgetListStore(props) {
    const {listStore} = props;
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"];

    const splitListStore = () =>{
        const tempListStore = [...listStore];

        let listStoreByLetter = [];
        for(let letter of letters){
            let store = {
                key: letter,
                listStore: []
            }

            for(let i = 0; i < tempListStore.length; i++){
                if(letter === tempListStore[i].title.charAt(0).toUpperCase()){
                    store.listStore.push(tempListStore[i]);
                    tempListStore.splice(i, 1);
                    i--;
                }
            }

            listStoreByLetter.push(store);
        }

        return listStoreByLetter;
    }

    // Render
    const renderListStoreByLetter = () =>{
        const listStoreByLetter = splitListStore();

        let elm = [];
        for(let item of listStoreByLetter){
            if(item.listStore.length > 0){
                elm.push(
                    <WidgetListStoreByLetter 
                        key = {item.key} 
                        letter = {item.key}
                        listStore = {item.listStore}
                    />
                );
                elm.push(<hr className="my-5"/>)
            }
        }
        return elm;
    }

    return (
        <>{renderListStoreByLetter()}</>
    );
}

export default WidgetListStore;