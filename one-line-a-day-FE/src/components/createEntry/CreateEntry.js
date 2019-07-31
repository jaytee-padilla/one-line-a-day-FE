import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Card from './Card';
import EntryForm from './EntryForm';
import api from './services/api/';
import './CreateEntry.scss';

function EditForm(props) {
  //destructured: getting editPost out of our props object
  const { editEntry, match, buttonText } = props;
  const id = match.params.id;
  const { initialEntry, setInitialEntry } = useState(null);
  //useEffect will fire to get our api whenever the id changes(i.e. whenever we get a new post)
  useEffect(() => {
    api.getEntry(id)
      .then(res => {
        setInitialEntry(res.data);
      });
  }, [id]);
  if(initialEntry === null) {
    return <div>Loading...</div>;
  }
  return (
    <EntryForm {...props}
      initialEntry={initialEntry}
      submitEntry={props.editEntry}
      buttonText={buttonText}
    />
  );
}
function CreateEntry() {
  const [entries, setEntries] = useState([
    // { userId: 1234, id: 0, title: 'Day One', date: 'July 29, 2019' },
    // { userId: 1234, id: 1, title: 'Day Two', date: 'July 30, 2019' },
  ]);
  const [error, setError] = useState('');
  useEffect(() => {
    api.getEntries()
      .then(res => {
        //console.log(res);
        setEntries(res.data);
      })
      .catch(error => {
        console.log('error occurred', error);
      })
  }, [error]);
  //addEntry fxn
  const addEntry = entry => {
    //send post to the api URL every time we submit a post on our form and add the post object to it
    api.addEntry(entry)
      .then(res => {
        // console.log(res)
        setEntries([...entries, res.data]);
      });
  };
  //editEntry fxn
  const editEntry = editedEntry => {
    api.editEntry(editedEntry.id, editedEntry)
      .then(res => {
        //want to make changes on our copy of `entries` array called `entriesCopy`.
        const entriesCopy = [...entries];
        //searching for a speciic entry in our array that needs to be edited.
        const oldEntry = entriesCopy.find(entry => entry.id === editedEntry.id);
        // console.log(editedEntry, oldEntry);
        Object.assign(oldEntry, editedEntry);
        setEntries(entriesCopy);
      });
  };

  return (
    <div className="CreateEntry">
      <div className="Header">
        <h1>One Line a Day</h1>
      </div>
      <div className='formField'>
        <EntryForm setEntries={setEntries} />
        {entries.map(entry => <Card entry={entry} />)}
      </div>
      <div className="Entry">
        <div className="Link-text">
          <Link to='/'>Home</Link>
          <Link to='/add'>Add Entry</Link>
        </div>
        {/* add entry route */}
        <div className="Route-text">
          <Route path='/add'
            render={props => <EntryForm {...props}
              submitEntry={addEntry}
              buttonText='Add Entry'
            />} />
          <Route exact path='/' render={props => entries.map(entry => <Card entry={entry} />)} />
          {/* edit entry route */}
          <Route path='/edit/:id'
            render={props => <EditForm {...props}
              editEntry={editEntry}
              submitEntry={editEntry}
              buttonText='Edit Entry'
            />}
          />
        </div>
      </div >
    </div>
  );
}

export default CreateEntry;


