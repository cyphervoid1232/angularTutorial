export interface Hero {
  id: string
  title: string,
  sex: number, // 0 male, 1 female
  isDie?: boolean
}

export interface Hero1 {
  title: string,
  sex: string, // 0 male, 1 female
  isDie?: boolean,
  image?: string
}