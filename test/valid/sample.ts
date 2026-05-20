type User = {
  id: string;
  name: string;
  roles: ReadonlyArray<string>;
};

const createUser = (id: string, name: string, roles: string[] = []): User => ({
  id,
  name,
  roles,
});

const findUser = async (id: string): Promise<User | null> => {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    return null;
  }
  return response.json() as Promise<User>;
};

export {createUser, findUser};
export type {User};
