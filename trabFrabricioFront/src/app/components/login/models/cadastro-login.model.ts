export class CadastroLoginModel{
  nome: string;
  email: string;
  senha: string;
  endereco: EnderecoModel;
  tipoUsuario: number;

  constructor(cadastro: any){
    this.nome = cadastro.nome;
    this.email = cadastro.email;
    this.senha = cadastro.senha;
    this.endereco = cadastro.endereco;
    this.tipoUsuario = cadastro.tipoUsuario;
  }
}
