//           CREATED BY SEBASTIAN VARKEY 
//
// # FEEL FREE TO USE ANY PART OF CODE
// ## FOR HELP CONTACT ME ON DISCORD
// ## Contact    [ https://discord.com/users/891002113134563428 ]
// ## Support Server [ https://discord.com/invite/apF2ZBXZVF ]
const activitiesList = [
  { name: 'Total Members', type: 'WATCHING', showMembers: true },
  { name: 'Ingame Name Cash', type: 'PLAYING', showMembers: false },
  { name: 'you type /apply', type: 'LISTENING', showMembers: false }
];

function getRandomActivity() {
  const randomActivity = activitiesList[Math.floor(Math.random() * activitiesList.length)];
  return randomActivity;
}

module.exports = { getRandomActivity };
