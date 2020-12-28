const messages = [
  'Santiago',
  'Ana',
  'Viviana',
  'Cristian',
  'Geraldine',
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()*
    messages.length)];
    console.log(message);
};

module.exports = {randomMsg};