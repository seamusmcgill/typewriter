const sentence = "hello there from lighthouse labs";
// Set an initial delay amount outside of the loop
let delay = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  // Iterate the delay by 50ms each loop
  delay += 50;
}
// Output a newline character after all the characters have been printed
setTimeout(() => {
  process.stdout.write("\n");
}, delay);