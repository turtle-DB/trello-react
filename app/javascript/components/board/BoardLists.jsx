import React from 'react';

import List from './../list/List';

function BoardLists(props) {
    return (
        <main>
            <div id="list-container" className="list-container">
                <div id="existing-lists" className="existing-lists">
                    <List />
                </div>
                <div id="new-list" className="new-list"><span>Add a list...</span>
                    <input type="text" placeholder="Add a list..." />
                    <div>
                        <input type="submit" className="button" value="Save" /><i className="x-icon icon"></i>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BoardLists;
