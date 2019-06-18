import { contractUtil } from "@src/utils"

export const scholarshipContractNames = state => (
  Object.keys(state.contracts).filter(name => contractUtil.parseName(name).contractName === "Scholarship")
)

export const scholarshipContracts = state => (
  scholarshipContractNames(state).map(name => state.contracts[name])
)

export const drizzleStatus = state => (
  state.drizzleStatus.initialized
)
