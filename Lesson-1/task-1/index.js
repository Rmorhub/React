// <div class="greeting">Hello, React!</div>

const rootElement = document.querySelector('#root');

// DOM option
// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React'

// rootElement.append(greetingElem);

// React option
const greetingElem = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);

ReactDOM.render(greetingElem, rootElement);