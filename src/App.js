// makes visible false by default
let visible = false;

// function to toggle visible 
const toggleVisibility = () => {
    // !visible flips the false value
    visible = !visible;
};

// Title
// toggleVisibility button
// {visibile is true ? this mssg : if not this one}
// {visible is true && render <p>}
const visibility = (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggleVisibility}>
    {visible ? 'hide details' : 'show details'}
    </button>
    {visible && (
        <div>
        <p>Hey Hey</p>
        </div>
    )}
    </div>
);

function App() { return visibility }
  
export default App;