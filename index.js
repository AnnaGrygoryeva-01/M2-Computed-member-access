/**
 * Prompts the user to enter family data and constructs a family object.
 *
 * This function takes no arguments; it gathers data via browser prompts.
 *
 * @returns {Object} An object where keys are family roles and values are names.
 */
function createFamily() {
  const family = {};
  let count;

  while (true) {
    count = Number(prompt("Enter the number of your family members (min. 2):"));
    if (isNaN(count) || count < 2) {
      Number(alert("Munimum number is 2"));
    } else break;
  }
  for (let i = 0; i < count; i++) {
    let role = prompt(`Enter their role ${i + 1} (eg: mother, sister, dog):`);
    let name = prompt(`Enter name for "${role}":`);
    if (role && name) {
      family[role] = name;
    } else {
      alert("Space can't be empty, try again.");
      i--;
    }
  }
  return family;
}
const myFamily = createFamily();
console.log(myFamily);
