import chalk from 'chalk';
import boxen from 'boxen';

// Example data for the boxes
const boxesData = [
  { text: '1', color: 'green', padding: 1, borderStyle: 'double' },
  { text: '2', color: 'yellow', padding: 2, borderStyle: 'round' },
  { text: '3', color: 'blue', padding: 1, borderStyle: 'single' },
  { text: '4', color: 'red', padding: 2, borderStyle: 'double' },
  { text: '5', color: 'cyan', padding: 1, borderStyle: 'round' },
  { text: '6', color: 'magenta', padding: 2, borderStyle: 'classic' },
];

// Create and display boxes
boxesData.forEach(({ text, color, padding, borderStyle }) => {
  const formattedText = chalk[color](text);
  const formattedBox = boxen(formattedText, { padding, borderStyle, borderColor: 'white' });
  console.log(formattedBox);
});
