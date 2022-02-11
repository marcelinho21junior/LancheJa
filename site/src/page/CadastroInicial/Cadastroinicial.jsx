import React,{useState} from 'react'
import {Link} from 'react-router-dom'

//css
import './CadastroInicial.css'

//imagens
import mapaValeLancheJa from '../../img/mapaValeLancheJa.JPG'


//api
import api from '../../services/api'
export default function CadastroInicial() {

  const [nome,setNome] = useState('');
  const [sobrenome,setSobrenome] = useState('');
  const [indica,setIndica] = useState('');
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');

  async function handleSubmit(){
    const data = {
      nome:nome,
      sobrenome:sobrenome,
      codigoindicacao:indica,
      email:email,
      senha:senha}

      if(nome==='' || sobrenome==='' || email==='' || senha===''){
        alert("Bem vindo!\nPor favor, preencha todos os dados!")
      }else{
        const response = await api.post('/cliente',data);

        if(response.status===200){
          alert('Bem vindo!\nCadastro realizado com sucesso!')
          window.location.href='/TelaClienteHome'
        }else{
          alert('erro ao cadastrar o usuario')
        }
      }  
    }
  
  
  return (
    <div>
      <div className='ContainerCadastroInicial'>
        {/*titulo CSS DESTE TITULO VEM DO CSS DO QUEM SOMOS*/}
      <div className='tituloQuemSomosCorLaranja'>
        <div className='tituloQuemSomos'>
          <div>
            <Link to='/' className='LinkcadastroInicial'>
              <span className='TxttituloQuemSomosLancheJá'>LancheJá</span>
            </Link>
          </div>
          <div>
            <span className='TxttituloQuemSomos'>Cadastro</span>
          </div>
        </div>
      </div>

       {/*Cadastro e Imagem*/}
        <div className='CadastroInicialCadastroEImagem'> 
          <div className='CadastroInicialCadastro'>

            {/*
            <div className='CadastroInicialCadastroItensDoCadastroImagem'>
              <spam>Imagem</spam>
            </div>*/}

            <div className='CadastroInicialCadastroItensDoCadastroNomeESobrenome'>
              <div className='CadastroInicialCadastroItensDoCadastroNomeESobrenomeindividual'>
                <spam>Nome</spam>
                <input type='text' name='nome' placeholder='Digite seu nome aqui' value={nome} onChange={e => setNome(e.target.value)} className='CadastroInicialCadastroItensDoCadastroINPUTNomeESobrenome'/>
              </div>
              <div className='CadastroInicialCadastroItensDoCadastroNomeESobrenomeindividual'>
                <spam>Sobrenome</spam>
                <input type='text' name='sobrenome' placeholder='Digite seu sobrenome aqui' value={sobrenome} onChange={e => setSobrenome(e.target.value)} className='CadastroInicialCadastroItensDoCadastroINPUTNomeESobrenome'/>
              </div>
              
            </div>

            <div className='CadastroInicialCadastroItensDoCadastro'>
              <spam>Codigo de indicação</spam>
              <input type='text' name='codindicacao' value={indica} onChange={e => setIndica(e.target.value)} className='CadastroInicialCadastroItensDoCadastroINPUTCodigoIndicaçao'/>
              <spam>(Insira o codigo de quem ti indicou)</spam>
            </div>

            <div className='CadastroInicialCadastroItensDoCadastro'>
              <spam>Email</spam>
              <input type='text' name='email' maxLength='45' placeholder='Digite seu email(max 45 caracteres)' value={email} onChange={e => setEmail(e.target.value)} className='CadastroInicialCadastroItensDoCadastroINPUT'/>
            </div>

            <div className='CadastroInicialCadastroItensDoCadastro'>
              <spam>Senha</spam>
              <input type='password' maxLength='45' placeholder='Digite sua senha(max 45 caracteres)' name='senha' value={senha} onChange={e => setSenha(e.target.value)} className='CadastroInicialCadastroItensDoCadastroINPUT'/>
            </div>

            <div>
              <Link to='/Login' className='CadastroInicialCadastroJaPossuiCadastro'>
                <spam>Ja possui o cadastro?Acesse!</spam>
              </Link>
            </div>

            <div className='CadastroInicialCadastroBTN'>
              <button name='btncadastroinicial' onClick={handleSubmit} className='CadastroInicialCadastroBTNCadastro'>CADASTRAR</button>
            </div>

          </div>
          <div className='CadastroInicialImagem'>
            <img src={mapaValeLancheJa} alt=''  className='CadastroInicialImagemIMG'/>
          </div>
        </div>
      </div>
    </div>
  );
}


