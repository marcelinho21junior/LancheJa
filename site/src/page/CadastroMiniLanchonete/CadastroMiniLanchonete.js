import React from 'react'

import './CadastroMiniLanchonete.css'

//api
//import api from '../../services/api'

export default function CadastroMiniLanchonete(){
  /*
    const [nome,setNome] = useState('');
    const [razaosocial,setrazaosocial] = useState('');
    const [cpf,setcpf] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    async function handleSubmit(){
        const data = {
          nome:nome,
          razaosocial:razaosocial,
          cpf:cpf,
          email:email,
          senha:senha}
    
          if(nome==='' || razaosocial==='' || cpf==='' || email==='' || senha===''){
            alert("Bem vindo!\nPor favor, preencha todos os dados!")
          }else{
            const response = await api.post('/TelaVendedorDados',data);
    
            if(response.status===200){
              alert('Bem vindo!\nCadastro realizado com sucesso!')
              window.location.href='/TelaVendedorDados'
            }else{
              alert('erro ao cadastrar o usuario')
            }
          }  
        }

        */
    return(
        <div className='ContainerCadastroMiniLanchonete'>

            <div className='ContainerCadastroMiniLanchoneteInputs'>
                <div className='ContainerCadastroMiniLanchoneteInputsItens'>
                    <div className=''>
                       <input type='text' placeholder='Nome'  className='ContainerCadastroMiniLanchoneteInputsItensText'/> 
                    </div>
                </div>
                <div className='ContainerCadastroMiniLanchoneteInputsItens'>
                    <input type='text' placeholder='Razão Social' className='ContainerCadastroMiniLanchoneteInputsItensText'/>
                </div>
                <div className='ContainerCadastroMiniLanchoneteInputsItens'>
                    <input type='text' placeholder='CPF' className='ContainerCadastroMiniLanchoneteInputsItensText'/>
                </div>
                <div className='ContainerCadastroMiniLanchoneteInputsItens'>
                    <input type='text' placeholder='Email' className='ContainerCadastroMiniLanchoneteInputsItensText'/>
                </div>
                <div className='ContainerCadastroMiniLanchoneteInputsItens'>
                    <input type='text' placeholder='Senha' className='ContainerCadastroMiniLanchoneteInputsItensText'/>
                </div>
                <button className='ContainerCadastroMiniLanchoneteInputsBotao'>Cadastrar</button>
            </div>
            oi
        </div>
    )
}