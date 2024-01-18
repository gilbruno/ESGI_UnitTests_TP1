type User = {
    id: number
    name: string
    email: string
  }
  
  export class UserManager {
    private users: User[] = []
  
    addUser(user: User): void {
      if (this.users.some((u) => u.id === user.id)) {
        throw new Error("User ID already exists")
      }
      if (this.users.some((u) => u.email === user.email)) {
        throw new Error("User email already exists")
      }
      this.users.push(user)
    }
  
    removeUser(id: number): void {
      this.users = this.users.filter((user) => user.id !== id)
    }
  
    findUserById(id: number): User | undefined {
      return this.users.find((user) => user.id === id)
    }
  
    updateUser(id: number, updatedData: Partial<User>): void {
      const userIndex = this.users.findIndex((user) => user.id === id)
      if (userIndex === -1) {
        throw new Error("User not found")
      }
      this.users[userIndex] = { ...this.users[userIndex], ...updatedData }
    }
  
    searchUsersByName(name: string): User[] {
      return this.users.filter((user) => user.name.includes(name))
    }
  
    getAllUsers(): User[] {
      return this.users
    }
  }
  