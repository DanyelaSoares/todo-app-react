function Dashboard() {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Suas Tarefas</h2>
        <ul className="space-y-2">
          <li className="bg-white p-4 rounded shadow">📌 Estudar React</li>
          <li className="bg-white p-4 rounded shadow">📌 Finalizar projeto GoTasks</li>
          <li className="bg-white p-4 rounded shadow">📌 Revisar lógica de programação</li>
        </ul>
      </div>
    );
  }
  
  export default Dashboard;
  