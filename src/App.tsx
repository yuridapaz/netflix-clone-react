import React from 'react';
import Button from './components/button';

function App() {
  return (
    <>
      <h1>New Site</h1>
      <h6>button test</h6>
      <div className="flex flex-col w-full gap-6 bg-slate-700 p-6">
        <Button variant="primary" size="small">
          Primary S
        </Button>
        <Button variant="primary" size="medium">
          Primary M
        </Button>
        <Button variant="primary" size="large">
          Primary L
        </Button>
        <Button variant="secondary" size="small">
          Secondary S
        </Button>
        <Button variant="secondary" size="medium">
          Secondary M
        </Button>
        <Button variant="secondary" size="large">
          Secondary L
        </Button>
        <Button variant="red" size="small">
          Red Button S
        </Button>
        <Button variant="red" size="medium">
          Red Button M
        </Button>
        <Button variant="red" size="large">
          Red Button L
        </Button>
        <Button variant="outline" size="small">
          Outlined S
        </Button>
        <Button variant="outline" size="medium">
          Outlined M
        </Button>
        <Button variant="outline" size="large">
          Outlined L
        </Button>
      </div>
    </>
  );
}

export default App;
