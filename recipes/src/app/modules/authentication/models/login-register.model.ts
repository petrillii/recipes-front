export class LoginRegisterModel{
  constructor(username: string, password: string, email: string) {
    this.username = username
    this.password = password
    this.email = email
  }
  username: string;
  password: string;
  email: string;
}
