export class EnderecoModel{
  bairro: string;
  cep: string;
  complemento: string;
  localidade: string;
  logradouro: string;
  uf: string;

  constructor(endereco: any){
    this.bairro = endereco.bairro;
    this.cep = endereco.cep;
    this.complemento = endereco.complemento;
    this.localidade = endereco.localidade;
    this.logradouro = endereco.logradouro;
    this.uf = endereco.uf;
  }
}
