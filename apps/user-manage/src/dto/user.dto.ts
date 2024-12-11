export interface CreateUserDto {
  email: string;
  password: string;
}

export interface FindOneUserDto {
  id: number;
  email: string;
}

export interface UpdateUserDto {
  id: number;
  name: string;
  email: string;
  password: string;
}
