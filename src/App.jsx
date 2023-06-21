import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const todo = {
        id: uuidv4(),
        title: newTodo,
      };

      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (id) => {

    console.log(todos)
    console.log(id)

    todos.forEach((t) =>{
      //console.log(t)
      if(t.id === id){
        //console.log("1")
        setCompletedTasks((completedTasks) => [...completedTasks,t]);
      }
    })
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

    // console.log(todos)
    // console.log(completedTasks)
    
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    //console.log(todos)
  };

  const handleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto py-8 flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-white mb-8">Todo App</h1>
        <div className="w-96 mx-auto bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center">
            <input
              type="text"
              className="w-full p-2 rounded-lg border-2 border-gray-200 focus:outline-none"
              placeholder="Add a new todo"
              value={newTodo}
              onChange={handleInputChange}
            />
            <button
              className="ml-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              onClick={handleAddTodo}
            >
              Add
            </button>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              className="mr-2"
              checked={showCompleted}
              onChange={handleShowCompleted}
            />
            <label className="text-gray-700">Show Completed Tasks</label>
          </div>
          <ul className="mt-4">
            {todos.map((todo) => {
              return (
                <li
                  key={todo.id}
                  className={`flex items-center justify-between bg-gray-100 p-2 rounded-lg mb-2`}
                >
                  
                  <span className="mr-2">{todo.title}</span>
                  <button
                    className="text-green-600 hover:text-red-800"
                    onClick={() => handleToggleComplete(todo.id)}
                  >
                    <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                        />
                      </svg>
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M13.707 6.293a1 1 0 011.414 0l.647.646a1 1 0 010 1.414l-6.005 6.005a2 2 0 01-2.83 0L4.93 9.353a1 1 0 010-1.414l.647-.647a1 1 0 011.414 0L9 8.586l2.293-2.293a1 1 0 011.414 0zM4 5a1 1 0 011-1h2.586l2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V8.414l-2 2V17a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm2-1a1 1 0 100-2 1 1 0 000 2z"
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
          {showCompleted && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Completed Tasks</h2>
              <ul className="mt-2">
                {completedTasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex items-center bg-gray-200 p-2 rounded-lg mb-2"
                  >
                    <span className="mr-2">{task.title}</span>

                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
