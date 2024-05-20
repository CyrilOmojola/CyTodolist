import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingContent, setEditingContent] = useState('');

  const addTodo = () => {
    if (newTitle.trim() !== '' && newContent.trim() !== '') {
      setTodos([...todos, { id: Date.now(), title: newTitle, content: newContent }]);
      setNewTitle('');
      setNewContent('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id, title, content) => {
    setEditingId(id);
    setEditingTitle(title);
    setEditingContent(content);
  };

  const editTodo = () => {
    setTodos(todos.map(todo => 
      todo.id === editingId ? { ...todo, title: editingTitle, content: editingContent } : todo
    ));
    setEditingId(null);
    setEditingTitle('');
    setEditingContent('');
  };

  return (
    
    

    <>
      <div className='mother'>
        <div className='form'>
          <h1>To Do List</h1>
          <div className="inputs">
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className='items' placeholder='Title'/>

            <input type="text" value={newContent} onChange={(e) => setNewContent(e.target.value)}  className='items' placeholder='Content'/>

            <button type='submit' onClick={addTodo} className='add'>Add</button>

          </div>

        
          

          <ul>
          {todos.map(todo => (
            <p key={todo.id}>
              {editingId === todo.id ? (
                <>
                  <input 
                    type="text" 
                    value={editingTitle} 
                    onChange={(e) => setEditingTitle(e.target.value)} 
                    placeholder="Title"
                  />
                  <input 
                    type="text" 
                    value={editingContent} 
                    onChange={(e) => setEditingContent(e.target.value)} 
                    placeholder="Content"
                  />
                  <button onClick={editTodo}>Save</button>
                </>
              ) : (
                <>
                
                  <div className='outcome'>
                    <strong>{todo.title}</strong>
                    <p>{todo.content}</p>
                  

                    <div className='outcome-i'>
                      <button className='edit' onClick={() => startEditing(todo.id, todo.title, todo.content)}>Edit</button>
                      
                      <button className='delete' onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                  </div>

                </>
              )}
            </p>
          ))}
          </ul>

        </div>

      </div>
    
        
    
    
    
    
    
    
    
    </>
  );
}

export default App;
