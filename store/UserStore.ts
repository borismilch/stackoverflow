import { makeAutoObservable } from 'mobx'
import { IUser } from '../models/types'

class UserStore {

  email = '' as string 
  username = '' as string 
  picture = '' as string 
  id = '' as string 
  createdAt = new Date() as Date
  isAuthenteficated = false as boolean
  reputation = 0 as number
  bio = '' as string
  location

  constructor () {
    makeAutoObservable(this)
  }


  setUser ({email, username, picture, id, createdAt, reputation, bio, location}: IUser) {
    console.log(email, username, picture, id, createdAt)
    this.email = email 
    this.username = username 
    this.picture = picture 
    this.id = id 
    this.createdAt = createdAt
    this.isAuthenteficated = true
    this.reputation = reputation
    this.bio = bio ? bio : ''
    this.location = location ? location : ''
  }

  cleanUser () {
    this.email = '' 
    this.username = '' 
    this.picture = '' 
    this.id = '' 
    this.createdAt = new Date()
    this.isAuthenteficated = false
    this.reputation = 0
    this.bio = ''
    this.location = ''
  }
}

export default new UserStore()