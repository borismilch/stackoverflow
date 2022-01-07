export interface IUser {
  email: string 
  picture: string 
  username: string 
  createdAt: Date 
  id?: string 
  reputation?: number
  bio?: string
  location?: string
}

export interface ITabItem {
  val: string 
  Icon: any 
  title: string
}

export interface IFooterItem {
  title: string 
  items: string[]
}

export interface IFormInstance {
  username: string ,
  location: string,
  bio: string
}

export interface IFormQuestionInstance {
  title: string 
  body: string 
  tags: string  
}

export interface IQuetion {
  id: string 
  createdAt: string
  votes: any[] 
  title: string 
  vote: any[]
  body: string 
  tags: string 
  isClosed: boolean
  creatorId: string 
  watched: Number
  comments: IComment[]
  creator: {
    username: string
  }
}

export interface ICommentInput {
  body: string ,
  creatorId: string 
  questionId: string
}

export interface IComment extends ICommentInput {
  id: string 
  createdAt: string
  votes: number 
  vote: any[]
  isClosed: boolean
  watched: Number
  tags?: string
  creator: {
    username: string
  }
}


export interface IVote {
  id: string
  creatorId: string
}