import './index.css';
import './App.css';  // Mantenha o import do App.css
import { useState } from 'react';
import InputField from './components/InputField';
import TaskList from './components/TaskList';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert('Preencha os campos!');
    }
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setTasks([]);
  setNewTask('');
  };

  return (
    <div className="bg-container">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">GoTasks</h1>

      {!isLoggedIn ? (
        <>
          <p className="text-center text-gray-600 mb-6">Bem-vindo(a) ao seu gerenciador de tarefas!</p>
          <form className="form-container" onSubmit={handleLogin}>
            <InputField
              label="Usuário"
              type="text"
              placeholder="Digite seu usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Entrar
            </button>
          </form>
        </>
      ) : (
        <>
          
          <form className="flex gap-2 mb-4" onSubmit={handleAddTask}>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Digite uma nova tarefa"
            />
            <button
              type="submit"
              className="w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Adicionar
            </button>
            
          </form>

          <TaskList tasks={tasks} onDelete={handleDeleteTask} />

          <button
            onClick={handleLogout}
            className="w-auto mx-auto bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors mb-4"
>
            Sair
          </button>
          
        </>
        
      )}
    </div>
  );
}

export default App;
