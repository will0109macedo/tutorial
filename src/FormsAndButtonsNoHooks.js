const text = {
    title:"Title",
    subtitle: "Text display",
    options: ['One', 'Two']
  };

  // handles onClick={onSubmit} (e) is the event that is getting sent
  const onSubmit = (e) => {
    // prevents the page from reloading
    e.preventDefault();
    // e.target = form, element = what we get from the form
    // option = input name, value = to get input value
    const option = e.target.elements.option.value;
    // if theres an option that got sent
    if(option) {
      // push option into options
        text.options.push(option);
        // return value to ''
        e.target.elements.option.value = '';
        // re rendering purposes
        render();
        console.log(text.options.length)
    }
  };
  
  // remove button
  const onRemove = () => {
    // renders the text.options array empty
      text.options = [];
      render();
      console.log(text.options.length)
  };

  // makes a random number
  const onMake = () => {
    // Math.floor rounds up the number
    // Math.random() picks a random number
    // multiplies by the length of the array
    const randomNum = Math.floor(Math.random() * text.options.length);
    // text.options is for the array, randomNum is pulling number
    // randomNum by itself renders name of the obj
    // text.options[randomNum] pulls the number
    const option = text.options[randomNum];
    // brings option out in alert mssg
    alert(option);
  };

  // array of numbers
  const numbers = [55, 101, 1000];
  
  // re rendering purposes
  const render = () => {
    // {text.title} you already know
    // && check if theres a subtitle if there is it renders if not nah
    // array > 0 ? if yes this : if not this
    // remove button
    // onMake button that is disabled if the array is equal to 0
    // number.map((number)) gets each obj of the array and assigns it to number
    // same thing but with text array
    const template = (
  <div>
    <h1>{text.title}</h1>
    {text.subtitle && <p>{text.subtitle}</p>}
    <p>{text.options.length > 0 ? 'Here are your options' : 'No options'}</p> 
    <button onClick={onRemove}>Remove</button>
    <button disabled={text.options.length === 0} onClick={onMake}>Number</button>
    {
        numbers.map((number) => <p key={number}>Number: {number + 2}</p>       
        )
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
  // form = onSubmit
  // input type="text" for the type of input, name to be use else where
  // button to render the form
  return template
  };
  render();

function App3() { return render() }
  
export default App3;