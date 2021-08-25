const inquirer = require('inquirer');
const createEscrow = require('./functions/alice/create-escrow.js');
const fundEscrow = require('./functions/alice/fund-escrow.js');
const releaseFunds = require('./functions/alice/release-funds.js');
const setEscrowMultisig = require('./functions/alice/set-escrow-multisig.js');
const signFundsRelease = require('./functions/alice/sign-funds-release.js');
const withdraw = require('./functions/bob/withdraw.js');

const start = async () => {
  try {
    const whoAreYou = [
      {
        type: 'list',
        name: 'whois',
        message: 'Sei Alice o Bob?',
        choices: ['Alice', 'Bob']
      }
    ];

    const { whois } = await inquirer.prompt(whoAreYou);

    if (whois === 'Alice') {
      const aliceActions = [
        {
          type: 'list',
          name: 'action',
          message: 'Scegli una operazione dal menu',
          choices: [
            {
              name: 'Crea account escrow',
              value: 'createEscrow'
            },
            {
              name: 'Configura firma congiunta su conto escrow',
              value: 'setEscrowMultisig'
            },
            {
              name: 'Trasferisci fondi verso accont escrow',
              value: 'fundEscrow'
            },
            {
              name: 'Prepara transazione per sblocco dei fondi',
              value: 'releaseFunds'
            },
            {
              name: 'Firma lo sblocco dei fondi',
              value: 'signFundsRelease'
            }
          ]
        }
      ];

      const { action } = await inquirer.prompt(aliceActions);

      switch (action) {
        case 'createEscrow':
          createEscrow();
          break;
        case 'setEscrowMultisig':
          setEscrowMultisig();
          break;
        case 'fundEscrow':
          fundEscrow();
          break;
        case 'releaseFunds':
          releaseFunds();
          break;
        case 'signFundsRelease':
          signFundsRelease();
          break;
      }
    } else {
      const bobActions = [
        {
          type: 'list',
          name: 'action',
          message: 'Scegli una operazione dal menu',
          choices: [
            {
              name: 'Controfirma transazione sblocco fondi ed trasferisci soldi',
              value: 'withdraw'
            }
          ]
        }
      ];

      const { action } = await inquirer.prompt(bobActions);

      switch (action) {
        case 'withdraw':
          withdraw();
          break;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

start();
