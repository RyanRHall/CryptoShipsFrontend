export const contractUtil = {
  parseName: drizzleContractName => {
    const [ contractName, address ] = drizzleContractName.split(":")
    return { contractName, address }
  },

  generateName: ({ contractName, address }) => (
    `${contractName}:${address}`
  )
}
