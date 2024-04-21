const relationOfLocationAndBranch = [
  {
    id: '1',
    name: 'banani',
    branchesId: ['1', '2', '5'],
  },
  {
    id: '2',
    name: 'mohakhali',
    branchesId: ['1', '4'],
  },
  {
    id: '3',
    name: 'kochukhet',
    branchesId: ['2', '1'],
  },
  {
    id: '4',
    name: 'mirpur 14',
    branchesId: ['2', '1'],
  },
  {
    id: '5',
    name: 'gulshan 1',
    branchesId: ['4', '5'],
  },
  {
    id: '6',
    name: 'gulshan 2',
    branchesId: ['5', '4'],
  },
  {
    id: '7',
    name: 'bashundhara',
    branchesId: ['6', '7'],
  },
  {
    id: '8',
    name: 'jamuna future park',
    branchesId: ['7', '6'],
  },
  {
    id: '9',
    name: 'shewrapara',
    branchesId: ['3'],
  },
];

module.exports = { relationOfLocationAndBranch };
