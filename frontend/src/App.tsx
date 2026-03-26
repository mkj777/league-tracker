import "./App.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>CLIMB.GG</h1>
        </div>
        <div className="flex">
          <Input />
          <Button className="ml-1">Search</Button>
        </div>
      </section>
    </>
  );
}

export default App;
