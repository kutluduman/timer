const args = process.argv.slice(2)
  .filter((time) =>time >= 0)
  .filter((time) => !isNaN(time));

args.forEach(timer => {
  
  setTimeout(() => {
    process.stdout.write('\x07');
  },timer * 1000);

});