const text = {
    title:"Title",
    subtitle: "Text display",
    options: ['One', 'Two']
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        text.options.push(option);
        e.target.elements.option.value = '';
        render();
        console.log(text.options.length)
    }
  };
  
  const onRemove = () => {
      text.options = [];
      render();
      console.log(text.options.length)
  };

  const numbers = [55, 101, 1000];
  
  const render = () => {
  const template = (
  <div>
    <h1>{text.title}</h1>
    {text.subtitle && <p>{text.subtitle}</p>}
    <p>{text.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <p>{text.options.length}</p>
    <button onClick={onRemove}>Remove All</button>
    {
        numbers.map((number) => {
            return numbers + 2
        })
    }
    <ol>
    {
        text.options.map((option) => <li key={option}>{option}</li>)
    }
    </ol>
    <form onSubmit={onSubmit}>
    <input type="text" name="option"/>
    <button>Add Option</button>
    </form>
  </div>
  );
  return template
  };
  render();

function App() { return render() }
  
export default App;