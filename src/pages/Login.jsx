function Login({ onLogin }) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">GoTasks</h1>
          <p className="text-center text-gray-600 mb-6">Bem-vindo(a) ao seu gerenciador de tarefas!</p>
  
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onLogin(); // simulação de login
            }}
          >
            <input type="text" placeholder="Usuário" className="w-full px-4 py-2 border rounded-lg" />
            <input type="password" placeholder="Senha" className="w-full px-4 py-2 border rounded-lg" />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;
  