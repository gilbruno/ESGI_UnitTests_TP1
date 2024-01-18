import { UserManager } from "../app/users/UserManager"

describe("UserManager", () => {
  let userManager: UserManager
  const mockUser = { id: 1, name: "John Doe", email: "john@example.com" }
  const mockUser2 = { id: 2, name: "Jane Doe", email: "jane@example.com" }

  beforeEach(() => {
    userManager = new UserManager()
  })

  test("adds a new user", () => {
    userManager.addUser(mockUser)
    expect(userManager.getAllUsers()).toContainEqual(mockUser)
  })

  test("throws error when adding a user with an existing ID", () => {
    userManager.addUser(mockUser)
    expect(() => userManager.addUser(mockUser)).toThrow(
      "User ID already exists",
    )
  })

  test("throws error when adding a user with an existing email", () => {
    userManager.addUser(mockUser)
    expect(() =>
      userManager.addUser({ ...mockUser2, email: "john@example.com" }),
    ).toThrow("User email already exists")
  })

  test("removes a user", () => {
    userManager.addUser(mockUser)
    userManager.removeUser(mockUser.id)
    expect(userManager.findUserById(mockUser.id)).toBeUndefined()
  })

  test("updates a user", () => {
    userManager.addUser(mockUser)
    userManager.updateUser(mockUser.id, { name: "Jane Doe" })
    expect(userManager.findUserById(mockUser.id)).toEqual({
      ...mockUser,
      name: "Jane Doe",
    })
  })

  test("finds a user by ID", () => {
    userManager.addUser(mockUser)
    expect(userManager.findUserById(mockUser.id)).toEqual(mockUser)
  })

  test("searches users by name", () => {
    userManager.addUser(mockUser)
    userManager.addUser(mockUser2)
    expect(userManager.searchUsersByName("John")).toContainEqual(mockUser)
    expect(userManager.searchUsersByName("John")).toHaveLength(1)
  })

  test("throws error when updating a non-existent user", () => {
    expect(() => userManager.updateUser(99, { name: "Unknown" })).toThrow(
      "User not found",
    )
  })
})
