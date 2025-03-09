function App() {
  return (
    <div className="text-gray-500 dark:text-gray-400 flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-4xl font-semibold">React + TailwindCSS</h1>
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl">This template uses the following:</h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>React 19</li>
          <li>TailwindCSS</li>
          <li>pnpm</li>
        </ul>
      </div>
      <p>Feel free to edit it to your needs!</p>
    </div>
  );
}

export default App;
