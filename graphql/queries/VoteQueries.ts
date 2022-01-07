import {gql} from '@apollo/client'

export const VOTE_MUTATION = gql `
  mutation CreateVote($voteInput: VoteInput) {
  createVote(voteInput: $voteInput) {
    id
  }
}
`
